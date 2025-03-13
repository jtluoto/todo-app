import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryBadge from '../CategoryBadge';

describe('CategoryBadge', () => {
  it('renders the correct icon and text for home category', () => {
    render(<CategoryBadge category="home" />);
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('class', 'h-5 w-5');
  });

  it('renders the correct icon and text for hobbies category', () => {
    render(<CategoryBadge category="hobbies" />);
    expect(screen.getByText('hobbies')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('class', 'h-5 w-5');
  });

  it('renders the correct icon and text for work category', () => {
    render(<CategoryBadge category="work" />);
    expect(screen.getByText('work')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('class', 'h-5 w-5');
  });
});
