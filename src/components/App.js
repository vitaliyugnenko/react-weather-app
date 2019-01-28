import React, { Component } from 'react';
import '../App.css';
import Main from './Main';
import Forecast from './Forecast';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }

    getWeather = () => {
        let inputValue =
            document.getElementById('Search-Input').value || 'New York';
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ea6619c353f35f780ce4ad9a705c7d30&units=imperial`;
        let forecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=ea6619c353f35f780ce4ad9a705c7d30&units=imperial`;
        let sunset;
        let sunrise;

        axios
            .get(weatherURL)
            .then(response => {
                sunset = new Date(response.data.sys.sunset * 1000);
                sunrise = new Date(response.data.sys.sunrise * 1000);

                this.setState({
                    temp: Math.round((response.data.main.temp - 32) * (5 / 9)),
                    city: response.data.name,
                    usrCity: inputValue,
                    country: response.data.sys.country,
                    wind: response.data.wind.speed,
                    pressure: response.data.main.pressure,
                    humidity: response.data.main.humidity,
                    sunrise: sunrise.getHours() + ':' + sunrise.getMinutes(),
                    sunset: sunset.getHours() + ':' + sunset.getMinutes(),
                    weather: response.data.weather[0].main,
                });
            })
            .catch(e => {
                console.error('ERROR:' + e);
            })
            .then(
                axios
                    .get(forecastURL)
                    .then(response => {
                        let weatherList = response.data.list;
                        let storage = [];
                        for (let i = 0; i < weatherList.length; i++) {
                            storage.push(weatherList[i].main.temp);
                        }

                        let start = 0;
                        let end = 7;
                        let result = [];
                        let weekday = [
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                        ];
                        let months = [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ];

                        for (let i = 0; i <= 4; i++) {
                            let forecastTempList = storage.slice(start, end);
                            let date = new Date(weatherList[start].dt * 1000);

                            result.push({
                                max_temp:
                                    (Math.max.apply(null, forecastTempList) -
                                        32) *
                                    (5 / 9),
                                min_temp:
                                    (Math.min.apply(null, forecastTempList) -
                                        32) *
                                    (5 / 9),
                                month: months[date.getMonth()],
                                date: date.getDate(),
                                day: weekday[date.getDay()],
                            });
                            start += 8;
                            end += 8;
                        }

                        this.setState({ forecast: result });

                        document.getElementById('Search-Input').value = '';
                    })
                    .catch(e => {
                        console.error('ERROR:' + e);
                    })
            );
    };

    componentDidMount() {
        this.getWeather();
    }

    render() {
        return (
            <div id="Main-Container">
                <Main data={this.state} getWeather={this.getWeather} />
                <Forecast data={this.state} />
            </div>
        );
    }
}

export default App;
