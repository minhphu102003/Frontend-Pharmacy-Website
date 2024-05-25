import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as categoriesService from '../../services/Category'; // Import service to fetch categories

const MenuCategory = () => {
  const [categories, setCategories] = useState([]); // State to store categories fetched from API
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoriesService.getCategories(); // Call API to get categories
        if (response.status === 200) {
          setCategories(response.data.listCategories); // Update state with categories from API response
        } else {
          console.error('Failed to fetch categories:', response);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories(); // Call fetchCategories when component mounts
  }, []);

  const handleCategoryClick = (id) => {
    navigate('/listmedicine', { state: { idCategory: id } });
  };

  return (
    <ul className="mx-auto flex w-full max-w-screen-xl items-center justify-center pt-2 pb-8">
      {categories.map((category) => (
        <li key={category.category_id} className="mr-4">
          <button
            onClick={() => handleCategoryClick(category.category_id)}
            className="text-primaryColor hover:text-white hover:bg-primaryColor px-4 py-1 rounded-lg border border-primaryColor focus:outline-none focus:border-primaryColor transition-all"
          >
            {category.categoryName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategory;
