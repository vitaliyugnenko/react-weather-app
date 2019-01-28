import React, { Component } from 'react';
import Search from './Search';

class Main extends Component {
    render() {
        let data = this.props.data;
        let getWeather = this.props.getWeather;
        let icons = {
            Clear: <i className="fas fa-sun" />,
            Clouds: <i className="fas fa-cloud" />,
            Snow: <i className="fas fa-snowflake" />,
            Rain: <i className="fas fa-cloud-showers-heavy" />,
            Thunderstorm: <i className="fas fa-bolt" />,
            Drizzle: <i className="fas fa-cloud-showers-heavy" />,
            Smoke: <i className="fas fa-smog" />,
            Mist: <i className="fas fa-smog" />,
            Fog: <i className="fas fa-smog" />,
            Haze: <i className="fas fa-smog" />,
            Sand: <i className="fas fa-smog" />,
            Dust: <i className="fas fa-smog" />,
            Squalls: <i className="fas fa-smog" />,
            Tornado: <i className="fas fa-smog" />,
        };

        let mainWeather = data.weather ? (
            <div id="Main-Weather-Container">
                <div className="Child-Container Left-Child">
                    <div className="Main-Weather" key={Math.random()}>
                        {data.temp}&deg;{icons[data.weather]}
                    </div>
                    <div className="Main-Weather Data" key={Math.random()}>
                        {data.city}, {data.country}
                    </div>
                    <div className="Main-Weather Data" key={Math.random()}>
                        {data.weather}
                    </div>
                </div>
                <div className="Child-Container Right-Child">
                    <div
                        className="Detail-Weather Pressure"
                        key={Math.random()}
                    >
                        Pressure: {data.pressure}hpa
                    </div>
                    <div className="Detail-Weather Wind" key={Math.random()}>
                        Wind: {data.wind}m/s
                    </div>
                    <div
                        className="Detail-Weather Humidity"
                        key={Math.random()}
                    >
                        Humidity: {data.humidity}%
                    </div>
                    <div className="Detail-Weather Sunrise" key={Math.random()}>
                        Sunrise: {data.sunrise}
                    </div>
                    <div className="Detail-Weather Sunset" key={Math.random()}>
                        Sunset: {data.sunset}
                    </div>
                </div>
            </div>
        ) : null;

        return (
            <div id="Top">
                <Search getWeather={getWeather} usrCity={data.usrCity} />
                {mainWeather}
            </div>
        );
    }
}

export default Main;
