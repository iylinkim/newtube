import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import styles from "./search_header.module.css";

const Search_header = memo(({search, lightMode, setLightMode}) => {
  const inputRef = useRef();
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    const value = inputRef.current.value;
    // search(value);
    setKeywords(prev => [...prev, value]);
    localStorage.setItem("keywords", JSON.stringify({keywords}));
    inputRef.current.value = "";
    
  });

  if (keywords.length > 5) {
    keywords.shift();
    setKeywords(keywords);
  }

  const setToggle = () => {
    setLightMode(prev => !prev);
  };

  // localStorage에서 값 받아오기
  let keywordsLists;
  if (localStorage.getItem("keywords")) {
    keywordsLists = JSON.parse(localStorage.getItem("keywords")).keywords;
  }
  console.log(JSON.parse(localStorage.getItem("keywords")).keywords);

  return (
    <form
      className={
        lightMode
          ? `${styles.search_form} ${styles.light}`
          : `${styles.search_form} ${styles.dark}`
      }
      onSubmit={handleSubmit}>
      <h1
        className={
          lightMode
            ? `${styles.logo} ${styles.light}`
            : `${styles.logo} ${styles.dark}`
        }>
        <img src='/images/logo.png' alt='youtube logo' />
        <span>Youtube</span>
      </h1>
      <div className={styles.search}>
        <input ref={inputRef} type='text' placeholder='Search' />
        <button className={styles.search_btn}>
          <img src='/images/search.png' alt='search icon' />
        </button>
        <ul className={styles.keywords}>
          {/* {keywords.map(keyword => {
            return <li className={styles.keyword}>{keyword}</li>;
          })} */}
          <li>recent search:</li>
          {keywordsLists.map(keyword => {
            return <li className={styles.keyword}>{keyword}</li>;
          })}
        </ul>
      </div>
      <p
        className={
          lightMode
            ? `${styles.mode} ${styles.light}`
            : `${styles.mode} ${styles.dark}`
        }
        onClick={setToggle}>
        {lightMode ? "Dark Mode" : "Light Mode"}
      </p>
    </form>
  );
});

export default Search_header;
