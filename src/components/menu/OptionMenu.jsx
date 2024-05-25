import React from 'react';

const OptionMenu = () => {
  const options = ['khẩu trang', 'giảm cân', 'kem chống nắng', 'hạ sốt', 'collagen', 'pharamaton'];

  return (
    <ul className="mx-auto flex w-full max-w-screen-xl items-center justify-center pt-2 pb-4">
      {options.map((option, index) => (
        <li key={index} className="mr-4">
          <button className="text-primaryColor hover:text-white hover:bg-primaryColor px-2 py-1 focus:outline-none focus:border-primaryColor transition-all">
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptionMenu;