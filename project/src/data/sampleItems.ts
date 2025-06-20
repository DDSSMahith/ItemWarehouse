import { Item } from '../types';

export const sampleItems: Item[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    type: 'Shirt',
    description: 'Comfortable and breathable cotton t-shirt perfect for casual wear. Made from 100% organic cotton with a modern fit that suits all body types. Available in multiple colors and sizes.',
    coverImage: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    type: 'Pant',
    description: 'Timeless denim jeans with a perfect fit. Crafted from premium denim fabric with excellent durability and comfort. Features classic five-pocket styling and versatile design.',
    coverImage: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Athletic Running Shoes',
    type: 'Shoes',
    description: 'High-performance running shoes designed for comfort and speed. Features advanced cushioning technology, breathable mesh upper, and durable rubber outsole for optimal performance.',
    coverImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-01-25')
  },
  {
    id: '4',
    name: 'Professional Basketball',
    type: 'Sports Gear',
    description: 'Official size basketball perfect for indoor and outdoor play. Features superior grip and consistent bounce. Made with high-quality materials for enhanced durability.',
    coverImage: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-02-01')
  },
  {
    id: '5',
    name: 'Leather Wrist Watch',
    type: 'Accessories',
    description: 'Elegant leather wrist watch with a timeless design. Features Swiss movement, scratch-resistant crystal, and genuine leather strap. Perfect for both formal and casual occasions.',
    coverImage: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-02-05')
  },
  {
    id: '6',
    name: 'Wireless Headphones',
    type: 'Accessories',
    description: 'Premium wireless headphones with noise cancellation technology. Delivers exceptional sound quality with deep bass and crystal-clear highs. Long battery life and comfortable fit.',
    coverImage: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    additionalImages: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    createdAt: new Date('2024-02-10')
  }
];