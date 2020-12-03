import React from "react";
import NewsStatus from "./NewsStatus";
import NewsOptions from "./NewsOptions";
import { useSelector } from "react-redux";

function News({ news }) {
  const user = useSelector((state) => state.users.user);
  return (
    <div className="news">
      <div className="news__header">
        <div className="news__title">{news.title}</div>
        <NewsStatus verified={news.verified} />
      </div>
      <div className="news__text">{news.text}</div>
      <div className="news__item">
        <div className="news__date">{news.date}</div>
      </div>
      {user?.admin && <NewsOptions verified={news.verified} id={news.id} />}
    </div>
  );
}

export default News;
