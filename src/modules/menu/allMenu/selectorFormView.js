import React from 'react';

const filter = ({ options, value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(o => (
        <option value={o.name}>{o.name}</option>
      ))}
    </select>
    <button type="submit">reset</button>
  </form>
);

export default filter;
