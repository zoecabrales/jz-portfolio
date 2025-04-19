import React from "react";
import YouTube from "react-youtube";
import "./YouTubeSectionStyles.css";
import "../common/SectionHeadingStyles.css";

const YouTubeSection = () => {
  const videoOptions = {
    height: "640",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-section" data-aos="fade-up">
      <div className="video-container">
        <h2 className="section-heading">Check Out My YouTube Channel!</h2>
        <YouTube videoId="QSURtD1gro8" opts={videoOptions} />
      </div>
    </div>
  );
};

export default YouTubeSection;
