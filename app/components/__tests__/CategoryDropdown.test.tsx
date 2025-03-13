import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryDropdown from '../CategoryDropdown';

describe('CategoryDropdown', () => {
  it('renders the dropdown with the correct default value', () => {
    render(<CategoryDropdown selectedCategory="home" onSelectCategory={() => {}} />);
    expect(screen.getByDisplayValue('Home')).toBeInTheDocument();
  });

  it('calls onSelectCategory with the correct value when a new category is selected', () => {
    const mockOnSelectCategory = jest.fn();
    render(<CategoryDropdown selectedCategory="home" onSelectCategory={mockOnSelectCategory} />);
    fireEvent.change(screen.getByDisplayValue('Home'), { target: { value: 'work' } });
    expect(mockOnSelectCategory).toHaveBeenCalledWith('work');
  });

  it('renders all category options', () => {
    render(<CategoryDropdown selectedCategory="home" onSelectCategory={() => {}} />);
    expect(screen.getByDisplayValue('Home')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Hobbies')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Work')).toBeInTheDocument();
  });
});
