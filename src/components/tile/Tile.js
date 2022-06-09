import React from "react";

export const Tile = ({ item }) => {
  console.log('item: ', item);
  return (
    <div className="tile-container">
      {Object.values(item).map((value, i) => <p key={i} className={(i===0?"tile-title":"tile")}>{value}</p>)}
    </div>
  );
};
