import React from 'react';
import preload from '../../data.json';

const Search = () => {
  let i = 0;
  return (
    <div className="search">
      {preload.shows.map(show => <h3 key={i++}>{show.title}</h3>)}
    </div>
  );
};
export default Search;
