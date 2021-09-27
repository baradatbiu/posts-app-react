import React from 'react';

function XSelect({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>{defaultValue}</option>
      {options.map(({ value, title }) =>
        <option key={value} value={value}>{title}</option>
      )}
    </select>
  );
}

export default XSelect;