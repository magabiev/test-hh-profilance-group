import React from "react";
import NewsStatus from "./NewsStatus";
import NewsOptions from "./NewsOptions";

function News({ news }) {
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
      <NewsOptions verified={news.verified} id={news.id} />
    </div>
  );
}

export default News;
