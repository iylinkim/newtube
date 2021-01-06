import React from "react";
import Video_item from "../video_item/video_item";
import styles from "./video_list.module.css";

const video_list = ({videos, videoDetail, display}) => {
  const displayType = display ? styles.detail : styles.list;
  console.log("video list");
  return (
    <ul className={`${styles.video_list} ${displayType}`}>
      {/* {videos.map(video => {
        return (
          <Video_item
            key={video.id}
            video={video}
            videoDetail={videoDetail}
            display={display}
          />
        );
      })} */}
    </ul>
  );
};

export default video_list;
