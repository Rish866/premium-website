export type Industry = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

export type OnboardingData = {
  industry: string;
  businessName: string;
  businessDescription: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  website: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  googleBusiness: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  photos: string[];
  services: string[];
  products: string[];
  openingHours: string;
  teamSize: string;
  targetAudience: string;
  uniqueSellingPoint: string;
};

export const defaultOnboardingData: OnboardingData = {
  industry: "",
  businessName: "",
  businessDescription: "",
  tagline: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  country: "India",
  website: "",
  whatsapp: "",
  instagram: "",
  facebook: "",
  linkedin: "",
  googleBusiness: "",
  primaryColor: "#06b6d4",
  secondaryColor: "#8b5cf6",
  logo: "",
  photos: [],
  services: [],
  products: [],
  openingHours: "9:00 AM - 9:00 PM",
  teamSize: "1-10",
  targetAudience: "",
  uniqueSellingPoint: "",
};

export const industries: Industry[] = [
  { id: "restaurant", label: "Restaurant", icon: "🍽️", description: "Cafes, fine dining, fast food, cloud kitchen" },
  { id: "clinic", label: "Clinic / Hospital", icon: "🏥", description: "Doctors, dental, multi-specialty" },
  { id: "salon", label: "Salon / Spa", icon: "💇", description: "Hair, beauty, wellness centers" },
  { id: "gym", label: "Gym / Fitness", icon: "🏋️", description: "Gyms, yoga studios, personal trainers" },
  { id: "hotel", label: "Hotel / Resort", icon: "🏨", description: "Hotels, resorts, guest houses" },
  { id: "real-estate", label: "Real Estate", icon: "🏢", description: "Builders, agents, property developers" },
  { id: "transport", label: "Transport / Logistics", icon: "🚛", description: "Fleet companies, logistics, delivery" },
  { id: "manufacturer", label: "Manufacturer", icon: "🏭", description: "Factories, production units, B2B" },
  { id: "school", label: "School / College", icon: "🎓", description: "Schools, coaching, universities" },
  { id: "ecommerce", label: "E-Commerce", icon: "🛒", description: "Online stores, D2C brands" },
  { id: "law-firm", label: "Law Firm", icon: "⚖️", description: "Lawyers, legal consultants, CA firms" },
  { id: "construction", label: "Construction", icon: "🔨", description: "Contractors, builders, architects" },
  { id: "travel", label: "Travel Agency", icon: "✈️", description: "Tours, travel planning, packages" },
  { id: "interior", label: "Interior Design", icon: "🎨", description: "Designers, decorators, architects" },
  { id: "ngo", label: "NGO / Non-profit", icon: "🤝", description: "Charities, foundations, social causes" },
  { id: "photography", label: "Photography", icon: "📸", description: "Studios, wedding, event photographers" },
  { id: "consulting", label: "Consulting", icon: "💼", description: "Business, IT, management consultants" },
  { id: "local-shop", label: "Local Shop", icon: "🏪", description: "Retail stores, boutiques, shops" },
];
