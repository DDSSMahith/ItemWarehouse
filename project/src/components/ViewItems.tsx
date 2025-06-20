import React, { useState } from 'react';
import { Item } from '../types';
import { ItemModal } from './ItemModal';

interface ViewItemsProps {
  items: Item[];
}

export const ViewItems: React.FC<ViewItemsProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">View Items</h2>
      
      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-50 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items yet</h3>
          <p className="text-gray-600">Add your first item to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 capitalize">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};