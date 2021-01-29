// import React, {useEffect, useState} from "react";
// import styles from "./app.module.css";
// import VideoList from "./components/video_list/video_list";
// import SearchHeader from "./components/search_header/search_header";
// import Video_detail from "./components/video_detail/video_detail";

// function App({youtube}) {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const search = query => {
//     youtube
//       .search(query) //
//       .then(videos => {
//         setVideos(videos);
//         setSelectedVideo(null);
//       });
//   };

//   const selectVideo = video => {
//     setSelectedVideo(video);
//   };

//   useEffect(() => {
//     youtube
//       .mostPopular() //
//       .then(videos => setVideos(videos));
//   }, []);
//   return (
//     <div className={styles.app}>
//       <SearchHeader onSearch={search} />
//       <div className={styles.video_info}>
//         {selectedVideo && <Video_detail video={selectedVideo} />}
//         <VideoList videos={videos} onSelectedVideo={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Search_header from "./components/search_header/search_header";
import Video_detail from "./components/video_detail/video_detail";
import Video_list from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightMode, setLightMode] = useState(true);
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
    <>
      <Search_header
        search={handleSearch}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <div className={styles.video_container}>
        {selectedVideo && <Video_detail video={selectedVideo} />}
        <Video_list
          videos={videos}
          videoDetail={videoDetail}
          display={selectedVideo}
        />
      </div>
    </>
  );
}

export default App;
