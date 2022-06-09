import React from "react";

export const ContactPicker = ({ list, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={-1} value={''} selected="selected">No contact selected</option>
      {list.map((item, i) => <option key={i} value={item.name}>{item.name}</option>)}
    </select>
  );
};
