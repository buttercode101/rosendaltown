export const site = {
  name: 'Rosendal',
  region: 'Free State',
  tagline: 'Timeless charm. Authentic experiences.',
  sub: 'Your perfect Free State getaway.',
  email: 'info@rosendaltown.co.za',
  phone: '+27 51 987 6543'
};

export const nav = [
  { label: 'Stay', href: '/stay' },
  { label: 'Eat & Drink', href: '/eat-drink' },
  { label: 'Things to Do', href: '/things-to-do' },
  { label: 'Art & Culture', href: '/art-culture' },
  { label: 'Shops & Services', href: '/shops-services' },
  { label: 'Events', href: '/events' }
];

export const steps = [
  { n: '01', t: 'Explore', s: 'Discover places, experiences & events' },
  { n: '02', t: 'Plan', s: 'Map your perfect Rosendal escape' },
  { n: '03', t: 'Experience', s: 'Enjoy authentic local moments' },
  { n: '04', t: 'Share', s: 'Take the story home with you' }
];

export const categories = [
  { label: 'Stay', tag: 'Rest in comfort', href: '/stay', img: 'https://rosendaltown.co.za/wp-content/uploads/2025/04/Stay_bannerautumn3-1024x128.jpg', icon: 'bed' },
  { label: 'Eat & Drink', tag: 'Savour local flavours', href: '/eat-drink', img: 'https://rosendaltown.co.za/wp-content/uploads/2024/04/Eat_banner-1024x128.jpg', icon: 'utensils' },
  { label: 'Things to Do', tag: 'Adventure awaits', href: '/things-to-do', img: 'https://rosendaltown.co.za/wp-content/uploads/2024/04/SeeDo_banner3-1-1024x128.jpg', icon: 'compass' },
  { label: 'Art & Culture', tag: 'Inspire your soul', href: '/art-culture', img: 'https://rosendaltown.co.za/wp-content/uploads/2024/04/Art_banner-1024x128.jpg', icon: 'palette' },
  { label: 'Shops & Services', tag: 'Everything you need', href: '/shops-services', img: 'https://rosendaltown.co.za/wp-content/uploads/2024/04/Shops_banner-1024x128.jpg', icon: 'shopping-bag' },
];

// Real Rosendal event imagery, matched to each event on rosendaltown.co.za/events-calendar.
export const eventImages = {
  letsDraw: 'https://rosendaltown.co.za/wp-content/uploads/2026/01/LetsDraw-logo2026.jpg',     // Let's Draw Rosendal
  irun: 'https://rosendaltown.co.za/wp-content/uploads/2026/06/cross-country-irun.jpg',         // iRun Cross Country
  carBoot: 'https://rosendaltown.co.za/wp-content/uploads/2025/03/carBootSake.jpg',             // Car Boot Sale
  mandela: 'https://rosendaltown.co.za/wp-content/uploads/2026/06/LetsDrawKasiKitchen.jpg',     // Celebrate Mandela Day with Let's Draw
  kaalwoorde: 'https://rosendaltown.co.za/wp-content/uploads/2026/04/kaalwoorde.jpg',           // Kaalwoorde Skrywers Retreat
  market: 'https://rosendaltown.co.za/wp-content/uploads/2025/03/MarketDay25.jpg',              // Rosendal Village Market
  thelema: 'https://rosendaltown.co.za/wp-content/uploads/2026/07/RT-Thelema.jpg',              // Thelema visits Rosendal
  fireIce: 'https://rosendaltown.co.za/wp-content/uploads/2026/02/FireIce.jpg',                 // Fire & Ice Social Trail Run
  fourPeaks: 'https://rosendaltown.co.za/wp-content/uploads/2026/01/4peaks.jpg',                // 4Peaks Mountain Challenge
  streetBraai: 'https://rosendaltown.co.za/wp-content/uploads/2026/02/Street-braai.jpg',        // Yolla's Street Braai
  cluny: 'https://rosendaltown.co.za/wp-content/uploads/2026/02/ClunyGolf.jpg',                 // Cluny Animal Trust Golf Day
  beerMile: 'https://rosendaltown.co.za/wp-content/uploads/2026/02/BeerMile.jpg',               // Rosendal Annual Beer Mile
  birding: 'https://rosendaltown.co.za/wp-content/uploads/2026/06/birding-weekend.jpg',         // Rosendal Birding Weekend
  cherries: 'https://rosendaltown.co.za/wp-content/uploads/2026/02/Ionia-Cherries.jpg',        // Ionia Cherry Crop Celebration
};

export const stats = [
  { n: '1857', l: 'Rich heritage' },
  { n: '+50', l: 'Local businesses' },
  { n: '1000+', l: 'Happy visitors' }
];

export const events = [{"day": "20", "mon": "JUL", "title": "Let’s Draw Rosendal 2026", "when": "Every Tuesday 2026", "img": eventImages.letsDraw}, {"day": "16", "mon": "JUL", "title": "iRun Cross Country", "when": "16-19 July 2026", "img": eventImages.irun}, {"day": "18", "mon": "JUL", "title": "Car Boot Sale", "when": "18 July 2026", "img": eventImages.carBoot}, {"day": "18", "mon": "JUL", "title": "Celebrate Mandela Day with Let’s Draw", "when": "18 July 2026", "img": eventImages.mandela}];



export const footer = {
  explore: ['Stay', 'Eat & Drink', 'Things to Do', 'Art & Culture', 'Shops & Services', 'Events'],
  information: [
    { label: 'About Rosendal', href: '/info/welcome' },
    { label: 'History & Heritage', href: '/info/history-and-heritage' },
    { label: 'The Heritage Association', href: '/info/the-rosendal-heritage-association' },
    { label: 'Plan Your Visit', href: '/plan-your-visit' },
    { label: 'Where to Find Us', href: '/info/where-to-find-us' },
    { label: 'Birdwatching', href: '/info/birdwatching' },
    { label: 'Artisans', href: '/info/artisans' },
    { label: 'Town Maps', href: '/info/town-maps' },
    { label: 'Gallery', href: '/info/gallery' },
    { label: 'Outreach', href: '/info/outreach' },
    { label: 'Contact Us', href: '/contact' }
  ],
  business: ['List Your Business', 'Business Listings', 'Business Login']
};
