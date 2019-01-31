import React from 'react';

const SelectForm = ({ onSubmit, options, onChange, value }) => (
  <form onSubmit={onSubmit}>
    <select value={value} onChange={onChange}>
      {options.map(o => (
        <option key={o.id} value={o.name} name={o.name}>
          {o.name}
        </option>
      ))}
    </select>
    <button type="submit">reset</button>
  </form>
);

export default SelectForm;
