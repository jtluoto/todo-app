import React from 'react';

type CategoryBadgeProps = {
  category: 'home' | 'hobbies' | 'work';
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 20V10H5v10H0V10L10 0l10 10v10h-5V10h-5v10z" />
          </svg>
        );
      case 'hobbies':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        );
      case 'work':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <span className={`category-badge ${category}`}>
      {getCategoryIcon(category)}
      {category}
    </span>
  );
};

export default CategoryBadge;
