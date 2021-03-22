import ToggleBtn from "components/toggleBtn/toggleBtn";
import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/searchHeader";
import VideoDetail from "./components/video_detail/videoDetail";
import VideoList from "./components/video_list/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const handleSearch = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  const videoDetail = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={darkMode ? `${styles.wrap} ${styles.dark}` : styles.wrap}>
      <SearchHeader
        search={handleSearch}
        darkMode={darkMode}
        setSelectedVideo={setSelectedVideo}
      />
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={styles.video_container}>
        {selectedVideo && <VideoDetail video={selectedVideo} />}
        <VideoList
          videos={videos}
          videoDetail={videoDetail}
          display={selectedVideo}
        />
      </div>
    </div>
  );
}

export default App;
