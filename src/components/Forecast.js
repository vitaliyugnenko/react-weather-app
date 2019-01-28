import React, { Component } from 'react';

class Forecast extends Component {
    render() {
        let data = this.props.data;

        let icons = {
            Clear: <i className="fas fa-sun" />,
            Clouds: <i className="fas fa-cloud" />,
            Snow: <i className="fas fa-snowflake" />,
            Rain: <i className="fas fa-cloud-showers-heavy" />,
            Thunderstorm: <i className="fas fa-bolt" />,
            Drizzle: <i className="fas fa-cloud-showers-heavy" />,
            Atmosphere: <i className="fas fa-smog" />,
            Mist: <i className="fas fa-smog" />,
            Fog: <i className="fas fa-smog" />,
        };

        let forecastWeather =
            data.forecast && data.weather ? (
                data.forecast.map((item, index) => (
                    <div className="Forecast-Container" key={index}>
                        <div
                            className={`Forecast Item${index}`}
                            key={Math.random()}
                        >
                            {item.month + ', ' + item.date}
                        </div>
                        <div
                            className={`Forecast Item${index}`}
                            key={Math.random()}
                        >
                            {Math.round(item.max_temp)}&deg;
                        </div>
                        <div
                            className={`Forecast Item${index}`}
                            key={Math.random()}
                        >
                            {icons[data.weather]}
                        </div>
                        <div
                            className={`Forecast Item${index}`}
                            key={Math.random()}
                        >
                            {Math.round(item.min_temp)}&deg;
                        </div>
                    </div>
                ))
            ) : (
                <div className="Forecast-Container"> </div>
            );

        return <div id="Bottom">{forecastWeather}</div>;
    }
}

export default Forecast;
