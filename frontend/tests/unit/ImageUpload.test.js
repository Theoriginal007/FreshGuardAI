import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageUpload from '../../src/components/ImageUpload';
import '@testing-library/jest-dom/extend-expect';

describe('ImageUpload Component', () => {
  test('renders upload button', () => {
    render(<ImageUpload />);
    const buttonElement = screen.getByText(/Upload Image/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onChange when a file is selected', () => {
    const mockOnChange = jest.fn();
    render(<ImageUpload onChange={mockOnChange} />);

    const fileInput = screen.getByLabelText(/Choose file/i);
    fireEvent.change(fileInput, { target: { files: [new File(['dummy content'], 'example.png', { type: 'image/png' })] } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
