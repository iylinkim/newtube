import ToggleBtn from "components/toggleBtn/toggleBtn";
import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Search_header from "./components/search_header/search_header";
import Video_detail from "./components/video_detail/video_detail";
import Video_list from "./components/video_list/video_list";

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
      <Search_header
        search={handleSearch}
        darkMode={darkMode}
        setSelectedVideo={setSelectedVideo}
      />
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={styles.video_container}>
        {selectedVideo && <Video_detail video={selectedVideo} />}
        <Video_list
          videos={videos}
          videoDetail={videoDetail}
          display={selectedVideo}
        />
      </div>
    </div>
  );
}

export default App;
