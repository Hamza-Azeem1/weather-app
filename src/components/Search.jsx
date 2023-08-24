import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!/^[a-zA-Z\s]+$/.test(city)) {
            setError('Please enter a valid city name (alphabets only).');
            return;
        }

        if (city.trim().length < 3) {
            setError('Please enter the full city name (at least 3 characters).');
            return;
        }

        try {
            setError('');
            await onSearch(city);
        } catch (error) {
            setError('City not found or an error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="flex items-center space-x-2 p-4 rounded-lg">
                <input
                    type="text"
                    className="border p-2 rounded w-48 focus:outline-none"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
