export type CatalogProduct = {
  id: string;
  name: string;
  stock: string;
  price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  description: string;
  ingredients: string[];
  detailPrice: string;
};

export type CatalogSection = {
  id: string;
  title: string;
  items: CatalogProduct[];
};

export const catalogCategories = [
  "Tiramisu",
  "Dessert Box",
  "Basic Cake",
  "Burnt",
];

export const catalogSections: CatalogSection[] = [
  {
    id: "tiramisu",
    title: "Tiramisu",
    items: [
      {
        id: "classic-tiramisu",
        name: "Classic Tiramisu",
        stock: "Sisa 10 Slice",
        price: "Rp22.000",
        detailPrice: "Rp22.000",
        image: require("@/assets/images/classic_tiramissu.png"),
        description:
          "Tiramisu klasik dengan lapisan krim mascarpone, kopi, dan cocoa yang seimbang untuk teman santai kapan saja.",
        ingredients: ["Mascarpone", "Kopi Espresso", "Cocoa Powder"],
      },
      {
        id: "matcha-tiramisu",
        name: "Matcha Tiramisu",
        stock: "Sisa 10 Slice",
        price: "Rp22.000",
        detailPrice: "Rp22.000",
        image: require("@/assets/images/matcha_tiramissu.png"),
        description:
          "Perpaduan matcha premium dan cream cheese lembut, dengan rasa earthy yang ringan dan manis yang pas.",
        ingredients: ["Matcha Jepang", "Cream Cheese", "Sponge Cake"],
      },
    ],
  },
  {
    id: "dessert-box",
    title: "Dessert Box",
    items: [
      {
        id: "brownies-burnt-cheesecake",
        name: "Brownies Burnt Cheesecake",
        stock: "Stok 6 Slice",
        price: "Rp25.000",
        detailPrice: "Rp25.000",
        image: require("@/assets/images/fotoproduk.png"),
        description:
          "Cake klasik favorit Maroku yang siap menemani momen manismu setiap hari. Dibuat dengan bahan berkualitas, tekstur lembut, dan rasa yang seimbang di setiap gigitan.",
        ingredients: ["Tanpa Gula", "Tanpa Tepung"],
      },
      {
        id: "choco-turkish",
        name: "Choco Turkish",
        stock: "Sisa 10 Pcs",
        price: "Rp18.000 - Rp48.000",
        detailPrice: "Rp18.000",
        image: require("@/assets/images/choco_turkish.png"),
        description:
          "Dessert box cokelat dengan tekstur moist dan lapisan ganache creamy, cocok untuk hadiah maupun camilan.",
        ingredients: ["Dark Chocolate", "Fresh Cream", "Cocoa"],
      },
      {
        id: "tiramissu-box",
        name: "Tiramissu",
        stock: "Sisa 10 Pcs",
        price: "Rp15.000 - Rp45.000",
        detailPrice: "Rp15.000",
        image: require("@/assets/images/tiramissu.png"),
        description:
          "Dessert box tiramisu praktis dengan lapisan cake lembut, cream keju, dan taburan cocoa yang ringan.",
        ingredients: ["Lady Finger", "Cream Cheese", "Cocoa Powder"],
      },
    ],
  },
];

export const catalogProducts = catalogSections.flatMap(
  (section) => section.items,
);

export function findCatalogProductById(id: string) {
  return catalogProducts.find((product) => product.id === id);
}
