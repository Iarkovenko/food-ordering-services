import React from 'react';

const Filter = ({ value = '', onChange }) => (
  <div>
    <p>enter filter</p>
    <input
      onChange={onChange}
      name="filter"
      placeholder="enter filter"
      value={value}
    />
  </div>
);

export default Filter;
