import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        id: "1",
        name: "Beverages",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/baverages.jpg",
        type: "BEVERAGES",
      },
      {
        id: "2",
        name: "Specialty Foods",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/special+foods.jpg",
        type: "SPECIALTY_FOODS",
      },
      {
        id: "3",
        name: "Spices and Seasonings",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/spices.jpg",
        type: "SPICES_AND_SEASONINGS",
      },
      {
        id: "4",
        name: "Gourmet Gifts",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/gifts.jpg",
        type: "GOURMET_GIFTS",
      },
      {
        id: "5",
        name: "Snacks",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/snakes.jpg",
        type: "SNACKS",
      },
      {
        id: "6",
        name: "Baking Supplies",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/baking.jpg",
        type: "BAKING_SUPPLIES",
      },
      {
        id: "7",
        name: "Pantry Staples",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/pantry.jpg",
        type: "PANTRY_STAPLES",
      },
      {
        id: "8",
        name: " Dairy and Patisserie",
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/categoryImges/dairy.jpg",
        type: "DAIRY_AND_PATISSERIE",
      },
    ],
  });
  console.log("Seeded database with categories");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
