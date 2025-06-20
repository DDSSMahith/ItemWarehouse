import React from 'react';
import { Package, Plus } from 'lucide-react';

interface NavigationProps {
  currentPage: 'view' | 'add';
  onPageChange: (page: 'view' | 'add') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Inventory Manager</h1>
          </div>
          
          <div className="flex space-x-1">
            <button
              onClick={() => onPageChange('view')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'view'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              View Items
            </button>
            <button
              onClick={() => onPageChange('add')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                currentPage === 'add'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Add Items</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};