import React from "react";
import SearchNews from "./SearchNews";
import AddNewsButton from "./AddNewsButton";
import AddNews from "./AddNews";
import NewsList from "./NewsList";
import { useSelector } from "react-redux";

function NewsPage() {
  const newsAddIsShow = useSelector((state) => state.application.newsAddIsShow);
  const user = useSelector((state) => state.users.user);
  const isUser = user.hasOwnProperty("admin");
  return (
    <>
      {newsAddIsShow && <AddNews />}
      <div className="news-parent">
        <div className="news-parent__header">
          <SearchNews />
          {!user?.admin && isUser && <AddNewsButton />}
        </div>
        <NewsList />
      </div>
    </>
  );
}

export default NewsPage;
