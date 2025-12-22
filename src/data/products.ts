export interface AccordionItem {
  title: string;
  items: string[];
}

export interface Product {
  title: string;
  subtitle: string;
  images: string[];
  highlights: string[];
  accordions: AccordionItem[];

  buyLinks: {
    amazon?: string;
    flipkart?: string;
  };
}

const products: Record<string, Product> = {
  "hair-oil": {
    title: "Advanced Hair Growth Oil",
    subtitle: "Lightweight nourishment for scalp and hair",
    images: [
      "/images/products/hair-oil/hair-1.jpg",
      "/images/products/hair-oil/hair-2.jpg",
      "/images/products/hair-oil/hair-3.jpg",
      "/images/products/hair-oil/hair-4.jpg",
      "/images/products/hair-oil/hair-5.jpg",
      "/images/products/hair-oil/hair-6.jpg",
    ],
    highlights: [
      "Reduces hair fall",
      "Strengthens roots",
      "Non-sticky herbal blend",
    ],
    accordions: [
      {
        title: "Key Ingredients",
        items: [
          "Amla Oil: Traditionally used in hair oils to support strong, healthy-looking hair.",
          "Jojoba & Coconut Oil: Help moisturise strands and add a natural shine without feeling too heavy.",
          "Sesame & Sunflower Oil: Help nourish the scalp and seal in moisture so hair feels smoother and more manageable."
        ]
      },
      {
        title: "Why Your Hair Needs This",
        items: [
          "Everyday Nourishment: Lightweight, non-sticky texture that works well for regular oiling rituals.",
          "Stronger-Feeling Strands: Helps reduce breakage-related hair fall from brushing and daily styling.",
          "Softness & Shine: Leaves hair feeling smoother, softer and easier to manage.",
          "Clean & Conscious: Paraben-free formula, suitable for most hair types and for both men and women."
        ]
      },
      {
        title: "How to Use",
        items: [
          "Warm: Place the closed bottle in a bowl of warm water for a few minutes (optional).",
          "Apply: Take a small amount and massage onto scalp and along hair length.",
          "Relax: Leave on for 20 – 30 minutes or overnight.",
          "Wash: Shampoo as usual.",
          "Use 2 – 3 times a week for best results."
        ]
      }
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/dp/B0FVTGCDL7",
      flipkart: "https://www.flipkart.com/nexusario-hair-growth-oil-amla-jojoba-coconut-aloe-vera-natural-no-paraben-100-ml/p/itmddefaa853819d?pid=HOLHHP5TB2VY6BN6",
    },
  },


  "body-lotion": {
    title: "Deep Hydration Body Lotion",
    subtitle: "Long-lasting hydration without heaviness",
    images: [
      "/images/products/lotion/lotion-1.jpg",
      "/images/products/lotion/lotion-2.jpg",
      "/images/products/lotion/lotion-3.jpg",
      "/images/products/lotion/lotion-4.jpg",
      "/images/products/lotion/lotion-5.jpg",
      "/images/products/lotion/lotion-6.jpg",
    ],
    highlights: [
      "Long-lasting hydration",
      "Fast absorbing",
      "Suitable for all skin types",
    ],
    accordions: [
      {
        title: "Key Ingredients",
        items: [
          "Mango Butter: Known for its creamy richness that helps soften and condition dry-feeling skin.",
          "Cocoa Butter: Helps provide lasting moisture and leaves skin feeling smooth and well-conditioned.",
          "Shea Butter & Almond Oil: Help lock in hydration so skin feels soft and nourished."
        ]
      },
      {
        title: "Why Your Skin Needs This",
        items: [
          "Deep Moisture: A velvety blend that helps keep skin comfortably hydrated for hours.",
          "Soft, Smooth Texture: Helps improve the feel of rough, dry areas for a naturally healthy-looking glow.",
          "Daily-Friendly: Lightweight, non-sticky and suitable for most skin types.",
          "Clean Formulation: Free from parabens and harsh chemicals."
        ]
      },
      {
        title: "How to Use",
        items: [
          "Apply liberally all over the body, focusing on dry areas like elbows, knees and heels.",
          "For best results, use immediately after a shower to help lock in moisture."
        ]
      }
    ],
    buyLinks: {
      amazon: "https://www.amazon.in/dp/B0FVVJDB8C",
      flipkart: "https://www.flipkart.com/nexusario-moisturizer-body-lotion-men-women/p/itm0b661845f5beb?pid=MSCHGS3ZDFRGZSHP",
    },
  },
};

export default products;
