// src/Components/data/mock.js
import bl from '../../public/services/blservice.jpg';
import nl from '../../public/services/nblservice.jpg';
import standee from '../../public/services/stservice.jpg';
import vinyl from '../../public/services/vnlservice.jpg';

export const IMAGES = {
  hero: [
    'https://images.unsplash.com/photo-1647923822124-d8f3efb8adee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
    'https://images.unsplash.com/photo-1707960119803-3b2880e847b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
    'https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  ],

  services: {
    backlit: bl,
    nonlit: nl,
    standees: standee,
    vinyl: vinyl,
  },

  gallery: [
    { id: 1, title: 'Shopping Mall Backlit Signage', category: 'backlit', image: 'https://images.unsplash.com/photo-1707960119803-3b2880e847b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Large format backlit flex for shopping mall entrance with vibrant LED illumination', size: '20ft x 4ft', location: 'City Center Mall' },
    { id: 2, title: 'Retail Store Front', category: 'nonlit', image: 'https://images.unsplash.com/photo-1616101811331-e081942f2c7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Weather-resistant non-lit flex for retail store with UV protection', size: '8ft x 4ft', location: 'Downtown District' },
    { id: 3, title: 'Event Standee Display', category: 'standees', image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Promotional standee for corporate event with easy setup design', size: '5ft x 1ft', location: 'Corporate Conference' },
    { id: 4, title: 'Vehicle Vinyl Wrap', category: 'vinyl', image: 'https://images.unsplash.com/photo-1646531840695-62810bcd1171?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Full vehicle wrap with custom branding and premium vinyl', size: 'Full body', location: 'Brand Campaign' },
    { id: 5, title: 'Restaurant Illuminated Sign', category: 'backlit', image: 'https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Backlit signage for fine dining restaurant with elegant design', size: '20ft x 4ft', location: 'Luxury Restaurant' },
    { id: 6, title: 'Office Directional Signs', category: 'nonlit', image: 'https://images.unsplash.com/photo-1647923822124-d8f3efb8adee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Interior directional signage for corporate office with matte finish', size: 'Various', location: 'Office Tower' },
    { id: 7, title: 'Product Launch Standee', category: 'standees', image: 'https://images.unsplash.com/photo-1693031630369-bd429a57f115?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Standee display for new product launch event', size: '5ft x 1ft', location: 'Product Launch' },
    { id: 8, title: 'Wall Branding Graphics', category: 'vinyl', image: 'https://images.unsplash.com/photo-1747842914486-481cc1c7a04a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Vinyl wall graphics for brand promotion in showroom', size: '13ft x 15ft', location: 'Showroom Entrance' },
    { id: 9, title: 'Highway Billboard', category: 'nonlit', image: 'https://images.unsplash.com/photo-1479660095429-2cf4e1360472?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Premium highway billboard printing with weather-proof material', size: '40ft x 20ft', location: 'Interstate Highway' },
    { id: 10, title: 'Storefront Backlit', category: 'backlit', image: 'https://images.unsplash.com/photo-1557858310-9052820906f7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Backlit storefront signage with vibrant LED', size: '15ft x 6ft', location: 'City Boulevard' },
    { id: 11, title: 'Trade Show Standee', category: 'standees', image: 'https://images.unsplash.com/photo-1676474506722-4bf98059b74a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Portable trade show display with rich color', size: '7ft x 3ft', location: 'Expo Center' },
    { id: 12, title: 'Delivery Van Wrap', category: 'vinyl', image: 'https://images.unsplash.com/photo-1693031630146-568e2f72db0e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200', description: 'Full delivery van vinyl wrap in weather-proof film', size: 'Full body', location: 'Fleet Branding' },
  ],
  
  team: [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
  ],
};

export const CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'backlit', name: 'Backlit Flex' },
  { id: 'nonlit', name: 'Non-Lit Flex' },
  { id: 'standees', name: 'Standees' },
  { id: 'vinyl', name: 'Vinyl Wraps' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Sarah Johnson', company: 'Tech Innovations Ltd', role: 'Marketing Director', content: 'FutureSign transformed our brand presence with their exceptional printing quality. The attention to detail and professional service exceeded our expectations.', rating: 5 },
  { id: 2, name: 'Michael Chen', company: 'Global Retail Corp', role: 'Brand Manager', content: 'Outstanding service from start to finish. The team understood our vision and delivered beyond what we imagined. Highly recommended!', rating: 5 },
  { id: 3, name: 'Emily Rodriguez', company: 'Creative Solutions Inc', role: 'Creative Director', content: 'The quality of their flex printing is unmatched. Our banners and displays have received countless compliments. Truly professional partners.', rating: 5 },
  { id: 4, name: 'David Thompson', company: 'Enterprise Solutions', role: 'Operations Manager', content: 'Fast delivery, excellent quality, and great customer service. FutureSign has become our go-to printing partner for all our branding needs.', rating: 5 },
];

export const FAQS = [
  { q: 'What materials do you use for flex printing?', a: 'We use premium quality PVC flex, star flex, and vinyl materials that are durable, weather-resistant, and perfect for both indoor and outdoor applications. All materials are UV protected to ensure colors stay vibrant.' },
  { q: 'How long does a typical printing project take?', a: 'Standard projects are completed within 3-5 business days. Rush orders can be accommodated within 24-48 hours depending on the complexity and size of the project.' },
  { q: 'Do you provide design services?', a: 'Yes, we offer comprehensive in-house design services. Our expert design team can create custom artwork from scratch or refine your existing designs for optimal print quality.' },
  { q: 'Can you handle very large-format prints?', a: 'Absolutely. Our high-capacity printers can produce seamless prints up to 16ft wide, and we can join panels for even larger installations like highway billboards.' },
  { q: 'Do you deliver and install?', a: 'Yes, we offer end-to-end service including safe delivery and professional installation across the region. Site surveys and structure setup are available on request.' },
];

export const TEAM = [
  { name: 'Alex Johnson', role: 'CEO & Founder', expertise: 'Printing Technology', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
  { name: 'Sarah Chen', role: 'Creative Director', expertise: 'Design & Branding', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80' },
  { name: 'Mike Rodriguez', role: 'Production Head', expertise: 'Quality Control', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
  { name: 'Emma Wilson', role: 'Client Relations', expertise: 'Customer Success', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80' },
];
