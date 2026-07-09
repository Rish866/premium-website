export type IndustryTemplate = {
  heroEyebrow: string;
  heroCta: string;
  defaultTagline: string;
  defaultDescription: string;
  defaultServices: string[];
  defaultGallery: string[];
  defaultPlans: { name: string; price: string; features: string[] }[];
  defaultFAQ: { question: string; answer: string }[];
  pricingTitle: string;
};

const templates: Record<string, IndustryTemplate> = {
  restaurant: {
    heroEyebrow: "Fine Dining",
    heroCta: "Reserve a Table",
    defaultTagline: "Premium dining experience",
    defaultDescription: "Experience exquisite cuisine crafted by expert chefs in an elegant atmosphere.",
    defaultServices: ["Fine Dining", "Catering", "Private Events", "Takeaway", "Live Music", "Chef Specials"],
    defaultGallery: ["Signature Dishes", "Elegant Interior", "Private Dining", "Bar & Lounge"],
    pricingTitle: "Our Menus",
    defaultPlans: [
      { name: "Lunch Menu", price: "From ₹499", features: ["Starter + Main + Dessert", "Complimentary drink", "Weekday special"] },
      { name: "Dinner Menu", price: "From ₹999", features: ["3-course meal", "Wine pairing option", "Weekend specials"] },
      { name: "Private Event", price: "Custom", features: ["Exclusive space", "Custom menu", "Personal chef", "Valet parking"] },
    ],
    defaultFAQ: [
      { question: "Do you take reservations?", answer: "Yes, reserve via phone, WhatsApp, or our online booking form." },
      { question: "Is there parking available?", answer: "Yes, we have complimentary valet parking for all guests." },
      { question: "Do you cater for dietary restrictions?", answer: "Absolutely. We accommodate vegetarian, vegan, gluten-free, and other dietary needs." },
    ],
  },
  clinic: {
    heroEyebrow: "Healthcare",
    heroCta: "Book Appointment",
    defaultTagline: "Quality healthcare for your family",
    defaultDescription: "Trusted medical care with experienced doctors and modern facilities.",
    defaultServices: ["General Consultation", "Specialist Referral", "Lab Tests", "Vaccinations", "Health Checkup", "Pharmacy"],
    defaultGallery: ["Modern Facility", "Expert Doctors", "Reception", "Patient Care"],
    pricingTitle: "Health Packages",
    defaultPlans: [
      { name: "Basic Checkup", price: "₹999", features: ["General consultation", "Blood test", "Health report"] },
      { name: "Full Body", price: "₹4,999", features: ["40+ tests", "ECG", "Doctor consultation", "Diet plan"] },
      { name: "Executive", price: "₹9,999", features: ["70+ tests", "Imaging", "Specialist review", "Follow-up"] },
    ],
    defaultFAQ: [
      { question: "Do I need an appointment?", answer: "Walk-ins are welcome, but appointments ensure minimal wait time." },
      { question: "What insurance do you accept?", answer: "We accept all major insurance providers. Contact us for details." },
      { question: "Are reports available online?", answer: "Yes, all reports are shared digitally via email and WhatsApp." },
    ],
  },

  salon: {
    heroEyebrow: "Beauty & Wellness",
    heroCta: "Book Now",
    defaultTagline: "Where beauty meets perfection",
    defaultDescription: "Premium salon services for hair, skin, and wellness in a luxurious setting.",
    defaultServices: ["Haircut & Styling", "Color & Highlights", "Facial & Skin Care", "Manicure & Pedicure", "Bridal Package", "Spa Treatments"],
    defaultGallery: ["Salon Interior", "Hair Styling", "Spa Area", "Bridal Work"],
    pricingTitle: "Service Packages",
    defaultPlans: [
      { name: "Basic", price: "₹999", features: ["Haircut", "Blow dry", "Basic facial"] },
      { name: "Premium", price: "₹2,999", features: ["Color", "Deep conditioning", "Mani-Pedi", "Facial"] },
      { name: "Bridal", price: "₹15,999", features: ["Full bridal makeup", "Hair styling", "Pre-bridal package", "Trial session"] },
    ],
    defaultFAQ: [
      { question: "Do I need to book in advance?", answer: "We recommend booking for weekends. Walk-ins welcome on weekdays." },
      { question: "What brands do you use?", answer: "We use premium international brands for all our services." },
      { question: "Do you offer home services?", answer: "Yes, bridal and party packages are available at your doorstep." },
    ],
  },
  gym: {
    heroEyebrow: "Fitness & Health",
    heroCta: "Start Free Trial",
    defaultTagline: "Transform your body, transform your life",
    defaultDescription: "State-of-the-art fitness facility with expert trainers and modern equipment.",
    defaultServices: ["Personal Training", "Group Classes", "Yoga", "CrossFit", "Nutrition Coaching", "Strength Training"],
    defaultGallery: ["Training Floor", "Group Class", "Equipment", "Transformation Results"],
    pricingTitle: "Membership Plans",
    defaultPlans: [
      { name: "Monthly", price: "₹1,999/mo", features: ["Full gym access", "Locker room", "Basic classes"] },
      { name: "Quarterly", price: "₹4,999/qtr", features: ["Personal trainer", "All classes", "Diet plan", "Body assessment"] },
      { name: "Annual", price: "₹14,999/yr", features: ["Everything included", "Guest passes", "Spa access", "Priority booking"] },
    ],
    defaultFAQ: [
      { question: "Do you offer a trial session?", answer: "Yes, your first session is completely free. No commitment needed." },
      { question: "What are the gym timings?", answer: "We are open from 5 AM to 11 PM, 7 days a week." },
      { question: "Do you have personal trainers?", answer: "Yes, certified personal trainers available for 1-on-1 sessions." },
    ],
  },

  hotel: {
    heroEyebrow: "Luxury Hospitality",
    heroCta: "Book Your Stay",
    defaultTagline: "Luxury stays, unforgettable experiences",
    defaultDescription: "Experience world-class hospitality with premium rooms, dining, and amenities.",
    defaultServices: ["Deluxe Rooms", "Restaurant & Bar", "Spa & Wellness", "Conference Hall", "Pool & Fitness", "Concierge"],
    defaultGallery: ["Luxury Suite", "Lobby", "Pool Area", "Restaurant"],
    pricingTitle: "Room Categories",
    defaultPlans: [
      { name: "Standard", price: "₹4,999/night", features: ["King bed", "Breakfast", "Wi-Fi", "City view"] },
      { name: "Deluxe", price: "₹8,999/night", features: ["Suite", "All meals", "Spa access", "Pool view"] },
      { name: "Presidential", price: "₹19,999/night", features: ["Penthouse", "Butler service", "Private pool", "Airport transfer"] },
    ],
    defaultFAQ: [
      { question: "What is the check-in time?", answer: "Check-in is at 2 PM and check-out is at 12 noon." },
      { question: "Is airport transfer available?", answer: "Yes, we provide complimentary airport transfers for deluxe and above." },
      { question: "Do you have event spaces?", answer: "Yes, we have banquet halls and conference rooms for up to 500 guests." },
    ],
  },
  "real-estate": {
    heroEyebrow: "Premium Properties",
    heroCta: "Explore Projects",
    defaultTagline: "Building dreams, delivering homes",
    defaultDescription: "Premium residential and commercial properties in prime locations.",
    defaultServices: ["Residential Projects", "Commercial Spaces", "Plot Sales", "Interior Design", "Home Loans", "Legal Assistance"],
    defaultGallery: ["Luxury Apartments", "Villa Project", "Commercial Complex", "Amenities"],
    pricingTitle: "Projects",
    defaultPlans: [
      { name: "2 BHK", price: "From ₹45L", features: ["900 sq ft", "Modular kitchen", "Covered parking", "Club access"] },
      { name: "3 BHK", price: "From ₹75L", features: ["1400 sq ft", "Premium fixtures", "2 parking", "Gym & Pool"] },
      { name: "Villa", price: "From ₹1.5Cr", features: ["3000 sq ft", "Private garden", "Smart home", "Premium club"] },
    ],
    defaultFAQ: [
      { question: "What are the payment plans?", answer: "We offer flexible payment plans including construction-linked and subvention schemes." },
      { question: "Is home loan assistance available?", answer: "Yes, we have tie-ups with major banks for easy home loan processing." },
      { question: "When is possession?", answer: "Timeline varies by project. Contact us for specific project delivery dates." },
    ],
  },

  transport: {
    heroEyebrow: "Fleet & Logistics",
    heroCta: "Get a Quote",
    defaultTagline: "Reliable logistics, on-time delivery",
    defaultDescription: "Professional fleet management and logistics solutions for businesses.",
    defaultServices: ["Full Truckload", "Part Load", "Express Delivery", "Warehousing", "Last Mile", "GPS Tracking"],
    defaultGallery: ["Fleet", "Warehouse", "Loading Dock", "Operations Center"],
    pricingTitle: "Service Tiers",
    defaultPlans: [
      { name: "Standard", price: "Custom", features: ["Within state delivery", "48-hour transit", "Basic tracking"] },
      { name: "Express", price: "Custom", features: ["Pan-India coverage", "24-hour transit", "Real-time tracking", "Insurance"] },
      { name: "Enterprise", price: "Custom", features: ["Dedicated fleet", "API integration", "Account manager", "SLA guaranteed"] },
    ],
    defaultFAQ: [
      { question: "What areas do you cover?", answer: "We operate pan-India with a network spanning 500+ cities." },
      { question: "Can I track my shipment?", answer: "Yes, real-time GPS tracking is available for all shipments." },
      { question: "What is your fleet size?", answer: "We operate 200+ vehicles ranging from mini trucks to 40-ft containers." },
    ],
  },
  manufacturer: {
    heroEyebrow: "Manufacturing Excellence",
    heroCta: "Request Quotation",
    defaultTagline: "Quality manufacturing at scale",
    defaultDescription: "ISO-certified manufacturing with cutting-edge technology and quality assurance.",
    defaultServices: ["Custom Manufacturing", "OEM Solutions", "Quality Testing", "Bulk Orders", "Export", "R&D"],
    defaultGallery: ["Factory Floor", "Quality Lab", "Products", "Certifications"],
    pricingTitle: "Capabilities",
    defaultPlans: [
      { name: "Prototype", price: "Custom", features: ["Design to prototype", "Material sourcing", "Testing", "Iteration"] },
      { name: "Small Batch", price: "Custom", features: ["100-1000 units", "Quality assurance", "Packaging", "Delivery"] },
      { name: "Mass Production", price: "Custom", features: ["10,000+ units", "Dedicated line", "Export ready", "Compliance"] },
    ],
    defaultFAQ: [
      { question: "What is the minimum order quantity?", answer: "MOQ varies by product. Contact us for specific requirements." },
      { question: "Do you handle exports?", answer: "Yes, we are an export-ready facility with international compliance certifications." },
      { question: "What certifications do you hold?", answer: "We are ISO 9001, ISO 14001, and OHSAS 18001 certified." },
    ],
  },

  school: {
    heroEyebrow: "Education",
    heroCta: "Apply Now",
    defaultTagline: "Nurturing minds, building futures",
    defaultDescription: "Quality education with modern facilities and experienced faculty.",
    defaultServices: ["K-12 Education", "Sports Program", "Arts & Music", "Science Labs", "Library", "Counseling"],
    defaultGallery: ["Campus", "Classrooms", "Sports Ground", "Library"],
    pricingTitle: "Admissions",
    defaultPlans: [
      { name: "Primary", price: "₹60,000/yr", features: ["Classes 1-5", "Activity rooms", "Sports", "Transport"] },
      { name: "Secondary", price: "₹80,000/yr", features: ["Classes 6-10", "Labs", "Library", "Career guidance"] },
      { name: "Senior", price: "₹1,00,000/yr", features: ["Classes 11-12", "Streams", "Competitive prep", "Mentoring"] },
    ],
    defaultFAQ: [
      { question: "When do admissions open?", answer: "Admissions open in January for the academic year starting April." },
      { question: "Is transport available?", answer: "Yes, GPS-tracked school buses cover all major routes in the city." },
      { question: "What curriculum do you follow?", answer: "We follow CBSE curriculum with activity-based learning methodology." },
    ],
  },
  ecommerce: {
    heroEyebrow: "Shop Online",
    heroCta: "Shop Now",
    defaultTagline: "Premium products, delivered to your door",
    defaultDescription: "Discover curated collections with fast delivery and easy returns.",
    defaultServices: ["Fast Delivery", "Easy Returns", "Cash on Delivery", "EMI Options", "Gift Wrapping", "Bulk Orders"],
    defaultGallery: ["Product Range", "Packaging", "Happy Customers", "New Arrivals"],
    pricingTitle: "Collections",
    defaultPlans: [
      { name: "Starter Pack", price: "From ₹499", features: ["Best sellers", "Free shipping", "7-day return"] },
      { name: "Premium Box", price: "From ₹1,999", features: ["Curated selection", "Gift packaging", "Priority delivery"] },
      { name: "Subscription", price: "₹999/mo", features: ["Monthly box", "Exclusive items", "Member discounts", "Early access"] },
    ],
    defaultFAQ: [
      { question: "What is the return policy?", answer: "Easy 7-day returns on all products. No questions asked." },
      { question: "Do you deliver pan-India?", answer: "Yes, we deliver to 20,000+ pin codes across India." },
      { question: "Is COD available?", answer: "Yes, Cash on Delivery is available for orders up to ₹5,000." },
    ],
  },

  "law-firm": {
    heroEyebrow: "Legal Services",
    heroCta: "Free Consultation",
    defaultTagline: "Expert legal counsel you can trust",
    defaultDescription: "Experienced lawyers providing comprehensive legal solutions for individuals and businesses.",
    defaultServices: ["Corporate Law", "Civil Litigation", "Criminal Defense", "Property Law", "Family Law", "Tax Advisory"],
    defaultGallery: ["Office", "Team", "Courtroom", "Library"],
    pricingTitle: "Consultation Plans",
    defaultPlans: [
      { name: "Initial Consult", price: "Free", features: ["30-min call", "Case assessment", "Legal advice", "Next steps"] },
      { name: "Retainer", price: "₹25,000/mo", features: ["Unlimited calls", "Document review", "Court appearances", "Priority"] },
      { name: "Corporate", price: "Custom", features: ["Full legal team", "Compliance", "M&A support", "Dedicated partner"] },
    ],
    defaultFAQ: [
      { question: "Do you offer free consultations?", answer: "Yes, the first 30-minute consultation is completely free." },
      { question: "What areas of law do you cover?", answer: "We cover corporate, civil, criminal, property, family, and tax law." },
      { question: "Can you represent in other cities?", answer: "Yes, we have a pan-India network and can represent in any court." },
    ],
  },
  construction: {
    heroEyebrow: "Construction & Architecture",
    heroCta: "Get Estimate",
    defaultTagline: "Building excellence from ground up",
    defaultDescription: "Professional construction services from design to delivery with quality guarantee.",
    defaultServices: ["Residential Construction", "Commercial Projects", "Renovation", "Interior Work", "Landscaping", "Project Management"],
    defaultGallery: ["Completed Project", "Under Construction", "Interior", "Team"],
    pricingTitle: "Project Types",
    defaultPlans: [
      { name: "Renovation", price: "From ₹800/sqft", features: ["Interior redesign", "Structural changes", "Finishing", "Supervision"] },
      { name: "New Build", price: "From ₹1,500/sqft", features: ["Foundation to finish", "Architecture", "MEP", "Landscaping"] },
      { name: "Turnkey", price: "Custom", features: ["Complete project", "Interior design", "Furniture", "Handover ready"] },
    ],
    defaultFAQ: [
      { question: "How long does construction take?", answer: "Timeline depends on project size. Typically 6-18 months for residential." },
      { question: "Do you provide warranty?", answer: "Yes, 5-year structural warranty and 1-year finishing warranty." },
      { question: "Can I visit ongoing projects?", answer: "Absolutely. We encourage site visits. Schedule with our project manager." },
    ],
  },

  travel: {
    heroEyebrow: "Travel & Tourism",
    heroCta: "Plan Your Trip",
    defaultTagline: "Discover the world with us",
    defaultDescription: "Curated travel experiences, custom itineraries, and hassle-free bookings.",
    defaultServices: ["Holiday Packages", "Flight Booking", "Hotel Reservations", "Visa Assistance", "Group Tours", "Corporate Travel"],
    defaultGallery: ["Destinations", "Happy Travelers", "Luxury Stays", "Adventure"],
    pricingTitle: "Popular Packages",
    defaultPlans: [
      { name: "Domestic", price: "From ₹9,999", features: ["3N/4D", "Hotels", "Sightseeing", "Transport"] },
      { name: "International", price: "From ₹49,999", features: ["5N/6D", "Flights", "Visa support", "Guide"] },
      { name: "Luxury", price: "From ₹1,99,999", features: ["7N/8D", "5-star stays", "Private tours", "Concierge"] },
    ],
    defaultFAQ: [
      { question: "Do you handle visa processing?", answer: "Yes, we provide end-to-end visa assistance for all major countries." },
      { question: "Can I customize a package?", answer: "Absolutely. All packages can be fully customized to your preferences." },
      { question: "What about travel insurance?", answer: "We provide complimentary travel insurance with all international packages." },
    ],
  },
  interior: {
    heroEyebrow: "Interior Design",
    heroCta: "Book Consultation",
    defaultTagline: "Spaces that inspire living",
    defaultDescription: "Transform your space with award-winning interior design and expert execution.",
    defaultServices: ["Home Interiors", "Office Design", "Modular Kitchen", "Wardrobe", "False Ceiling", "Lighting Design"],
    defaultGallery: ["Living Room", "Kitchen", "Bedroom", "Office"],
    pricingTitle: "Design Packages",
    defaultPlans: [
      { name: "1 BHK", price: "From ₹3.5L", features: ["Full home design", "Modular kitchen", "Wardrobes", "45-day delivery"] },
      { name: "2 BHK", price: "From ₹5.5L", features: ["Complete interiors", "Custom furniture", "Lighting", "60-day delivery"] },
      { name: "3 BHK+", price: "From ₹8L", features: ["Luxury materials", "3D walkthrough", "Project manager", "90-day delivery"] },
    ],
    defaultFAQ: [
      { question: "How long does the process take?", answer: "Typically 45-90 days from design approval to handover." },
      { question: "Do you provide 3D designs first?", answer: "Yes, we create detailed 3D renders for approval before execution." },
      { question: "What warranty do you provide?", answer: "10-year warranty on modular products and 1-year on services." },
    ],
  },
  ngo: {
    heroEyebrow: "Non-Profit",
    heroCta: "Support Our Cause",
    defaultTagline: "Making a difference, one step at a time",
    defaultDescription: "Empowering communities through education, healthcare, and sustainable development.",
    defaultServices: ["Education Programs", "Healthcare", "Women Empowerment", "Environment", "Community Development", "Volunteering"],
    defaultGallery: ["Community Work", "Education", "Events", "Impact"],
    pricingTitle: "How to Help",
    defaultPlans: [
      { name: "Volunteer", price: "Free", features: ["Weekend programs", "Teaching", "Events", "Certificate"] },
      { name: "Monthly Donor", price: "₹500/mo", features: ["Sponsor a child", "Impact reports", "Tax benefits", "Community"] },
      { name: "Corporate CSR", price: "Custom", features: ["Employee engagement", "Brand visibility", "Impact reporting", "Dedicated team"] },
    ],
    defaultFAQ: [
      { question: "How is my donation used?", answer: "90% goes directly to programs. We publish annual impact reports." },
      { question: "Is there tax benefit?", answer: "Yes, all donations are eligible for 80G tax exemption." },
      { question: "Can I volunteer?", answer: "Absolutely! We welcome volunteers every weekend. Register online." },
    ],
  },

  photography: {
    heroEyebrow: "Photography Studio",
    heroCta: "View Portfolio",
    defaultTagline: "Capturing moments that last forever",
    defaultDescription: "Professional photography services for weddings, events, products, and portraits.",
    defaultServices: ["Wedding Photography", "Event Coverage", "Product Shoots", "Portrait Sessions", "Corporate", "Video Production"],
    defaultGallery: ["Wedding", "Product", "Portrait", "Event"],
    pricingTitle: "Packages",
    defaultPlans: [
      { name: "Basic", price: "₹15,000", features: ["4-hour session", "100 edited photos", "Online gallery", "Social media"] },
      { name: "Premium", price: "₹35,000", features: ["Full day", "500 photos", "Album", "Video highlights"] },
      { name: "Wedding", price: "₹75,000", features: ["2-day coverage", "Drone shots", "Cinematic film", "Premium album"] },
    ],
    defaultFAQ: [
      { question: "How many photos will we receive?", answer: "Depends on the package. Typically 100-500 professionally edited images." },
      { question: "How long for delivery?", answer: "Previews in 3 days. Full gallery and album in 2-3 weeks." },
      { question: "Do you travel for shoots?", answer: "Yes, we cover destination weddings and events anywhere in India." },
    ],
  },
  consulting: {
    heroEyebrow: "Business Consulting",
    heroCta: "Schedule Call",
    defaultTagline: "Strategic insights that drive growth",
    defaultDescription: "Expert consulting to help businesses scale, optimize operations, and achieve goals.",
    defaultServices: ["Strategy Consulting", "Digital Transformation", "Process Optimization", "Market Research", "Financial Advisory", "Technology"],
    defaultGallery: ["Workshops", "Team", "Client Success", "Office"],
    pricingTitle: "Engagement Models",
    defaultPlans: [
      { name: "Advisory", price: "₹50,000/mo", features: ["Monthly strategy call", "Email support", "Quarterly review", "Templates"] },
      { name: "Project", price: "From ₹2L", features: ["Dedicated consultant", "Deliverables", "Implementation", "Handover"] },
      { name: "Retainer", price: "From ₹1.5L/mo", features: ["Full team", "On-site support", "Board reporting", "KPI tracking"] },
    ],
    defaultFAQ: [
      { question: "What industries do you serve?", answer: "We work across manufacturing, technology, healthcare, retail, and services." },
      { question: "How do you measure success?", answer: "We define KPIs upfront and track them monthly with transparent reporting." },
      { question: "What is the typical engagement length?", answer: "Projects range from 3-6 months. Retainers are ongoing." },
    ],
  },
  "local-shop": {
    heroEyebrow: "Local Business",
    heroCta: "Visit Us",
    defaultTagline: "Your neighborhood favorite",
    defaultDescription: "Quality products and friendly service, right in your neighborhood.",
    defaultServices: ["Quality Products", "Home Delivery", "Custom Orders", "Gift Wrapping", "Loyalty Program", "Bulk Discounts"],
    defaultGallery: ["Store Front", "Products", "Happy Customers", "New Arrivals"],
    pricingTitle: "Special Offers",
    defaultPlans: [
      { name: "New Customer", price: "10% Off", features: ["First purchase discount", "Free delivery", "Loyalty card"] },
      { name: "Member", price: "₹299/yr", features: ["15% off always", "Birthday special", "Early access", "Free delivery"] },
      { name: "Bulk Order", price: "Custom", features: ["Volume discounts", "Corporate supply", "Monthly billing", "Priority"] },
    ],
    defaultFAQ: [
      { question: "Do you offer home delivery?", answer: "Yes, free delivery within 5 km for orders above ₹500." },
      { question: "Can I place custom orders?", answer: "Absolutely. Contact us for custom requirements and bulk orders." },
      { question: "What are your store timings?", answer: "Open 7 days a week, 9 AM to 9 PM." },
    ],
  },
};

const defaultTemplate: IndustryTemplate = {
  heroEyebrow: "Premium Business",
  heroCta: "Get Started",
  defaultTagline: "Excellence in every detail",
  defaultDescription: "Professional services tailored to meet your unique needs.",
  defaultServices: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"],
  defaultGallery: ["Image 1", "Image 2", "Image 3", "Image 4"],
  pricingTitle: "Our Plans",
  defaultPlans: [
    { name: "Basic", price: "Contact Us", features: ["Core features", "Email support", "Standard delivery"] },
    { name: "Professional", price: "Contact Us", features: ["All features", "Priority support", "Fast delivery", "Custom"] },
    { name: "Enterprise", price: "Custom", features: ["Everything", "Dedicated team", "SLA", "White label"] },
  ],
  defaultFAQ: [
    { question: "How do I get started?", answer: "Contact us via phone, email, or WhatsApp. We respond within 24 hours." },
    { question: "What makes you different?", answer: "Years of experience, premium quality, and customer-first approach." },
    { question: "Do you offer custom solutions?", answer: "Yes, we tailor our services to your specific requirements." },
  ],
};

export function getIndustryTemplate(industry: string): IndustryTemplate {
  return templates[industry] || defaultTemplate;
}
