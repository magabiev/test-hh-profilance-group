import React, { useState } from "react";
import AddNewsHeader from "./AddNewsHeader";
import AddNewsText from "./AddNewsText";
import AddNewsTitle from "./AddNewsTitle";
import { useDispatch, useSelector } from "react-redux";
import { addedNews } from "../../redux/ducks/news";

function AddNews() {
  const dispatch = useDispatch();
  const adding = useSelector((state) => state.news.adding);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const addNews = () => {
    if (title && text) {
      dispatch(addedNews(title, text));
    }
  };

  return (
    <div className="black">
      <div className="pop-up-block">
        <AddNewsHeader />
        <AddNewsTitle value={title} handleChange={handleTitle} />
        <AddNewsText value={text} handleChange={handleText} />
        <button onClick={addNews} disabled={adding} className="pop-up__button">
          Добавить
        </button>
      </div>
    </div>
  );
}

export default AddNews;
