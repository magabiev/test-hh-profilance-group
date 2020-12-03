import React, { useEffect } from "react";
import News from "./News";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/ducks/news";

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items);
  const approvedNews = news.filter((item) => item.verified === true);
  const loading = useSelector((state) => state.news.loading);
  const user = useSelector((state) => state.users.user);
  const isUser = user.hasOwnProperty("login");
  const filteredNews = isUser ? news : approvedNews;
  const searchValue = useSelector((state) => state.users.searchValue);
  const searchFilterNews = filteredNews
    .filter(
      (item) =>
        item.title.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
    )
    .reverse();

  useEffect(() => {
    if (!news.length) {
      dispatch(loadNews());
    }
  }, [dispatch, news.length]);

  return (
    <div className="news-list">
      {news.length
        ? !loading &&
          searchFilterNews.map((item) => <News key={item.id} news={item} />)
        : "Нет новостей"}
    </div>
  );
}

export default NewsList;
