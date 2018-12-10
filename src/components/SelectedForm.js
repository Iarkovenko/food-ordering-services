import React from 'react';

const filter = ({ options }) => (
  <form>
    <select>
      {options.map(o => (
        <option value={o.name}>{o.name}</option>
      ))}
    </select>
  </form>
);

export default filter;
