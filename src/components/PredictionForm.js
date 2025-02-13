import React, { useState } from 'react';

const PredictionForm = ({ match, onSubmit }) => {
  const [score1, setScore1] = useState('');
  const [score2, setScore2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const prediction = {
      team1: match.homeTeam.name,
      team2: match.awayTeam.name,
      date: match.utcDate,
      score1: parseInt(score1),
      score2: parseInt(score2),
    };
    onSubmit(prediction);
    setScore1('');
    setScore2('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Team 1</label>
        <input
          type="text"
          value={match.homeTeam.name}
          readOnly
          className="w-full px-3 py-2 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Team 2</label>
        <input
          type="text"
          value={match.awayTeam.name}
          readOnly
          className="w-full px-3 py-2 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Match Date</label>
        <input
          type="text"
          value={new Date(match.utcDate).toLocaleDateString()}
          readOnly
          className="w-full px-3 py-2 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Predicted Score</label>
        <div className="flex gap-4">
          <input
            type="number"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Team 1 Score"
            required
          />
          <input
            type="number"
            value={score2}
            onChange={(e) => setScore2(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Team 2 Score"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Submit Prediction
      </button>
    </form>
  );
};

export default PredictionForm;