import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ViewItems } from './components/ViewItems';
import { AddItem } from './components/AddItem';
import { Item } from './types';
import { sampleItems } from './data/sampleItems';

function App() {
  const [currentPage, setCurrentPage] = useState<'view' | 'add'>('view');
  const [items, setItems] = useState<Item[]>([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('inventoryItems');
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        // Convert date strings back to Date objects
        const itemsWithDates = parsedItems.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        }));
        setItems(itemsWithDates);
      } catch (error) {
        console.error('Error parsing saved items:', error);
        setItems(sampleItems);
      }
    } else {
      setItems(sampleItems);
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem: Omit<Item, 'id' | 'createdAt'>) => {
    const item: Item = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setItems(prevItems => [item, ...prevItems]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      
      <main className="py-8">
        {currentPage === 'view' ? (
          <ViewItems items={items} />
        ) : (
          <AddItem onAddItem={handleAddItem} />
        )}
      </main>
    </div>
  );
}

export default App;