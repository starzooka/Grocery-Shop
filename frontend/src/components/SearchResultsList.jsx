import "./SearchResultsList.css";
import React, { useState, useEffect } from 'react';
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export default SearchResultsList;