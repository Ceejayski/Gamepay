import React from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.fetchResults = this.fetchResults.bind(this);
    this.message = this.message.bind(this);
  }

  fetchResults(inputValue, callback) {
    const { query } = this.state;
    getData(endpoint.search(query), 'actions')
      .then((res) => {
        const options = [];
        res.forEach((e) => {
          options.push({
            value: e.appid,
            label: e.name,
            icon: e.logo,
          });
        });
        callback(options);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  message() {
    const { query } = this.state;

    if (query.length) {
      return `Can't find "${query}" in games`;
    }
    return 'Please input game name';
  }

  render() {
    library.add(faSearch);
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: state.isFocused ? '#BEBEBE' : '#3B3B3B',
        // match with the menu
        borderRadius: '25px',
        // Overwrittes the different states of border
        borderColor: state.isFocused ? null : '#ccc',
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        '&:hover': {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? null : 'white',
        },
      }),
      menu: (base) => ({
        ...base,
        // override border radius to match the box
        borderRadius: '5px',
        backgroundColor: '#000',
        // kill the gap
      }),
      menuList: (base) => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
      }),
    };
    const { Option } = components;
    const CaretDownIcon = () => <FontAwesomeIcon icon="search" />;

    const DropdownIndicator = (props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <components.DropdownIndicator {... props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );

    const IconOption = (props) => (

      // eslint-disable-next-line react/jsx-props-no-spreading
      <Option {... props}>
        <div className="d-flex">
          <div>

            <img
              src={props.data.icon}
              alt={props.data.value}
              style={{ width: 80 }}
            />
          </div>
          <div className="ms-2
          "
          >
            {props.data.label}
          </div>
        </div>
      </Option>
    );

    return (
      <>
        <div className="search-bar">
          <AsyncSelect
            loadOptions={this.fetchResults}
            onInputChange={(v) => { this.setState({ query: v }); }}
            components={{ DropdownIndicator, Option: IconOption }}
            placeholder="Search for your games here"
            noOptionsMessage={this.message}
            styles={customStyles}
            cacheOptions
          />
        </div>

      </>
    );
  }
}
