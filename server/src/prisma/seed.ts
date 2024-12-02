import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { id: "1", name: "Beverages", type: "BEVERAGES" },
      { id: "2", name: "Specialty Foods", type: "SPECIALTY_FOODS" },
      { id: "3", name: "Spices and Seasonings", type: "SPICES_AND_SEASONINGS" },
      { id: "4", name: "Gourmet Gifts", type: "GOURMET_GIFTS" },
      { id: "5", name: "Snacks", type: "SNACKS" },
      { id: "6", name: "Baking Supplies", type: "BAKING_SUPPLIES" },
      { id: "7", name: "Pantry Staples", type: "PANTRY_STAPLES" },
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
