import React from 'react';

const PredictionHistory = ({ predictions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Prediction History</h2>
      {predictions.length > 0 ? (
        <ul className="space-y-4">
          {predictions.map((pred, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              <p><strong>{pred.team1}</strong> vs <strong>{pred.team2}</strong></p>
              <p>Match Date: {pred.date}</p>
              <p>Predicted Score: {pred.team1} {pred.score1} - {pred.score2} {pred.team2}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No predictions yet. Make your first prediction!</p>
      )}
    </div>
  );
};

export default PredictionHistory; // Ensure this export is present