import React from 'react';

interface RestaurantCardProps {
  name: string;
  address: string;
  phoneNumber: string;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  const { name, address, phoneNumber, imageUrl } = props;

  const handleClick = () => {
    // Implement click behavior here
  };

  return (
    <div className="max-w-xs md:max-w-md lg:max-w-xs lg:w-96 h-96 md:h-80 lg:h-96 rounded-lg shadow-md border border-gray-200 m-2 lg:m-4 hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col justify-between">
      <img src={imageUrl} alt={name} className="w-full h-2/3 md:h-3/4 lg:h-3/5 object-cover rounded-t-lg" />
      <div className="p-4 lg:p-6 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{address}</p>
        <p className="text-gray-600 mb-2">{phoneNumber}</p>
        <p className="text-gray-600">Fixed Number</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
