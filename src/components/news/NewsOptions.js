import React from "react";
import { useDispatch } from "react-redux";
import { newsApproved, newsDeleted } from "../../redux/ducks/news";

function NewsOptions({ verified, id }) {
  const dispatch = useDispatch();
  const newsDelete = () => {
    dispatch(newsDeleted(id));
  };

  const newsApprove = () => {
    dispatch(newsApproved(id));
  };

  return (
    <div className="news__item">
      <button
        onClick={newsApprove}
        disabled={verified}
        className="news__options add"
      >
        {verified ? "Одобрено" : "Одобрить"}
      </button>
      <button onClick={newsDelete} className="news__options delete">
        Удалить
      </button>
    </div>
  );
}

export default NewsOptions;
