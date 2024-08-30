import React from 'react';

function PredictionResult({ prediction }) {
  return (
    <div className="prediction-result">
      <h2>Prediction Result:</h2>
      <p><strong>Label:</strong> {prediction.label}</p>
      <p><strong>Confidence:</strong> {prediction.confidence.toFixed(2)}%</p>
      {prediction.details && (
        <div>
          <h3>Details:</h3>
          <ul>
            {prediction.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PredictionResult;
