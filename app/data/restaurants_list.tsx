import React from 'react';
import RestaurantCard from '../components/restaurant_cards';

const restaurants = [
  {
    name: 'Lisbon',
    address: '123 Main St, City',
    phoneNumber: '123-456-7890',
    imageUrl: '/restaurant_1.jpg',
  },
  {
    name: 'Porto',
    address: '456 Elm St, Town',
    phoneNumber: '456-789-0123',
    imageUrl: '/restaurant_2.jpg',
  },
  {
    name: 'Aveiro',
    address: '456 Elm St, Town',
    phoneNumber: '456-789-0123',
    imageUrl: '/restaurant_3.jpg',
  },
  
  // Add more restaurants as needed
];

const RestaurantsList = () => {
    return (
      <div className="container mx-auto px-4 md:px-0 flex justify-center">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-10">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              address={restaurant.address}
              phoneNumber={restaurant.phoneNumber}
              imageUrl={restaurant.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default RestaurantsList;
