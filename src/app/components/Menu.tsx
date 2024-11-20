
import React from 'react';
import Image from 'next/image';

const Menu = () => {
  const menuItems = [
    { name: 'Espresso', description: 'Strong, rich, and bold coffee.', price: '$3.50', image: '/espresso.jpeg' },
    { name: 'Latte', description: 'Creamy espresso with steamed milk.', price: '$4.00', image: '/latte.jpeg' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.50', image: '/cappuccino.jpg' },
    { name: 'Croissant', description: 'Buttery, flaky pastry fresh from the oven.', price: '$2.50', image: '/croissant.jpeg' },
    { name: 'Blueberry Muffin', description: 'Delicious and moist with a burst of blueberries.', price: '$2.00', image: '/muffin.webp' },
    { name: 'Chocolate Chip Cookie', description: 'Chewy and filled with chocolate chips.', price: '$1.75', image: '/cookie.jpeg' },
    { name: 'Americano', description: 'Espresso with hot water, bold and simple.', price: '$3.00', image: '/americano.webp' },
    { name: 'Macchiato', description: 'Espresso with a dash of steamed milk.', price: '$3.75', image: '/macchiato.avif' },
    { name: 'Mocha', description: 'Chocolate and espresso with steamed milk.', price: '$4.25', image: '/mocha.avif' },
    { name: 'Iced Coffee', description: 'Chilled coffee served over ice.', price: '$2.75', image: '/iced-coffee.avif' },
    { name: 'Tea', description: 'Classic black or green tea.', price: '$2.00', image: '/tea.avif' },
    { name: 'Bagel', description: 'Freshly baked bagels with cream cheese.', price: '$2.25', image: '/bagel.avif' }
  ];

  return (
    <div className="bg-black py-12" id='menu'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-8 bad-script-regular underline">Coffee Shop Menu</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gray-950 rounded-lg shadow-lg p-4 text-center transform transition-all duration-300 hover:scale-105">
              <Image
                className="mx-auto mb-4 w-full h-52 object-cover rounded-md"
                src={item.image}  
                alt={item.name}
                width={1000}
                height={1000}
              />
              <h3 className="text-lg font-semibold text-white bad-script-regular">{item.name}</h3>
              <p className="text-sm text-gray-300 mb-4 bad-script-regular">{item.description}</p>
              <span className="text-lg font-bold text-gray-100 ">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
