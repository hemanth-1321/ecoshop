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
  req: Request,
  res: Response
): Promise<void> => {
  const { file } = req;

  if (!file) {
    res.status(400).json({
      message: "No file provided",
    });
    return;
  }

  const fileName = `${Date.now()}-${file.originalname}`;
  const bucketName = process.env.AWS_BUCKET_NAME || "";

  if (!bucketName) {
    res.status(500).json({
      message: "AWS_BUCKET_NAME is not defined in the environment variables",
    });
    return;
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

    res.status(201).json({
      message: "Image uploaded successfully",
      s3Url: `https://${bucketName}.s3.${
        process.env.AWS_REGION || ""
      }.amazonaws.com/${fileName}`,
      cloudFrontUrl,
    });

    console.log("CloudFront URL:", cloudFrontUrl);
  } catch (error: any) {
    console.error("Error uploading image:", error);
    res
      .status(500)
      .json({ message: "Failed to upload image", error: error.message });
  }
};
