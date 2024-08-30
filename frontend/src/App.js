import React, { useContext, useEffect } from 'react';
import { PredictionContextProvider, PredictionContext } from './contexts/PredictionContext';
import ImageUpload from './components/ImageUpload';
import PredictionResult from './components/PredictionResult';
import Recommendations from './components/Recommendations';
import './App.css';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
);

// Main App Component
function App() {
  const { prediction, loading, error, fetchPrediction } = useContext(PredictionContext);

  useEffect(() => {
    // Optionally fetch initial prediction data when the component mounts
    fetchPrediction();
  }, [fetchPrediction]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Prediction App</h1>
        <p>Upload an image to get predictions and recommendations powered by AI.</p>
      </header>
      <main>
        <ImageUpload />

        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
            <button onClick={fetchPrediction} className="retry-button">
              Retry
            </button>
          </div>
        )}
        
        {!loading && !error && !prediction && (
          <p>No prediction available. Please upload an image.</p>
        )}

        {prediction && (
          <>
            <PredictionResult prediction={prediction} />
            <Recommendations prediction={prediction} />
          </>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 FreshGuardAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

// App Wrapper Component with Context Provider
export default function AppWrapper() {
  return (
    <PredictionContextProvider>
      <App />
    </PredictionContextProvider>
  );
}
