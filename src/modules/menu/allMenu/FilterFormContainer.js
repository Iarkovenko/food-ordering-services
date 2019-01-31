import React from 'react';

const SearcherForm = ({ handleChangeText, value }) => (
  <form>
    <input
      type="text"
      name="searcherByName"
      placeholder="Search by name"
      onChange={handleChangeText}
      value={value}
    />
  </form>
);

export default SearcherForm;
