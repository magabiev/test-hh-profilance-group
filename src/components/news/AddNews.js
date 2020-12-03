import React, { useEffect, useState } from "react";
import AddNewsHeader from "./AddNewsHeader";
import AddNewsText from "./AddNewsText";
import AddNewsTitle from "./AddNewsTitle";
import { useDispatch, useSelector } from "react-redux";
import { addedNews } from "../../redux/ducks/news";

function AddNews() {
  const dispatch = useDispatch();
  const adding = useSelector((state) => state.news.adding);
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
    if (click) {
      setClick(false);
    }
  };
  const handleText = (e) => {
    setText(e.target.value);
    if (click) {
      setClick(false);
    }
  };
  const addNews = () => {
    if (title && text) {
      dispatch(addedNews(title, text));
    }
    setClick(true);
  };
  useEffect(() => {
    if (click && !adding) {
      setText("");
      setTitle("");
    }
  }, [adding, click]);

  return (
    <div className="black">
      <div className="pop-up-block">
        <AddNewsHeader />
        <div
          className={`adding-success ${
            click && !adding && "adding-success__show"
          }`}
        >
          Новость добавлена
        </div>
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
