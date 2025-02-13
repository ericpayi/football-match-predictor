const API_KEY = 'ae601aab18443b82b03dc35c6e7645fe'; // Replace with your API key
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3'; // Remove the trailing slash

// Fetch upcoming matches
export const fetchUpcomingMatches = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fixtures?league=39&season=2023&status=NS`, {
      headers: {
        'X-RapidAPI-Key': API_KEY, // Use the constant here,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch matches');
    }
    const data = await response.json();
    console.log('API Response:', data); // Log the API response
    return data.response || []; // Return an empty array if data.response is undefined
  } catch (error) {
    console.error('Error fetching matches:', error);
    return []; // Return an empty array if there's an error
  }
};

// Fetch match details by ID (optional, for future use)
export const fetchMatchDetails = async (matchId) => {
  try {
    const response = await fetch(`${BASE_URL}/fixtures?id=${matchId}`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data.response[0]; // Return the match details
  } catch (error) {
    console.error('Error fetching match details:', error);
    return null; // Return null if there's an error
  }
};