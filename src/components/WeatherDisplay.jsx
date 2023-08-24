import PropTypes from 'prop-types';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return <div className="text-center">Loading...</div>;
    }

    const { location, current } = weatherData;
    const { name, country } = location;
    const { temp_c, humidity, condition } = current;

    return (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">{`${name || 'Unknown'}, ${country || 'Unknown'}`}</h2>
            <p className="text-black">Temperature: {temp_c}°C</p>
            <p className="text-black">Humidity: {humidity}%</p>
            <p className="text-black mt-1">Weather: {condition?.text}</p>
        </div>
    );
};

WeatherDisplay.propTypes = {
    weatherData: PropTypes.shape({
        location: PropTypes.shape({
            name: PropTypes.string,
            country: PropTypes.string,
        }),
        current: PropTypes.shape({
            temp_c: PropTypes.number,
            humidity: PropTypes.number,
            condition: PropTypes.shape({
                text: PropTypes.string,
            }),
        }),
    }),
};

export default WeatherDisplay;
