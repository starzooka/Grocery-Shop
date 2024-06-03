import "./SearchResult.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleRefresh=()=>{
    window.location.reload();
  }
  const handleSelect = () => {
    navigate('/product', { state: { productName: result } });
    handleRefresh();
  };

  return (
    <div
      className="search-result"
      onClick={handleSelect}
    >
      {result}
    </div>
  );
};

export default SearchResult;
