import React, { memo, useCallback, useRef, useState } from "react";
import styles from "./search_header.module.css";

const Search_header = memo(({ search, darkMode, setSelectedVideo }) => {
  const inputRef = useRef();
  const [keywords, setKeywords] = useState([]);

  const goToHome = () => {
    setSelectedVideo(null);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    search(value);
    setKeywords((prev) => [...prev, value]);
    localStorage.setItem("keywords", JSON.stringify({ keywords }));
    inputRef.current.value = "";
  });

  if (keywords.length > 5) {
    keywords.shift();
    setKeywords(keywords);
  }

  // localStorage에서 값 받아오기
  let keywordsLists;
  if (localStorage.getItem("keywords")) {
    keywordsLists = JSON.parse(localStorage.getItem("keywords")).keywords;
  }

  const searchKeyword = (event) => {
    const value = event.currentTarget.innerText;
    search(value);
  };

  return (
    <form
      className={
        darkMode ? `${styles.search_form} ${styles.dark}` : styles.search_form
      }
      onSubmit={handleSubmit}
    >
      <h1
        onClick={goToHome}
        className={darkMode ? `${styles.logo} ${styles.dark}` : styles.logo}
      >
        <img src="/images/logo.png" alt="youtube logo" />
        <span>Youtube</span>
      </h1>
      <div className={styles.search}>
        <input ref={inputRef} type="text" placeholder="Search" />
        <button
          className={
            darkMode ? `${styles.search_btn} ${styles.dark}` : styles.search_btn
          }
        >
          <img src="/images/search.png" alt="search icon" />
        </button>
        <ul className={styles.keywords}>
          <li className={styles.recent_search}>recent search:</li>
          {keywordsLists &&
            keywordsLists.map((keyword) => {
              return (
                <li
                  key={keyword}
                  className={
                    darkMode
                      ? `${styles.keyword} ${styles.dark}`
                      : styles.keyword
                  }
                  onClick={searchKeyword}
                >
                  {keyword}
                </li>
              );
            })}
        </ul>
      </div>
    </form>
  );
});

export default Search_header;
