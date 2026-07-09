/**
 * Free stock image URLs from Unsplash for each industry
 * These are legal to use via Unsplash's free license
 */

export const industryImages: Record<string, {
  hero: string;
  gallery: string[];
  trustLogos: string[];
}> = {
  restaurant: {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    ],
    trustLogos: ["Zomato Partner", "Swiggy Listed", "Google 4.8★", "TripAdvisor"],
  },
  clinic: {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
      "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=600&q=80",
    ],
    trustLogos: ["NABH Accredited", "15,000+ Patients", "20+ Doctors", "Google 4.9★"],
  },
  salon: {
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
      "https://images.unsplash.com/photo-1633681122956-0cdc2c668f76?w=600&q=80",
    ],
    trustLogos: ["5000+ Clients", "Premium Products", "Award-Winning", "Google 4.8★"],
  },
  gym: {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80",
    ],
    trustLogos: ["2000+ Members", "Certified Trainers", "Open 5AM-11PM", "Google 4.7★"],
  },
  hotel: {
    hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    ],
    trustLogos: ["TripAdvisor Excellence", "Booking.com 9.2", "500+ Reviews", "5-Star"],
  },
  "real-estate": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    ],
    trustLogos: ["RERA Registered", "500+ Units Sold", "20+ Projects", "Google 4.8★"],
  },
  transport: {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    ],
    trustLogos: ["200+ Fleet", "Pan-India", "GPS Tracked", "ISO Certified"],
  },
  ecommerce: {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    ],
    trustLogos: ["10,000+ Orders", "Free Shipping", "Easy Returns", "4.9★ Rating"],
  },
};

const defaultImages = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&q=80",
  ],
  trustLogos: ["500+ Clients", "Premium Quality", "Expert Team", "Google 4.8★"],
};

export function getIndustryImages(industry: string) {
  return industryImages[industry] ?? defaultImages;
}
