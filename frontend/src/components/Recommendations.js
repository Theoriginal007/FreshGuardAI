import React from 'react';

function Recommendations({ prediction }) {
  return (
    <div className="recommendations">
      <h2>Recommendations:</h2>
      {prediction.recommendations.length > 0 ? (
        <ul>
          {prediction.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      ) : (
        <p>No specific recommendations available for this prediction.</p>
      )}
    </div>
  );
}

export default Recommendations;
