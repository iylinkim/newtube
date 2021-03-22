import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({video}) => {
  return (
    <div className={styles.detail}>
      <iframe
        type='text/html'
        title={video.snippet.title}
        width='100%'
        height='500'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'></iframe>
      <h2 className={styles.title}>{video.snippet.title}</h2>
      <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
      <p className={styles.description}>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
