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

  await prisma.product.createMany({
    data: [
      //1
      {
        name: "Kopi Luwak",
        description:
          "One of the rarest and most expensive coffees in the world, made from coffee beans digested and excreted by the Asian palm civet.",
        price: 5000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Kopi+Luwak.jpg",
        categoryId: "1",
      },
      {
        name: "Dom Pérignon Champagne",
        description:
          "A luxurious and prestige cuvée champagne made from the finest grapes and aged for a minimum of 7 years.",
        price: 20000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Dom+P%C3%A9rignon+Champagne.jpg",
        categoryId: "1",
      },
      {
        name: "Jamaican Blue Mountain Coffee",
        description:
          "A rare and expensive coffee grown in the Blue Mountains of Jamaica, known for its mild flavor and lack of bitterness.",
        price: 3000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Jamaican+Blue+Mountain+Coffee.jpg",
        categoryId: "1",
      },
      {
        name: "Louis XIII Cognac",
        description:
          "A luxurious and premium cognac made from a blend of up to 1,200 eaux-de-vie, aged for up to 100 years.",
        price: 100000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Louis+XIII+Cognac.jpg",
        categoryId: "1",
      },
      {
        name: "Golden Opulence Chocolate Tea",
        description:
          "A luxurious and expensive tea made from the finest chocolate and tea leaves, infused with 24K gold.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Golden+Opulence+Chocolate+Tea.jpg",
        categoryId: "1",
      },
      {
        name: "Moose Milk Vodka",
        description:
          "A premium and unique vodka made from the milk of moose, known for its creamy texture and smooth flavor.",
        price: 8000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Moose+Milk+Vodka.jpg",
        categoryId: "1",
      },
      {
        name: "Yubari King Melon Juice",
        description:
          "A luxurious and expensive juice made from the rare and prized Yubari King melon, grown in greenhouses in Japan.",
        price: 10000,
        image: "https://example.com/images/yubari-king-melon-juice.jpg",
        categoryId: "1",
      },
      {
        name: "Densuke Watermelon Juice",
        description:
          "A premium and unique juice made from the rare and prized Densuke watermelon, grown only on the island of Hokkaido in Japan.",
        price: 12000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Densuke+Watermelon+Juice.jpg",
        categoryId: "1",
      },
      {
        name: "Kona Nigari Water",
        description:
          "A luxurious and expensive water made from the purest water sources in Hawaii, filtered through volcanic rock.",
        price: 2500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Kona+Nigari+Water.jpg",
        categoryId: "1",
      },
      {
        name: "Caviar-Infused Vodka",
        description:
          "A luxurious and premium vodka infused with the finest caviar, known for its smooth flavor and luxurious texture.",
        price: 15000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/baverages/Caviar-Infused+Vodka.jpg",
        categoryId: "1",
      },

      //2

      {
        name: "Truffle Honey",
        description:
          "A luxurious, hand-harvested honey infused with the earthy flavor of truffles.",
        price: 2000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/truffleHoney.jpg",
        categoryId: "2",
      },
      {
        name: "Artisanal Balsamic Vinegar",
        description:
          "A rich, aged balsamic vinegar made from high-quality grapes and crafted in small batches.",
        price: 2500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Artisanal+Balsamic+Vinegar.jpg",
        categoryId: "2",
      },
      {
        name: "Kona Coffee",
        description:
          "A rare, high-quality coffee grown on the slopes of Hualalai and Mauna Loa in Hawaii.",
        price: 3000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Kona+Coffee.jpg",
        categoryId: "2",
      },
      {
        name: "Fleur de Sel de Guérande",
        description:
          "A delicate, hand-harvested sea salt from France, perfect for adding a touch of elegance to any dish.",
        price: 1000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Fleur+de+Sel+de+Gu%C3%A9rande.jpg",
        categoryId: "2",
      },
      {
        name: "Caviar",
        description:
          "A luxurious, high-quality caviar harvested from sustainable sources and perfect for special occasions.",
        price: 15000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Caviar.jpg",
        categoryId: "2",
      },
      {
        name: "Tuscan Extra Virgin Olive Oil",
        description:
          "A rich, full-bodied olive oil made from high-quality olives grown in Tuscany.",
        price: 1800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Tuscan+Extra+Virgin+Olive+.jpg",
        categoryId: "2",
      },
      {
        name: "Maldon Sea Salt Flakes",
        description:
          "A delicate, crunchy sea salt harvested by hand from the Maldon area in England.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Maldon+Sea+Salt+Flakes.jpg",
        categoryId: "2",
      },
      {
        name: "Saffron Threads",
        description:
          "High-quality, hand-harvested saffron threads perfect for adding a touch of luxury to any dish.",
        price: 5000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Saffron+Threads.jpg",
        categoryId: "2",
      },
      {
        name: "Brioche Bread",
        description:
          "A rich, buttery bread made with high-quality ingredients and perfect for serving with specialty cheeses and meats.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Brioche+Bread.jpg",
        categoryId: "2",
      },
      {
        name: "Dark Chocolate Truffles",
        description:
          "Rich, handcrafted dark chocolate truffles made with high-quality cocoa and perfect for indulging in a sweet treat.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/specialfoods/Dark+Chocolate+Truffles.jpg",
        categoryId: "2",
      },

      //3

      {
        name: "Sumatran Mandheling Pepper",
        description:
          "A rare, high-quality peppercorn from Sumatra, known for its rich, earthy flavor.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Sumatran+Mandheling+Peppe.jpg",
        categoryId: "3",
      },
      {
        name: "Smoked Paprika",
        description:
          "A smoky, slightly sweet paprika made from high-quality peppers smoked over oak wood.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Smoked+Paprika.jpg",
        categoryId: "3",
      },
      {
        name: "Kashmiri Red Chili Powder",
        description:
          "A vibrant, aromatic chili powder made from high-quality Kashmiri red chilies.",
        price: 600,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Kashmiri+Red+Chili.jpg",
        categoryId: "3",
      },
      {
        name: "French Grey Sea Salt",
        description:
          "A delicate, flaky sea salt harvested by hand from the surface of salt pans in France.",
        price: 1000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/French+Grey+Sea+Salt.jpg",
        categoryId: "3",
      },
      {
        name: "Indian Garam Masala",
        description:
          "A warm, aromatic spice blend made from high-quality spices, including cinnamon, cardamom, and cloves.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Indian+Garam+Masala.jpg",
        categoryId: "3",
      },
      {
        name: "Moroccan Ras el Hanout",
        description:
          "A complex, aromatic spice blend made from high-quality spices, including cumin, coriander, and cinnamon.",
        price: 1800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Moroccan+Ras+el+hanout.jpg",
        categoryId: "3",
      },
      {
        name: "Sicilian Oregano",
        description:
          "A pungent, earthy oregano made from high-quality leaves grown in Sicily.",
        price: 500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Sicilian+Oregano.jpg",
        categoryId: "3",
      },
      {
        name: "Madras Curry Powder",
        description:
          "A warm, aromatic curry powder made from high-quality spices, including turmeric, coriander, and cumin.",
        price: 900,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Madras+Curry+Powder.jpg",
        categoryId: "3",
      },
      {
        name: "Bourbon Smoked Black Pepper",
        description:
          "A rich, smoky black pepper made from high-quality peppercorns smoked over bourbon-infused wood.",
        price: 2000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/species/Bourbon+Smoked+Black+Pepper.jpg",
        categoryId: "3",
      },

      //4

      {
        name: "Gourmet Cheese Board",
        description:
          "A beautifully crafted wooden board paired with artisanal cheeses, crackers, and fruit.",
        price: 3000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Gourmet+Cheese+Board.jpg",
        categoryId: "4",
      },
      {
        name: "Truffle Infused Olive Oil Set",
        description:
          "A luxurious set of truffle-infused olive oils perfect for cooking and gift-giving.",
        price: 2500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/ruffle+Infused+Olive+Oil+Set.jpg",
        categoryId: "4",
      },
      {
        name: "Artisanal Chocolate Gift Box",
        description:
          "A decadent gift box filled with handcrafted chocolates made from high-quality cocoa.",
        price: 1800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Artisanal+Chocolate+Gift+Box.jpg",
        categoryId: "4",
      },
      {
        name: "Gourmet Food and Wine Basket",
        description:
          "A thoughtfully curated basket filled with gourmet goodies, fine wines, and artisanal treats.",
        price: 5000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Gourmet+Food+and+Wine+Basket.jpg",
        categoryId: "4",
      },
      {
        name: "Infused Salt Gift Set",
        description:
          "A unique gift set featuring artisanal infused salts, perfect for adding flavor to various dishes.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Infused+Salt+Gift+Set.jpg",
        categoryId: "4",
      },
      {
        name: "Gourmet Coffee and Tea Gift Box",
        description:
          "A gift box filled with specialty coffees and teas from around the world, paired with sweet treats.",
        price: 2200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Gourmet+Coffee+and+Tea+Gift+Box.jpg",
        categoryId: "4",
      },
      {
        name: "Artisanal Jam and Honey Gift Set",
        description:
          "A gift set featuring small-batch jams and honeys made from high-quality, all-natural ingredients.",
        price: 1700,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Artisanal+Jam+and+Honey+Gift+Set.jpg",
        categoryId: "4",
      },
      {
        name: "Gourmet Popcorn Gift Tin",
        description:
          "A beautifully crafted gift tin filled with gourmet popcorn flavors made from all-natural ingredients.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Gourmet+Popcorn+Gift+Tin.jpg",
        categoryId: "4",
      },
      {
        name: "Luxurious Caviar Gift Set",
        description:
          "A luxurious gift set featuring high-quality caviar, perfectly paired with crackers, toast points, and other accompaniments.",
        price: 8000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Gourmet+Gifts/Luxurious+Caviar+Gift+Set.jpg",
        categoryId: "4",
      },

      //5

      {
        name: "Artisanal Popcorn",
        description:
          "Handcrafted popcorn in unique flavors like truffle, parmesan, and sriracha.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Artisanal+Popcorn.jpg",
        categoryId: "5",
      },
      {
        name: "Kettle Cooked Chips",
        description:
          "Crunchy, small-batch chips cooked in kettles with all-natural ingredients.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Kettle+Cooked+Chip.jpg",
        categoryId: "5",
      },
      {
        name: "Gourmet Pretzels",
        description:
          "Soft, buttery pretzels topped with artisanal ingredients like truffle salt and sesame seeds.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Gourmet+Pretzels.jpg",
        categoryId: "5",
      },
      {
        name: "Spicy Roasted Chickpeas",
        description:
          "Crispy, flavorful chickpeas roasted with spices and herbs.",
        price: 700,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Spicy+Roasted+Chickpeas.jpg",
        categoryId: "5",
      },
      {
        name: "Dark Chocolate-Covered Nuts",
        description:
          "Rich, high-quality nuts smothered in decadent dark chocolate.",
        price: 1800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Dark+Chocolate-Covered+Nuts.jpg",
        categoryId: "5",
      },
      {
        name: "Baked Apple Chips",
        description:
          "Thin slices of apples baked to a crispy perfection with a hint of cinnamon.",
        price: 900,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Baked+Apple+Chips.jpg",
        categoryId: "5",
      },
      {
        name: "Handcrafted Granola",
        description:
          "Small-batch granola made with rolled oats, nuts, and dried fruits.",
        price: 1100,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Handcrafted+Granola.jpg",
        categoryId: "5",
      },
      {
        name: "Crunchy Fried Plantain Chips",
        description:
          "Thin slices of plantains fried to a crispy perfection with a sprinkle of sea salt.",
        price: 850,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/.+Crunchy+Fried+Plantain+Chips.jpg",
        categoryId: "5",
      },
      {
        name: "Gourmet Cheese Puffs",
        description:
          "Light, airy cheese puffs made with high-quality cheese and all-natural ingredients.",
        price: 1300,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/.+Gourmet+Cheese+Puffs.jpg",
        categoryId: "5",
      },
      {
        name: "Cinnamon Sugar Donut Holes",
        description:
          "Bite-sized donut holes coated in a sweet cinnamon sugar mixture, perfect for snacking.",
        price: 1000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/snaks/Cinnamon+Sugar+Donut+Holes.jpg",
        categoryId: "5",
      },

      {
        name: "Artisanal Vanilla Beans",
        description:
          "High-quality, fragrant vanilla beans perfect for baking and cooking.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Artisanal+Vanilla+Beans.jpg",
        categoryId: "6",
      },
      {
        name: "European-Style Butter",
        description:
          "Rich, creamy butter made from high-quality milk and perfect for baking.",
        price: 500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/European-Style+Butter.jpg",
        categoryId: "6",
      },
      {
        name: "Gourmet Food Coloring",
        description:
          "Vibrant, high-quality food coloring made from natural ingredients, perfect for decorating cakes and pastries.",
        price: 300,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Gourmet+Food+Coloring.jpg",
        categoryId: "6",
      },
      {
        name: "Baker's Confectioner's Sugar",
        description:
          "Fine, powdery confectioner's sugar perfect for dusting cakes, cookies, and pastries.",
        price: 250,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/.Baker's+Confectioner's+Sugar.jpg",
        categoryId: "6",
      },
      {
        name: "Unbleached All-Purpose Flour",
        description:
          "High-quality, unbleached flour perfect for baking bread, cakes, and pastries.",
        price: 350,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Unbleached+All-Purpose.jpg",
        categoryId: "6",
      },
      {
        name: "Gourmet Baking Spices",
        description:
          "A selection of high-quality, aromatic spices like cinnamon, nutmeg, and cardamom, perfect for baking.",
        price: 600,
        image:
          "hhttps://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Gourmet+Baking+Spices.jpg",
        categoryId: "6",
      },
      {
        name: "Professional-Grade Baking Sheets",
        description:
          "Durable, non-stick baking sheets perfect for baking cookies, pastries, and bread.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Professional-Grade+Baking+Sheets.jpg",
        categoryId: "6",
      },
      {
        name: "Gourmet Cocoa Powder",
        description:
          "Rich, high-quality cocoa powder perfect for baking cakes, cookies, and brownies.",
        price: 700,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Gourmet+Cocoa+Powder.jpg",
        categoryId: "6",
      },
      {
        name: "Decorative Edible Glitter",
        description:
          "Sparkling, edible glitter perfect for decorating cakes, cupcakes, and pastries.",
        price: 450,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Decorative+Edible+Glitter.jpg",
        categoryId: "6",
      },
      {
        name: "Silicone Baking Mats",
        description:
          "Flexible, non-stick silicone mats perfect for baking delicate pastries and bread.",
        price: 900,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Baking+Supplies/Silicone+Baking+Mats.jpg",
        categoryId: "6",
      },

      //7

      {
        name: "Extra Virgin Olive Oil",
        description:
          "High-quality, cold-pressed olive oil perfect for cooking and dressings.",
        price: 1500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Extra+Virgin+Olive+Oil.jpg",
        categoryId: "7",
      },
      {
        name: "Balsamic Vinegar",
        description:
          "Aged, high-quality balsamic vinegar perfect for salad dressings and marinades.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Balsamic+Vinegar.jpg",
        categoryId: "7",
      },
      {
        name: "Pure Maple Syrup",
        description:
          "Grade-A, pure maple syrup harvested from sustainable forests.",
        price: 2000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Pure+Maple+Syrup.jpg",
        categoryId: "7",
      },
      {
        name: "Artisanal Pasta",
        description:
          "Handcrafted, small-batch pasta made from high-quality durum wheat semolina.",
        price: 1100,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Artisanal+Pasta.jpg",
        categoryId: "7",
      },
      {
        name: "Quinoa and Brown Rice Blend",
        description:
          "A nutritious blend of quinoa and brown rice, perfect for healthy meals.",
        price: 900,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Quinoa+and+Brown+Rice+Blend.jpg",
        categoryId: "7",
      },
      {
        name: "Canned San Marzano Tomatoes",
        description:
          "High-quality, flavorful tomatoes harvested from the Campania region of Italy.",
        price: 1300,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Canned+San+Marzano+Tomatoes.jpg",
        categoryId: "7",
      },
      {
        name: "Roasted and Salted Almonds",
        description:
          "Crunchy, flavorful almonds roasted to perfection and seasoned with sea salt.",
        price: 1000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Roasted+and+Salted+Almonds.jpg",
        categoryId: "7",
      },
      {
        name: "Dried Fruits and Nuts Mix",
        description:
          "A healthy blend of dried fruits and nuts, perfect for snacking.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Dried+Fruits+and+Nuts+Mix.jpg",
        categoryId: "7",
      },
      {
        name: "Gourmet Honey",
        description:
          "Raw, unfiltered honey harvested from sustainable bee farms.",
        price: 1800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Gourmet+Honey.jpg",
        categoryId: "7",
      },
      {
        name: "Sea Salt and Pepper Blend",
        description:
          "A flavorful blend of artisanal sea salt and freshly ground pepper, perfect for seasoning dishes.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Pantry+Staples/Sea+Salt+and+Pepper+Blend.jpg",
        categoryId: "7",
      },

      //8

      {
        name: "Artisanal French Butter",
        description:
          "Rich, creamy butter made from high-quality milk and perfect for baking.",
        price: 500,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Artisanal+French+Butte.jpg",
        categoryId: "8",
      },
      {
        name: "Italian Gelato",
        description:
          "Creamy, handcrafted gelato made with high-quality ingredients and unique flavors.",
        price: 700,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Italian+Gelato.jpg",
        categoryId: "8",
      },
      {
        name: "Farm-Fresh Eggs",
        description:
          "Fresh, high-quality eggs from local farms, perfect for baking and cooking.",
        price: 300,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Farm-Fresh+Eggs.jpg",
        categoryId: "8",
      },
      {
        name: "Creme Fraiche",
        description:
          "Rich, creamy creme fraiche made from high-quality cream and perfect for baking and cooking.",
        price: 600,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Creme+Fraiche.jpg",
        categoryId: "8",
      },
      {
        name: "Mascarpone Cheese",
        description:
          "Creamy, triple-cream mascarpone cheese perfect for desserts like tiramisu.",
        price: 800,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Mascarpone+Cheese.jpg",
        categoryId: "8",
      },
      {
        name: "Artisanal Yogurt",
        description:
          "Handcrafted, small-batch yogurt made from high-quality milk and perfect for snacking.",
        price: 400,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Artisanal+Yogurt.jpg",
        categoryId: "8",
      },
      {
        name: "French Macarons",
        description:
          "Delicate, handcrafted macarons made with high-quality ingredients and unique flavors.",
        price: 1200,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/French+Macarons.jpg",
        categoryId: "8",
      },
      {
        name: "Whipped Cream and Toppings Bar",
        description:
          "A selection of whipped cream flavors and toppings, perfect for customizing desserts.",
        price: 900,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Whipped+Cream+and+Toppings+BarWhipped+Cream+and+Toppings+Bar.jpg",
        categoryId: "8",
      },
      {
        name: "Artisanal Ice Cream Sandwiches",
        description:
          "Handcrafted ice cream sandwiches made with high-quality cookies and unique ice cream flavors.",
        price: 1000,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Artisanal+Ice+Cream+Sandwiches.jpg",
        categoryId: "8",
      },
      {
        name: "Custard and Pudding Mixes",
        description:
          "Gourmet mixes for making creamy custards and puddings at home.",
        price: 450,
        image:
          "https://elvecategory.s3.ap-south-1.amazonaws.com/products/Dairy+and+Patisserie/Custard+and+Pudding+Mixes.jpg",
        categoryId: "8",
      },
    ],
  });
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
