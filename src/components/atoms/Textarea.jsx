import React from "react";

const Textarea = ({ name, placeholder, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name}</label>
      <textarea
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default Textarea;
