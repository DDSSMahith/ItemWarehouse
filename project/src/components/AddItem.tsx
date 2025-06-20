import React, { useState } from 'react';
import { Upload, X, Check, Image } from 'lucide-react';
import { Item, ItemType } from '../types';

interface AddItemProps {
  onAddItem: (item: Omit<Item, 'id' | 'createdAt'>) => void;
}

export const AddItem: React.FC<AddItemProps> = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '' as ItemType | '',
    description: '',
    coverImage: '',
    additionalImages: [] as string[]
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const itemTypes: ItemType[] = ['Shirt', 'Pant', 'Shoes', 'Sports Gear', 'Accessories', 'Other'];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isCover = false) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (isCover) {
          setFormData(prev => ({ ...prev, coverImage: result }));
        } else {
          setFormData(prev => ({ 
            ...prev, 
            additionalImages: [...prev.additionalImages, result] 
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeAdditionalImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Item name is required';
    if (!formData.type) newErrors.type = 'Item type is required';
    if (!formData.description.trim()) newErrors.description = 'Item description is required';
    if (!formData.coverImage) newErrors.coverImage = 'Cover image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    onAddItem({
      name: formData.name,
      type: formData.type as ItemType,
      description: formData.description,
      coverImage: formData.coverImage,
      additionalImages: formData.additionalImages
    });

    setFormData({
      name: '',
      type: '',
      description: '',
      coverImage: '',
      additionalImages: []
    });
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Item</h2>
        
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 animate-in fade-in duration-300">
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">Item successfully added!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter item name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Type *
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as ItemType }))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.type ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Select item type</option>
              {itemTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter item description"
            />
            {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image *
            </label>
            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
              errors.coverImage ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400'
            }`}>
              {formData.coverImage ? (
                <div className="relative">
                  <img
                    src={formData.coverImage}
                    alt="Cover"
                    className="mx-auto max-h-48 rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, coverImage: '' }))}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <label className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Click to upload cover image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, true)}
                    />
                  </label>
                </div>
              )}
            </div>
            {errors.coverImage && <p className="text-red-600 text-sm mt-1">{errors.coverImage}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Images
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-all duration-200">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <label className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 font-medium">
                  Click to upload additional images
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileUpload(e, false)}
                />
              </label>
            </div>
            
            {formData.additionalImages.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {formData.additionalImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Additional ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};