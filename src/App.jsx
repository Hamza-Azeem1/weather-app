/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SearchBar from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');


    const fetchWeatherData = async (city) => {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.error) {
                setError('City not found. Please enter a valid city name.');
            } else {
                setError('');
                setWeatherData(data);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex items-center justify-center">
            <div className="w-full max-w-md bg-blue-500 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">
                    Weather App
                </h1>
                <SearchBar onSearch={fetchWeatherData} />
                {weatherData && <WeatherDisplay weatherData={weatherData} />}
            </div>
        </div>

    );
};

export default App;
