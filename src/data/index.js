export const PHONE = '(727) 555-0100';
export const PHONE_HREF = 'tel:+17275550100';
export const ADDRESS = '1234 US-19, New Port Richey, FL 34652';
export const MAP_URL = 'https://maps.google.com/?q=Diesel+Smoke+Shop+New+Port+Richey+FL';
export const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0!2d-82.72!3d28.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE0JzI0LjAiTiA4MsKwNDMnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890';
export const GOOGLE_REVIEW_URL = 'https://g.page/r/diesel-smoke-shop-npf/review';

export const HOURS = [
  { day: 'Monday',    open: '8:00 AM', close: '12:00 AM' },
  { day: 'Tuesday',   open: '8:00 AM', close: '12:00 AM' },
  { day: 'Wednesday', open: '8:00 AM', close: '12:00 AM' },
  { day: 'Thursday',  open: '8:00 AM', close: '12:00 AM' },
  { day: 'Friday',    open: '8:00 AM', close: '12:00 AM' },
  { day: 'Saturday',  open: '8:00 AM', close: '12:00 AM' },
  { day: 'Sunday',    open: '8:00 AM', close: '12:00 AM' },
];

export const CATEGORIES = [
  { label: 'Vapes & Disposables', icon: '💨', slug: 'vapes', color: 'teal' },
  { label: 'CBD & Delta-8',       icon: '🧪', slug: 'cbd-delta8', color: 'yellow' },
  { label: 'Glass & Accessories', icon: '🫧', slug: 'glass', color: 'teal' },
  { label: 'Tobacco & Cigars',    icon: '🚬', slug: 'tobacco', color: 'yellow' },
  { label: 'Batteries & Mods',    icon: '🔋', slug: 'mods', color: 'teal' },
  { label: 'Gift Sets',           icon: '🎁', slug: 'gifts', color: 'yellow' },
];

export const DEALS = [
  {
    id: 1,
    title: 'Buy 2 Disposables, Get 1 at 50% Off',
    description: 'Mix and match from our full disposable vape wall. In-store only.',
    badge: '🔥 HOT',
    expires: 'Expires Sunday',
    bg: 'from-yellow/20 to-surface',
  },
  {
    id: 2,
    title: '20% Off All Glass This Weekend',
    description: 'Hand pipes, bubblers, and water pipes. While supplies last.',
    badge: '💰 VALUE',
    expires: 'This Weekend Only',
    bg: 'from-teal/20 to-surface',
  },
  {
    id: 3,
    title: 'Delta-8 Bundle Deal',
    description: 'Buy any 2 Delta-8 products and save $10 at checkout.',
    badge: '⚡ BUNDLE',
    expires: 'Limited Time',
    bg: 'from-ember/20 to-surface',
  },
  {
    id: 4,
    title: 'New Customer Discount',
    description: 'First time at Diesel? Show this page and get 10% off your purchase.',
    badge: '👋 WELCOME',
    expires: 'Always Active',
    bg: 'from-yellow/10 to-surface',
  },
];

export const PRODUCTS = {
  vapes: [
    { id: 1, name: 'Lost Mary OS5000', category: 'vapes', priceRange: '$12–$18', image: null },
    { id: 2, name: 'Elf Bar BC5000', category: 'vapes', priceRange: '$14–$20', image: null },
    { id: 3, name: 'Geek Bar Pulse', category: 'vapes', priceRange: '$16–$22', image: null },
    { id: 4, name: 'Funky Republic Ti7000', category: 'vapes', priceRange: '$18–$24', image: null },
    { id: 5, name: 'Orion Bar 7500', category: 'vapes', priceRange: '$15–$21', image: null },
    { id: 6, name: 'RAZ TN9000', category: 'vapes', priceRange: '$20–$26', image: null },
  ],
  'cbd-delta8': [
    { id: 7, name: 'Delta-8 Gummies (500mg)', category: 'cbd-delta8', priceRange: '$24–$34', image: null },
    { id: 8, name: 'CBD Tincture 1000mg', category: 'cbd-delta8', priceRange: '$39–$55', image: null },
    { id: 9, name: 'Delta-8 Disposable 2g', category: 'cbd-delta8', priceRange: '$22–$30', image: null },
    { id: 10, name: 'HHC Cartridge 1g', category: 'cbd-delta8', priceRange: '$28–$38', image: null },
  ],
  glass: [
    { id: 11, name: 'Borosilicate Hand Pipe', category: 'glass', priceRange: '$12–$45', image: null },
    { id: 12, name: 'Silicone Bubbler', category: 'glass', priceRange: '$18–$35', image: null },
    { id: 13, name: 'Beaker Water Pipe 12"', category: 'glass', priceRange: '$45–$120', image: null },
    { id: 14, name: 'Recycler Rig', category: 'glass', priceRange: '$65–$180', image: null },
  ],
  tobacco: [
    { id: 15, name: 'Backwoods (5-pack)', category: 'tobacco', priceRange: '$8–$12', image: null },
    { id: 16, name: 'Swisher Sweets', category: 'tobacco', priceRange: '$3–$6', image: null },
    { id: 17, name: 'Cigars (Premium Singles)', category: 'tobacco', priceRange: '$6–$25', image: null },
    { id: 18, name: 'Rolling Papers (Variety)', category: 'tobacco', priceRange: '$2–$8', image: null },
  ],
  mods: [
    { id: 19, name: 'Smok Nord 5 Kit', category: 'mods', priceRange: '$35–$55', image: null },
    { id: 20, name: 'Vaporesso XROS 3', category: 'mods', priceRange: '$28–$40', image: null },
    { id: 21, name: '18650 Battery (2-pack)', category: 'mods', priceRange: '$12–$18', image: null },
    { id: 22, name: 'External Charger', category: 'mods', priceRange: '$15–$25', image: null },
  ],
  gifts: [
    { id: 23, name: 'Starter Vape Bundle', category: 'gifts', priceRange: '$35–$55', image: null },
    { id: 24, name: 'Glass + Accessories Kit', category: 'gifts', priceRange: '$45–$75', image: null },
    { id: 25, name: 'CBD Wellness Bundle', category: 'gifts', priceRange: '$50–$80', image: null },
  ],
};

export const ALL_PRODUCTS = Object.values(PRODUCTS).flat();

export const REVIEWS = [
  { id: 1, name: 'Marcus T.', location: 'New Port Richey', rating: 5, text: 'Best selection in the area by far. Staff actually knows what they\'re talking about — they helped me find exactly what I needed without pushing me toward the most expensive thing.' },
  { id: 2, name: 'Jess R.', location: 'Holiday, FL', rating: 5, text: 'Clean shop, great prices, and they always have the brands I\'m looking for. Drive past two other smoke shops to come here.' },
  { id: 3, name: 'Carlos M.', location: 'Port Richey', rating: 5, text: 'Huge glass collection and fair prices. Been coming here for months and they always treat you like a regular even on your first visit.' },
  { id: 4, name: 'Amy L.', location: 'New Port Richey', rating: 5, text: 'Finally a smoke shop that carries good CBD products and knows what they are. Staff answered all my questions without making me feel dumb.' },
  { id: 5, name: 'Derek W.', location: 'Trinity, FL', rating: 5, text: 'Worth the drive. Way better selection than anything closer to me. Delta-8 selection is unmatched in this area.' },
  { id: 6, name: 'Tanya B.', location: 'New Port Richey', rating: 5, text: 'Super clean, well organized, and the weekly deals are legit. Got a great deal on disposables last weekend.' },
];

export const WHY_PILLARS = [
  {
    icon: 'Package',
    title: 'THE BEST SELECTION IN PASCO COUNTY',
    body: "We stock what the other guys don't. From top disposable brands to premium glass — if you smoke it, we carry it.",
  },
  {
    icon: 'Users',
    title: 'STAFF THAT ACTUALLY KNOWS THEIR STUFF',
    body: 'No guessing. No upselling junk. Our crew will find exactly what you\'re looking for — every time.',
  },
  {
    icon: 'MapPin',
    title: 'RIGHT HERE IN NEW PORT RICHEY',
    body: 'Convenient location on US-19. Easy in, easy out. Serving NPR, Port Richey, Holiday, and beyond.',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Disposable Vapes vs. Rechargeable Pods: Which Is Right for You?',
    excerpt: 'Not sure whether to grab a disposable or invest in a pod system? Here\'s everything you need to know to make the right call.',
    category: 'Vapes',
    date: 'March 15, 2025',
    slug: 'disposables-vs-pods',
  },
  {
    id: 2,
    title: 'Delta-8 vs. Delta-9: What\'s the Difference and What\'s Legal in Florida?',
    excerpt: 'Delta-8 is everywhere right now. Here\'s a straight-talk breakdown of what it is, how it differs from Delta-9, and where Florida stands.',
    category: 'CBD & Delta-8',
    date: 'March 8, 2025',
    slug: 'delta-8-vs-delta-9-florida',
  },
  {
    id: 3,
    title: 'How to Choose Your First Glass Piece',
    excerpt: 'Walking into a glass shop for the first time can be overwhelming. This guide walks you through the basics so you walk out confident.',
    category: 'Glass',
    date: 'March 1, 2025',
    slug: 'how-to-choose-glass',
  },
  {
    id: 4,
    title: 'Top 5 Disposable Vapes in New Port Richey Right Now',
    excerpt: 'Based on what\'s flying off our shelves, here are the five disposables our customers keep coming back for.',
    category: 'Vapes',
    date: 'February 22, 2025',
    slug: 'top-disposables-new-port-richey',
  },
];
