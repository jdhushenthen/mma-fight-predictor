import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'

class SelectSearchBar extends Component {

    loadOptions = async (inputText) => {
        if (!inputText) {
            return [];
        }
        
        const response = await fetch('https://mma-fight-predictor.herokuapp.com/api/search/' + inputText);
        const json = await response.json();
        return json.options;
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    className="Search"
                    cacheOptions
                    defaultOptions
                    value={this.props.selectedValue}
                    loadOptions={this.loadOptions}
                    onInputChange={this.props.handleInputChange}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default SelectSearchBar