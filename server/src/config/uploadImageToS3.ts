import { Request, Response } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const uploadImageToS3 = async (
  file: Express.Multer.File
): Promise<string> => {
  const fileName = `${Date.now()}-${file.originalname}`;
  const bucketName = process.env.AWS_BUCKET_NAME || "";

  if (!bucketName) {
    throw new Error(
      "AWS_BUCKET_NAME is not defined in the environment variables"
    );
  }

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);

    const cloudFrontUrl = `https://${
      process.env.CLOUDFRONT_DOMAIN || ""
    }/${fileName}`;
    return cloudFrontUrl;
  } catch (error: any) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};
