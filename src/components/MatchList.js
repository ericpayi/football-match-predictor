import React, { useEffect, useState } from 'react';
import { fetchUpcomingMatches } from '../apiService';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchUpcomingMatches();
        setMatches(data);
      } catch (err) {
        setError('Failed to load matches. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadMatches();
  }, []);

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!matches || matches.length === 0) return <p>No upcoming matches found.</p>;

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Matches</h2>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li key={match.fixture.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p><strong>{match.teams.home.name}</strong> vs <strong>{match.teams.away.name}</strong></p>
            <p>Match Date: {new Date(match.fixture.date).toLocaleDateString()}</p>
            <button
              onClick={() => console.log('Predict match:', match.fixture.id)}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Predict
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;