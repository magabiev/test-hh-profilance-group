import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRequest } from "../../redux/ducks/users";

function SearchNews() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.users.searchValue);
  const handleChange = (e) => {
    dispatch(searchRequest(e.target.value));
  };
  return (
    <input
      value={searchValue}
      onChange={handleChange}
      className="search__form"
      placeholder="Поиск по названию"
    />
  );
}

export default SearchNews;
