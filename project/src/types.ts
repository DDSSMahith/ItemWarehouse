export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  additionalImages: string[];
  createdAt: Date;
}

export type ItemType = 'Shirt' | 'Pant' | 'Shoes' | 'Sports Gear' | 'Accessories' | 'Other';