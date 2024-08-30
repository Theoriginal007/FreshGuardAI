import React, { createContext, useState, useCallback } from 'react';
import { fetchPredictionFromAPI, uploadImageToAPI } from '../services/api';

export const PredictionContext = createContext();

export function PredictionContextProvider({ children }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPrediction = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchPredictionFromAPI();
      setPrediction(response.data);
    } catch (error) {
      setError('Failed to fetch prediction.');
      console.error('Fetch prediction error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadImageAndPredict = useCallback(async (image) => {
    setLoading(true);
    setError(null);
    try {
      const response = await uploadImageToAPI(image);
      setPrediction(response.data);
    } catch (error) {
      setError('Failed to process image.');
      console.error('Upload image error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PredictionContext.Provider value={{ prediction, loading, error, fetchPrediction, uploadImageAndPredict }}>
      {children}
    </PredictionContext.Provider>
  );
}
