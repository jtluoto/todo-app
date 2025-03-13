import React from 'react';

type CategoryDropdownProps = {
  selectedCategory: 'home' | 'hobbies' | 'work';
  onSelectCategory: (category: 'home' | 'hobbies' | 'work') => void;
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onSelectCategory(e.target.value as 'home' | 'hobbies' | 'work')}
      className="border border-gray-200 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
    >
      <option value="home">Home</option>
      <option value="hobbies">Hobbies</option>
      <option value="work">Work</option>
    </select>
  );
};

export default CategoryDropdown;
