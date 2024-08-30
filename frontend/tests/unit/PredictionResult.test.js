import React from 'react';
import { render, screen } from '@testing-library/react';
import PredictionResult from '../../src/components/PredictionResult';
import '@testing-library/jest-dom/extend-expect';

describe('PredictionResult Component', () => {
  test('displays prediction result', () => {
    const mockPrediction = {
      result: 'Positive',
      details: 'The image shows a cat.',
    };
    
    render(<PredictionResult prediction={mockPrediction} />);
    
    expect(screen.getByText(/Positive/i)).toBeInTheDocument();
    expect(screen.getByText(/The image shows a cat./i)).toBeInTheDocument();
  });

  test('renders error message when no prediction is provided', () => {
    render(<PredictionResult prediction={null} />);
    
    expect(screen.getByText(/No prediction available/i)).toBeInTheDocument();
  });
});
