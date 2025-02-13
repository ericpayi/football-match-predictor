import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PredictionForm from './components/PredictionForm';
import MatchList from './components/MatchList';
import PredictionHistory from './components/PredictionHistory';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [predictions, setPredictions] = useState([]);

  // Dummy match data for testing
  const match = {
    homeTeam: { name: 'Team A' },
    awayTeam: { name: 'Team B' },
    utcDate: new Date().toISOString(), // Current date in ISO format
  };

  const handlePredictionSubmit = (prediction) => {
    setPredictions([...predictions, prediction]);
    console.log("Current Predictions:", [...predictions, prediction]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Football Match Predictor</h1>
      
      {/* Pass the match prop to PredictionForm */}
      <PredictionForm match={match} onSubmit={handlePredictionSubmit} />

      {/* Prediction History Section */}
      <PredictionHistory predictions={predictions} />

      {/* Clear Predictions Button */}
      <button
        onClick={() => setPredictions([])}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Clear Predictions
      </button>

      {/* Upcoming Matches Section */}
      <MatchList />
    </div>
  );
}

export default App;