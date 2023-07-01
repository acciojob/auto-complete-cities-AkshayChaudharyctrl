import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const AutocompleteForm = () => {
  const [address, setAddress] = useState('');

  const handleSelect = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  return (
    <div>
      <h1>Autocomplete Form</h1>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter a city' })} />
            <div>
              {suggestions.map((suggestion) => (
                <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AutocompleteForm;
