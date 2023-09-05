import React, { useContext } from 'react';
import {
  SubHeaderWrapper,
  FilterButton,
  SelectionOptionWrapper,
  SelectionSearchButtonWrapper,
  SearchButton,
} from './styled';
import { Context } from '../../Contexts/AppContext';

const Search = ({ handleCountrySelect }) => {
  const { countryList, selectedCountry } = useContext(Context);

  return (
    <SubHeaderWrapper>
      <SelectionOptionWrapper>
        <h4 style={{ marginTop: '0.6rem' }}>Select region: </h4>
        <select
          onChange={handleCountrySelect}
          value={selectedCountry}
          style={{
            borderColor: '#e6e6f0',
            height: '3rem',
            width: '15%',
          }}
        >
          <option value="">Canada NWP</option>
          {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </SelectionOptionWrapper>
      <SelectionSearchButtonWrapper>
        <SearchButton color="">Search...</SearchButton>
        <FilterButton color="">Filter</FilterButton>
      </SelectionSearchButtonWrapper>
    </SubHeaderWrapper>
  );
};

export default Search;
