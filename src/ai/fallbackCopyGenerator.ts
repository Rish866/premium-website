/**
 * Enhanced Fallback Copy Generator
 *
 * Generates professional copy when AI API is unavailable.
 * Much better than the old template interpolation approach:
 * - Multiple headline variations per industry
 * - Professional descriptions (not "Welcome to {name}")
 * - Realistic testimonials with contextual names
 * - Industry-specific FAQ
 */

import type { GenerationInput, GeneratedCopy } from './types';

type IndustryCopy = {
  headlines: string[];
  subtitles: string[];
  eyebrows: string[];
  ctas: string[];
  aboutTitles: string[];
  aboutDescriptions: string[];
  missions: string[];
  values: string[];
  stats: { value: string; label: string }[];
  faqItems: { question: string; answer: string }[];
  testimonialQuotes: string[];
  testimonialNames: string[];
  ctaTitles: string[];
};

const industryCopyBank: Record<string, IndustryCopy> = {
  restaurant: {
    headlines: [
      'Where Every Dish Tells a Story',
      'Crafted with Passion, Served with Love',
      'The Art of Fine Dining',
      'Flavors That Linger, Memories That Last',
    ],
    subtitles: [
      'An intimate culinary journey where seasonal ingredients meet time-honored techniques, creating moments worth savoring.',
      'From our kitchen to your table — experience dishes crafted with locally sourced ingredients and decades of expertise.',
    ],
    eyebrows: ['Fine Dining', 'Culinary Excellence', 'Est. 2024', 'Award-Winning'],
    ctas: ['Reserve Your Table', 'View Our Menu', 'Book Tonight', 'Experience Fine Dining'],
    aboutTitles: ['Our Culinary Philosophy', 'The Story Behind Every Plate'],
    aboutDescriptions: [
      'Every ingredient is hand-selected, every technique refined over years of dedication. Our kitchen is where tradition meets innovation, creating dishes that celebrate the richness of flavor and the beauty of presentation.',
    ],
    missions: ['To create unforgettable dining experiences that bring people together.'],
    values: ['Quality Ingredients', 'Authentic Flavors', 'Warm Hospitality', 'Sustainability'],
    stats: [
      { value: '15+', label: 'Years of Excellence' },
      { value: '50K+', label: 'Happy Guests' },
      { value: '4.9', label: 'Google Rating' },
      { value: '200+', label: 'Signature Dishes' },
    ],
    faqItems: [
      { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely. Our chefs prepare vegetarian, vegan, gluten-free, and allergy-friendly options. Please inform us when booking.' },
      { question: 'Is a reservation required?', answer: 'We recommend reservations, especially for weekends and special occasions. Walk-ins are welcome based on availability.' },
      { question: 'Do you host private events?', answer: 'Yes, we offer private dining rooms for celebrations, corporate dinners, and intimate gatherings up to 40 guests.' },
      { question: 'What is your cancellation policy?', answer: 'We request 24-hour notice for cancellations. Late cancellations may incur a nominal fee during peak seasons.' },
    ],
    testimonialQuotes: [
      'The tasting menu was extraordinary. Every course was a revelation of flavor and texture.',
      'Best dining experience in the city. The ambiance, service, and food are all world-class.',
      'We celebrated our anniversary here and it was absolutely magical. Will definitely return.',
      'The chef\'s attention to detail is remarkable. You can taste the passion in every dish.',
    ],
    testimonialNames: ['Priya Sharma', 'Rahul Mehta', 'Anita Desai', 'Vikram Singh'],
    ctaTitles: ['Ready for an Unforgettable Evening?', 'Your Table Awaits'],
  },
  clinic: {
    headlines: [
      'Healthcare You Can Trust',
      'Where Compassion Meets Clinical Excellence',
      'Your Health, Our Priority',
      'Modern Medicine, Personal Touch',
    ],
    subtitles: [
      'Comprehensive healthcare delivered by experienced specialists using state-of-the-art technology in a comfortable, patient-first environment.',
      'From routine checkups to specialized care — our team of dedicated doctors ensures you receive the attention you deserve.',
    ],
    eyebrows: ['Healthcare', 'Trusted Since 2010', 'Multi-Specialty', 'NABH Accredited'],
    ctas: ['Book Appointment', 'Find a Doctor', 'Schedule Visit', 'Call Now'],
    aboutTitles: ['Caring for Your Family\'s Health', 'Why Choose Us'],
    aboutDescriptions: [
      'With a team of experienced doctors, modern diagnostic equipment, and a patient-first philosophy, we provide comprehensive healthcare that you can rely on. Our facility is designed for comfort and efficiency.',
    ],
    missions: ['To provide accessible, compassionate, high-quality healthcare for every patient.'],
    values: ['Patient First', 'Clinical Excellence', 'Compassion', 'Innovation'],
    stats: [
      { value: '50+', label: 'Expert Doctors' },
      { value: '1L+', label: 'Patients Treated' },
      { value: '4.8', label: 'Patient Rating' },
      { value: '24/7', label: 'Emergency Care' },
    ],
    faqItems: [
      { question: 'Do I need an appointment?', answer: 'While walk-ins are accepted, appointments ensure minimal wait time and allow us to prepare for your visit.' },
      { question: 'What insurance providers do you accept?', answer: 'We accept all major health insurance providers. Our front desk can verify coverage before your appointment.' },
      { question: 'Are lab results available online?', answer: 'Yes, all test results are uploaded to our patient portal within 24-48 hours and sent via email.' },
      { question: 'Do you offer emergency services?', answer: 'Yes, our emergency department operates 24/7 with experienced doctors and life-saving equipment.' },
    ],
    testimonialQuotes: [
      'The doctors here genuinely care. They took time to explain everything and made me feel comfortable.',
      'Excellent facility with modern equipment. The staff is professional and the wait times are minimal.',
      'My family has been coming here for years. The quality of care is consistently outstanding.',
      'Quick diagnosis, effective treatment, and wonderful follow-up care. Highly recommended.',
    ],
    testimonialNames: ['Meera Patel', 'Suresh Kumar', 'Fatima Khan', 'Rajesh Gupta'],
    ctaTitles: ['Take the First Step Toward Better Health', 'Schedule Your Visit Today'],
  },
  gym: {
    headlines: [
      'Transform Your Body, Elevate Your Life',
      'Where Champions Are Made',
      'Your Strongest Self Starts Here',
      'Push Beyond Limits',
    ],
    subtitles: [
      'State-of-the-art equipment, certified personal trainers, and a community that pushes you to achieve goals you never thought possible.',
      'Whether you\'re just starting or training for competition — we have the facilities, expertise, and motivation to get you there.',
    ],
    eyebrows: ['Fitness & Health', 'Since 2015', 'Premium Training', '24/7 Access'],
    ctas: ['Start Free Trial', 'Join Today', 'Book a Session', 'Get Your Pass'],
    aboutTitles: ['More Than a Gym', 'Built for Results'],
    aboutDescriptions: [
      'We believe fitness is a journey, not a destination. Our world-class facility combines premium equipment, expert guidance, and a supportive community to help you achieve transformative results.',
    ],
    missions: ['To empower every individual to reach their peak physical and mental potential.'],
    values: ['Discipline', 'Community', 'Results', 'Consistency'],
    stats: [
      { value: '3000+', label: 'Active Members' },
      { value: '50+', label: 'Classes Weekly' },
      { value: '20+', label: 'Certified Trainers' },
      { value: '98%', label: 'Member Satisfaction' },
    ],
    faqItems: [
      { question: 'Is there a free trial available?', answer: 'Yes! We offer a complimentary 3-day trial so you can experience our facilities and classes before committing.' },
      { question: 'What are the gym hours?', answer: 'We are open from 5 AM to 11 PM on weekdays, and 6 AM to 10 PM on weekends. Premium members get 24/7 access.' },
      { question: 'Do you provide personal trainers?', answer: 'Yes, we have certified personal trainers available for one-on-one sessions and custom program design.' },
      { question: 'Can I freeze my membership?', answer: 'Yes, you can freeze your membership for up to 30 days per year with advance notice.' },
    ],
    testimonialQuotes: [
      'Lost 20kg in 6 months with the help of my trainer. The transformation is unreal.',
      'The group classes are incredibly motivating. Best investment I\'ve made for my health.',
      'Clean, well-maintained equipment and a no-nonsense atmosphere. Exactly what I needed.',
      'The trainers here actually know what they\'re doing. My strength gains have been incredible.',
    ],
    testimonialNames: ['Arjun Malhotra', 'Sneha Reddy', 'Mohammed Ali', 'Kavita Iyer'],
    ctaTitles: ['Ready to Start Your Transformation?', 'Your First Session is Free'],
  },
};

// Default copy bank for industries without specific copy
const defaultCopyBank: IndustryCopy = {
  headlines: [
    'Excellence in Every Detail',
    'Built on Trust, Driven by Results',
    'Where Quality Meets Innovation',
    'Premium Solutions for Modern Businesses',
  ],
  subtitles: [
    'We combine years of expertise with a forward-thinking approach to deliver results that exceed expectations.',
    'Professional service tailored to your unique needs, backed by a commitment to excellence and client satisfaction.',
  ],
  eyebrows: ['Premium', 'Trusted', 'Excellence', 'Since 2020'],
  ctas: ['Get Started', 'Contact Us', 'Learn More', 'Book Now'],
  aboutTitles: ['Our Story', 'Why Choose Us'],
  aboutDescriptions: [
    'Built on a foundation of expertise and driven by a passion for excellence, we deliver solutions that make a real difference. Our team combines deep industry knowledge with innovative thinking to help our clients succeed.',
  ],
  missions: ['To deliver exceptional value through quality, innovation, and dedication.'],
  values: ['Quality', 'Innovation', 'Integrity', 'Excellence'],
  stats: [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '4.9', label: 'Client Rating' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
  faqItems: [
    { question: 'How do I get started?', answer: 'Simply reach out through our contact form or give us a call. We\'ll schedule a consultation to understand your needs.' },
    { question: 'What makes you different from competitors?', answer: 'Our combination of deep expertise, personalized service, and commitment to results sets us apart.' },
    { question: 'Do you offer custom solutions?', answer: 'Absolutely. Every client is unique, and we tailor our approach to meet your specific requirements.' },
    { question: 'What is your typical turnaround time?', answer: 'Timelines vary by project scope. We provide detailed timelines during our initial consultation.' },
  ],
  testimonialQuotes: [
    'Working with this team has been transformative for our business. Highly professional and results-driven.',
    'Exceptional quality and attention to detail. They exceeded our expectations at every turn.',
    'The best in the industry. Their expertise and dedication are unmatched.',
    'Reliable, professional, and always delivers on time. Our go-to partner for years.',
  ],
  testimonialNames: ['Amit Sharma', 'Neha Patel', 'Ravi Kumar', 'Sunita Verma'],
  ctaTitles: ['Ready to Get Started?', 'Let\'s Work Together'],
};

/**
 * Get copy bank for an industry, falling back to default.
 */
function getCopyBank(industry: string): IndustryCopy {
  return industryCopyBank[industry] ?? defaultCopyBank;
}

/**
 * Pick a random item from an array.
 */
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate complete website copy using enhanced templates.
 * This is the fallback when AI API is not available.
 */
export function generateFallbackCopy(input: GenerationInput): GeneratedCopy {
  const bank = getCopyBank(input.industry);
  const businessName = input.businessName;

  return {
    hero: {
      eyebrow: pick(bank.eyebrows),
      title: pick(bank.headlines),
      subtitle: pick(bank.subtitles),
      buttonText: pick(bank.ctas),
      secondaryButtonText: 'Learn More',
      trustLogos: bank.stats.slice(0, 4).map((s) => `${s.value} ${s.label}`),
    },
    about: {
      eyebrow: 'About Us',
      title: pick(bank.aboutTitles),
      description: pick(bank.aboutDescriptions),
      mission: pick(bank.missions),
      values: bank.values,
      stats: bank.stats,
    },
    features: {
      eyebrow: 'Our Services',
      title: `What We Offer`,
      subtitle: `Comprehensive solutions tailored for ${businessName} and our clients.`,
      items: getIndustryServices(input.industry).map((title) => ({
        title,
        description: `Professional ${title.toLowerCase()} services designed to exceed your expectations.`,
      })),
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What Our Clients Say',
      items: bank.testimonialQuotes.map((quote, i) => ({
        name: bank.testimonialNames[i] ?? `Client ${i + 1}`,
        role: `${businessName} Client`,
        quote,
        rating: 5,
      })),
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: `Everything you need to know about ${businessName}.`,
      items: bank.faqItems,
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Our Plans',
      subtitle: 'Choose the perfect plan for your needs.',
      plans: getIndustryPricing(input.industry),
    },
    contact: {
      title: 'Get in Touch',
      subtitle: `Ready to connect? Reach out to ${businessName} and let's start something great.`,
    },
    cta: {
      eyebrow: 'Ready?',
      title: pick(bank.ctaTitles),
      subtitle: `Connect with ${businessName} today and experience the difference.`,
      buttonText: pick(bank.ctas),
    },
    stats: {
      items: bank.stats,
    },
    team: {
      eyebrow: 'Our Team',
      title: 'Meet the Experts',
      members: [
        { name: 'Dr. Rajesh Kumar', role: 'Founder & Director', bio: 'Over 15 years of industry experience.' },
        { name: 'Priya Sharma', role: 'Operations Head', bio: 'Ensuring seamless client experiences.' },
        { name: 'Vikram Singh', role: 'Lead Specialist', bio: 'Expert in cutting-edge solutions.' },
      ],
    },
    footer: {
      tagline: `${businessName} — ${pick(bank.headlines)}`,
    },
  };
}

/**
 * Industry-specific service lists.
 */
function getIndustryServices(industry: string): string[] {
  const services: Record<string, string[]> = {
    restaurant: ['Fine Dining Experience', 'Private Events & Catering', 'Chef\'s Tasting Menu', 'Bar & Cocktails', 'Weekend Brunch', 'Takeaway & Delivery'],
    clinic: ['General Consultation', 'Specialist Care', 'Diagnostic Lab', 'Health Checkups', 'Vaccinations', 'Emergency Care'],
    gym: ['Personal Training', 'Group Fitness Classes', 'Strength & Conditioning', 'Yoga & Flexibility', 'Nutrition Coaching', 'Body Transformation'],
    salon: ['Hair Styling & Color', 'Skin Care & Facials', 'Manicure & Pedicure', 'Bridal Packages', 'Spa Treatments', 'Men\'s Grooming'],
    hotel: ['Luxury Accommodations', 'Fine Dining Restaurant', 'Spa & Wellness Center', 'Conference Facilities', 'Pool & Recreation', 'Concierge Services'],
  };
  return services[industry] ?? ['Consultation', 'Custom Solutions', 'Project Management', 'Quality Assurance', 'Support & Maintenance', 'Training & Education'];
}

/**
 * Industry-specific pricing plans.
 */
function getIndustryPricing(industry: string): { name: string; price: string; features: string[]; popular?: boolean }[] {
  const pricing: Record<string, { name: string; price: string; features: string[]; popular?: boolean }[]> = {
    gym: [
      { name: 'Basic', price: '₹1,999/mo', features: ['Full gym access', 'Locker room', 'Basic classes', 'Fitness assessment'] },
      { name: 'Premium', price: '₹3,999/mo', features: ['Everything in Basic', 'Personal trainer', 'All classes', 'Diet plan', 'Body tracking'], popular: true },
      { name: 'Elite', price: '₹6,999/mo', features: ['Everything in Premium', '1-on-1 training', 'Spa access', 'Guest passes', 'Priority booking'] },
    ],
    restaurant: [
      { name: 'Lunch Menu', price: 'From ₹699', features: ['Starter + Main', 'Complimentary drink', 'Weekday special'] },
      { name: 'Dinner Experience', price: 'From ₹1,499', features: ['3-course meal', 'Wine pairing option', 'Chef\'s special', 'Dessert'], popular: true },
      { name: 'Private Dining', price: 'Custom', features: ['Exclusive space', 'Custom menu', 'Personal chef', 'Valet parking', 'Event planning'] },
    ],
  };
  return pricing[industry] ?? [
    { name: 'Starter', price: 'Contact Us', features: ['Core services', 'Email support', 'Standard delivery'] },
    { name: 'Professional', price: 'Contact Us', features: ['All services', 'Priority support', 'Fast delivery', 'Dedicated manager'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Everything included', 'Custom solutions', 'SLA guarantee', '24/7 support'] },
  ];
}
