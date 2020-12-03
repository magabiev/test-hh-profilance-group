import React, { useEffect } from "react";
import News from "./News";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/ducks/news";

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items);
  const loading = useSelector((state) => state.news.loading);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className="news-list">
      {news.length
        ? !loading && news.map((item) => <News key={item.id} news={item} />)
        : "Нет новостей"}
    </div>
  );
}

export default NewsList;
