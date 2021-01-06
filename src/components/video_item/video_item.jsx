import React, {memo} from "react";
import styles from "./video_item.module.css";

const Video_item = memo(({video: {snippet}, videoDetail, display, video}) => {
  const handleDetail = () => {
    videoDetail(video);
  };

  const displayType = display ? styles.list : styles.grid;
  
  return (
    <li
      className={`${styles.video_item} ${displayType}`}
      onClick={handleDetail}>
      <p className={styles.video_img}>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      </p>
      <div className={styles.video_text}>
        <h2 className={styles.video_title}>{snippet.title}</h2>
        {/* <p className={styles.video_info}>
          {snippet.description.slice(0, 50)}...
        </p> */}
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
});

export default Video_item;
