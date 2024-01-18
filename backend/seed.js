/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    // USER
    const user = [
      {
        firstname: "Julie",
        lastname: "Bérard",
        email: "JulieBerard@armyspy.com",
        password: "Sheif7aezah",
        age: 25,
        city: "Paris",
        country: "France",
        skin_id_1: 5,
        skin_id_2: 6,
        skin_id_3: 1,
      },
      {
        firstname: "Bjron",
        lastname: "Mårtensson",
        email: "BjronMartensson@rhyta.com",
        password: "Keit6oowu4b",
        age: 52,
        city: "stockholm",
        country: "Sweden",
        skin_id_1: 5,
        skin_id_2: 3,
        skin_id_3: 7,
      },
      {
        firstname: "Monica",
        lastname: "Schiavone",
        email: "MonicaSchiavone@teleworm.us",
        password: "azieXohgh5",
        age: 38,
        city: "Napoli",
        country: "Italy",
        skin_id_1: 2,
        skin_id_2: 6,
        skin_id_3: 1,
      },
    ];

    // SKIN
    const skin = [
      "Tired",
      "Oily",
      "Aging skin",
      "normal & combination",
      "Dry",
      "Sensitive",
      "Dull",
      "All skin types",
      "",
    ];

    // PRODUCT
    const product = [
      {
        name: "Revitalift Filler Eye Serum 2.5% Hyaluronic Acid + Caffeine",
        description:
          "Discover our first specific serum for the eyes! Our highest concentration of Hyaluronic Acid and Caffeine to plump up all wrinkles around the eyes and reduce dark circles.",
        price: 14.99,
        image:
          "./public/assets/images/REVITALIFT FILLER SÉRUM YEUX 2,5% ACIDE HYALURONIQUE + CAFÉINE.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/serum-et-ampoules-visage/revitalift-filler-serum-yeux-2-5--acide-hyaluronique-cafeine/OAP7183.html",
        category_id: 3,
        sub_cat_id_1: 3,
        sub_cat_id_2: 2,
        sub_cat_id_3: 13,
        skinId_1: 8,
      },

      {
        name: "Purifying scrub treatment sugars",
        description:
          "L'Oréal Paris Laboratories have selected 3 FINE SUGARS and combined them with KIWI SEEDS, to offer intense exfoliation and exceptional care in a face and lip scrub",
        price: 9.57,
        image: "./public/assets/images/SUCRES DE SOIN GOMMAGE PURIFIANT.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/gommage/sucres-de-soin-gommage-purifiant/OAP6516.html",
        category_id: 6,
        sub_cat_id_1: 12,
        sub_cat_id_2: 14,
        sub_cat_id_3: 15,
        skinId_1: 2,
        skinId_2: 4,
      },

      {
        name: "Revitalift day",
        description:
          "Revitalift Moisturizing Day Care hydrates and firms the skin. It is suitable for people aged 35 and up to 55. Reduces wrinkles, smoothes the skin's surface, firms and strengthens skin tone.",
        price: 8.24,
        image: "./public/assets/images/REVITALIFT JOUR.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/creme-de-jour/revitalift-jour/OAP5218.html",
        category_id: 1,
        sub_cat_id_1: 1,
        sub_cat_id_2: 6,
        skinId_1: 4,
        skinId_2: 5,
      },

      {
        name: "Pure Clay Anti-imperfection Mask",
        description:
          "L'Oréal Paris Laboratories have selected 3 Pure Clays and combined them with Marine Algae extract in an ultra-melting, non-drying cream-mask texture to fight against blackheads and unclog pores, without dehydrating.",
        price: 9.71,
        image:
          "./public/assets/images/MASQUE ANTI-IMPERFECTIONS ARGILE PURE.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/masque-et-nettoyant/masque-anti-imperfections-argile-pure/OAP6725.html",
        category_id: 5,
        sub_cat_id_1: 15,
        sub_cat_id_2: 10,
        skinId_1: 1,
        skinId_2: 2,
        skinId_3: 4,
      },

      {
        name: "Bright Reveal Fluide Anti-uv Spf50+ Anti-taches Niacinamide",
        description:
          "Dermatologists recommend protecting your skin daily against UV rays for optimal correction of spots. Bright Reveal Anti-UV SPS 50+ Anti-Stain Fluid offers very high protection against UVB and long UVA rays to prevent signs of aging and the appearance of spots. Scientifically formulated and concentrated in anti-stain active ingredients.",
        price: 19.99,
        image:
          "./public/assets/images/BRIGHT REVEAL FLUIDE ANTI-UV SPF50+ ANTI-TACHES NIACINAMIDE.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/creme-de-jour/bright-reveal-fluide-anti-uv-spf50--anti-taches-niacinamide/OAP7402.html",
        category_id: 1,
        sub_cat_id_1: 3,
        sub_cat_id_2: 7,
        sub_cat_id_3: 8,
        skinId_1: 8,
      },

      {
        name: "Pure Clay Detox Mask",
        description:
          "L'Oréal Paris Laboratories have selected 3 Pure Clays and combined them with Charcoal in an ultra-melting, non-drying cream-mask texture, to detoxify the skin and reveal its radiance, without dehydrating it.",
        price: 6.74,
        image: "./public/assets/images/Masque Detox Argile Pure.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/masque-et-nettoyant/masque-detox-argile-pure/OAP6532.html",
        category_id: 5,
        sub_cat_id_1: 4,
        sub_cat_id_2: 10,
        sub_cat_id_3: 11,
        skinId_1: 5,
        skinId_2: 4,
        skinId_3: 2,
      },

      {
        name: "Age perfect freshness tonic",
        description:
          "Freshness Tonic for Mature Skin - Enriched with energizing Vitamin C and Vitamin B5 - Smoothes and relieves fatigue for radiant skin. Smoothes and relaxes mature skin. Cleans and strengthens the skin. Reveals comfortable and fortified skin.",
        price: 4.87,
        image: "./public/assets/images/Age perfect tonique fraîcheur.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/eau-micellaire-et-demaquillant/age-perfect-tonique-fraicheur/OAP3091.html",
        category_id: 7,
        sub_cat_id_1: 2,
        sub_cat_id_2: 3,
        sub_cat_id_3: 4,
        skinId_1: 3,
      },

      {
        name: "Revitalift hyaluronic acid eye filler",
        description:
          "Revitalift Filler HA Eye treatment contains the highest concentration of hyaluronic acid ever formulated in a L’Oréal Paris eye treatment.",
        price: 14.24,
        image:
          "./public/assets/images/Revitalift filler acide hyaluronique yeux.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/soin-yeux/revitalift-filler----acide-hyaluronique--yeux/OAP6436.html",
        category_id: 4,
        sub_cat_id_1: 1,
        sub_cat_id_2: 6,
        sub_cat_id_3: 9,
        skinId_1: 2,
        skinId_2: 4,
        skinId_3: 5,
      },

      {
        name: "Revitalift eyes",
        description:
          "Revitalift Moisturizing Eye Care works deeply to reduce wrinkles and firm the skin. It is suitable for people aged 35 and up to 55.",
        price: 7.69,
        image: "./public/assets/images/Revitalift yeux.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/soin-yeux/revitalift-yeux/OAP5037.html",
        category_id: 4,
        sub_cat_id_1: 1,
        sub_cat_id_2: 3,
        sub_cat_id_3: 4,
        skinId_1: 4,
        skinId_2: 5,
      },

      {
        name: "Revitalift clinical vitamine C fluide fps 50+",
        description:
          "Dermatologists recommend protecting your skin daily against UV rays to prevent all signs of aging. Revitalift Clinical Anti-UV Fluid SPF 50+ offers very high protection against UVB and long UVA rays to prevent photoinduced signs of aging: spots, wrinkles and uneven skin tone.",
        price: 14.24,
        image:
          "./public/assets/images/Revitalift clinical vitamine C fluide fps 50+.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/creme-de-jour/revitalift-clinical-vitamine-c-fluide-fps-50-/OAP7231.html",
        category_id: 1,
        sub_cat_id_1: 3,
        skinId_1: 8,
      },

      {
        name: "Revitalift filler plumping gel cream",
        description:
          "A wrinkle always starts with a fine line. The new innovative Revitalift Filler Plumping Gel-Cream fills in fine lines and helps delay their appearance. Enriched with Micro-Epidermal Hyaluronic Acid, 50x smaller than Macro Hyaluronic Acid, it penetrates deeper into the skin to plump up wrinkles and fine lines from within.",
        price: 18.74,
        image:
          "./public/assets/images/Revitalift filler gel crème repulpant.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/creme-de-jour/revitalift-filler-gel-creme-repulpant/OAP7232.html",
        category_id: 1,
        sub_cat_id_1: 3,
        skinId_1: 8,
      },

      {
        name: "Revitalift filler anti-wrinkle serum 1.5% pure hyaluronic acid",
        description:
          "Bright Reveal Anti-Spot Exfoliating Peel has been formulated to quickly reduce post-acne marks and spots. Inspired by professional peels, it contains a powerful blend of active ingredients.",
        price: 14.99,
        image:
          "./public/assets/images/Revitalift filler serum anti-rides 1.5% acide hyaluronique pur.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/serum-et-ampoules-visage/revitalift-filler-serum-anti-rides-1.5--acide-hyaluronique-pur/OAP7043.html",
        category_id: 3,
        sub_cat_id_1: 3,
        skinId_1: 8,
      },

      {
        name: "Revitalift laser x3 triple action anti-aging day cream",
        description:
          "The Revitalift Laser X3 Day Cream returns with a reinforced formula combining 3 reference anti-aging active ingredients. Pro-retinol helps smooth wrinkles and renew skin texture. Hyaluronic Acid intensely hydrates and plumps the skin. Vitamin C1 helps boost skin radiance and visibly even out skin tone.",
        price: 14.24,
        image:
          "./public/assets/images/Revitalift laser x3 creme de jour anti-age triple action.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/creme-de-jour/revitalift-laser-x3-creme-de-jour-anti-age-triple-action/OAP5412.html",
        category_id: 1,
        sub_cat_id_1: 3,
        sub_cat_id_2: 2,
        sub_cat_id_3: 13,
        skinId_1: 1,
        skinId_2: 2,
      },

      {
        name: "Cell Renewal Anti-Aging Midnight Serum",
        description:
          "Age Perfect Cell Renewal Midnight Serum is formulated with an exclusive Antioxidant Recovery Complex that works at night when skin reaches its peak of cell renewal. Millions of new cells are revealed and skin is immediately hydrated and soft to the touch. ",
        price: 14.99,
        image:
          "./public/assets/images/Age perfect renaissance cellulaire midnight serum.jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/serum-et-ampoules-visage/age-perfect-renaissance-cellulaire-midnight-serum/OAP7161.html",
        category_id: 3,
        sub_cat_id_1: 3,
        skinId_1: 8,
      },

      {
        name: "Bright Reveal Peeling Exfoliant Anti-Taches 25% [AHA + BHA + PHA]",
        description:
          "Bright Reveal Anti-Spot Exfoliating Peel has been formulated to quickly reduce post-acne marks and spots. Inspired by professional peels, it contains a powerful blend of active ingredients.",
        price: 19.99,
        image:
          "./public/assets/images/Bright Reveal Peeling Exfoliant​ Anti-Taches 25% [AHA + BHA + PHA].jpg",
        product_url:
          "https://www.loreal-paris.fr/soin/soin-par-categorie/gommage/bright-reveal-peeling-exfoliant%E2%80%8B--anti-taches-25---aha-bha-pha-/OAP7401.html",
        category_id: 6,
        sub_cat_id_1: 3,
        sub_cat_id_2: 5,
        sub_cat_id_3: 7,
        skinId_1: 8,
      },
    ];

    // CATEGORY
    const category = [
      "Day cream",
      "Night cream",
      "Facial serum and ampoules",
      "Eye cream",
      "Mask and cleanser",
      "Scrub",
      "Micellar water and makeup remover",
      "Body & sun care",
    ];

    // SUB CATEGORY
    const subCategory = [
      "Lack of firmness and volume",
      "Skin sagging",
      "Anti-aging treatment",
      "Anti-fatigue treatment",
      "Anti-imperfection care",
      "Anti-wrinkle treatment",
      "Anti-stain treatment",
      "Care with Protection",
      "Targeted care",
      "Detox treatment",
      "Radiance Treatment",
      "Exfoliating Treatment",
      "Moisturizer",
      "Cleansing Care",
      "Purifying Treatment",
    ];

    // Insert fake data into the 'user' table

    user.forEach((u) => {
      queries.push(
        database.query(
          "INSERT INTO user (firstname,lastname,email,password,age,city,country,skin_id_1,skin_id_2,skin_id_3) values (?,?,?,?,?,?,?,?,?,?)",
          [
            u.firstname,
            u.lastname,
            u.email,
            u.password,
            u.age,
            u.city,
            u.country,
            u.skin_id_1,
            u.skin_id_2,
            u.skin_id_3,
          ]
        )
      );
    });

    // Insert fake data into the 'skin' table

    skin.forEach((s) => {
      queries.push(database.query("INSERT INTO skin (type) VALUES (?)", [s]));
    });

    // Insert fake data into the 'product' table

    product.forEach((p) => {
      queries.push(
        database.query(
          "INSERT INTO product (name, description, price, image, product_url, category_id, sub_cat_id_1, sub_cat_id_2, sub_cat_id_3, skinId_1, skinId_2, skinId_3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
          [
            p.name,
            p.description,
            p.price,
            p.image,
            p.product_url,
            p.category_id,
            p.sub_cat_id_1,
            p.sub_cat_id_2,
            p.sub_cat_id_3,
            p.skinId_1,
            p.skinId_2,
            p.skinId_3,
          ]
        )
      );
    });

    // Insert fake data into the 'category' table

    category.forEach((c) => {
      queries.push(
        database.query("INSERT INTO category (name) VALUES (?)", [c])
      );
    });

    // Insert fake data into the 'sub_category' table

    subCategory.forEach((sc) => {
      queries.push(
        database.query("INSERT INTO sub_category (name) VALUES (?)", [sc])
      );
    });

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
