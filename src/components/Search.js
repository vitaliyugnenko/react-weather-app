import React, { Component } from 'react';

class Search extends Component {
    render() {
        let getWeather = this.props.getWeather;
        let city =
            this.props.usrCity &&
            document.activeElement !== document.getElementById('Search-Input')
                ? this.props.usrCity
                : '';

        return (
            <form id="Search-Form">
                <input
                    id="Search-Input"
                    type="text"
                    autoComplete="off"
                    placeholder={`${city}`}
                    onFocus={() =>
                        (document.getElementById('Search-Input').placeholder =
                            '')
                    }
                    onBlur={() =>
                        (document.getElementById(
                            'Search-Input'
                        ).placeholder = `${this.props.usrCity}`)
                    }
                />
                <button
                    id="Search-Button"
                    onClick={e => {
                        e.preventDefault();
                        getWeather();
                        city = '';
                    }}
                >
                    Search
                </button>
            </form>
        );
    }
}

export default Search;
