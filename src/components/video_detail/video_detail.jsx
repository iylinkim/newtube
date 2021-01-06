import React from "react";
import styles from "./video_detail.module.css";

const Video_detail = ({video}) => {
  return (
    <div className={styles.detail}>
      <iframe
        type='text/html'
        title={video.snippet.title}
        width='100%'
        height='500'
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder='0'></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default Video_detail;
