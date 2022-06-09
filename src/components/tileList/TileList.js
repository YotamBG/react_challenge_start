import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = ({ list }) => {
  console.log('list: ', list);
  return (
    <div>
      {list.map((item, i) => <Tile item={item} key={i}/>)}
    </div>
  );
};
