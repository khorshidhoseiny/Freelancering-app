import React from "react";

function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
      />
    </div>
  );
}

export default TextField;
