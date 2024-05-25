import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import AddressPost from '../addresspost/AddressPost';

const DeliveryOptions = ({ customerName = 'Khách hàng', customerPhone = '123456789' }) => {
  const [selectedOption, setSelectedOption] = useState('delivery');
  const [showAddressPost, setShowAddressPost] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // Ẩn AddressPost khi chuyển đổi lựa chọn giao hàng
    if (option === 'pharmacy') {
      setShowAddressPost(false);
    }
  };

  const handleAddressPostToggle = () => {
    setShowAddressPost(!showAddressPost);
  };

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 md:col-span-12">
        <p className="text-xl text-primaryColor font-bold mb-4">Hình thức nhận hàng</p>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleOptionChange('delivery')}
            className={`px-4 py-2 border rounded-lg transition-colors duration-500 ${
              selectedOption === 'delivery' ? 'bg-primaryColor text-white' : 'border-gray-300 text-gray-700'
            }`}
          >
            Giao hàng tận nơi
          </button>
          <button
            onClick={() => handleOptionChange('pharmacy')}
            className={`px-4 py-2 border rounded-lg transition-colors duration-500 ${
              selectedOption === 'pharmacy' ? 'bg-primaryColor text-white' : 'border-gray-300 text-gray-700'
            }`}
          >
            Nhận tại nhà thuốc
          </button>
        </div>
        {selectedOption === 'delivery' && (
          <>
            <button
              onClick={handleAddressPostToggle}
              className="flex items-center px-4 py-2 border rounded-lg border-gray-300 text-gray-700 transition-opacity duration-300 opacity-100"
            >
              <HiPlus className="mr-2" />
              Cập nhật địa chỉ nhận hàng
            </button>
            {showAddressPost && (
              <div className="mt-4 transition-opacity duration-300 opacity-100">
                <AddressPost />
              </div>
            )}
          </>
        )}
        {selectedOption === 'pharmacy' && (
          <div className="mb-4 transition-opacity duration-300 opacity-100">
            <p className="font-bold my-4">Thông tin người nhận</p>
            <p className="my-4 bg-[#f7f7f7] px-5 py-2 rounded-[10px]">{customerName} | {customerPhone}</p>
            <button className="flex items-center px-4 py-2 border rounded-lg border-gray-300 text-gray-700 mt-2">
              <HiPlus className="mr-2" />
              Chọn địa chỉ nhà thuốc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryOptions;
