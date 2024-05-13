import React from "react";

const YoutubeFrames = ({ video }: { video: string }) => {
  return (
    <div className="w-full h-auto p-4">
      <iframe
        width="100%"
        height="300"
        src={video}
        title="YouTube video player"
        allow="accelerometer; 
            autoplay;
            allowfullscreen; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
      ></iframe>
    </div>
  );
};

export default YoutubeFrames;
