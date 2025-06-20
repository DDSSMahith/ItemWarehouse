import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Item } from '../types';

interface ItemModalProps {
  item: Item;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEnquireMessage, setShowEnquireMessage] = useState(false);
  
  const allImages = [item.coverImage, ...item.additionalImages];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleEnquire = () => {
    setShowEnquireMessage(true);
    setTimeout(() => setShowEnquireMessage(false), 3000);
    
    // Bonus feature: Email functionality could be implemented here
    console.log('Enquiry for item:', item.name);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={allImages[currentImageIndex]}
                alt={`${item.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <div className="flex justify-center space-x-2 mt-4">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Type:</span>
                  <span className="ml-2 font-medium capitalize">{item.type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Added:</span>
                  <span className="ml-2 font-medium">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            {/* Enquire Button */}
            <div className="pt-4 border-t">
              {showEnquireMessage && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Enquiry sent successfully!</span>
                </div>
              )}
              
              <button
                onClick={handleEnquire}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Enquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};