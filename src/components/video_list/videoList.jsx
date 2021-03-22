import React from "react";
import VideoItem from "../video_item/videoItem";
import styles from "./video_list.module.css";

const VideoList = ({ videos, videoDetail, display }) => {
  const displayType = display ? styles.detail : styles.list;

  return (
    <ul className={`${styles.video_list} ${displayType}`}>
      {videos &&
        videos.map((video) => {
          return (
            <VideoItem
              key={video.id}
              video={video}
              videoDetail={videoDetail}
              display={display}
            />
          );
        })}
    </ul>
  );
};

export default VideoList;
