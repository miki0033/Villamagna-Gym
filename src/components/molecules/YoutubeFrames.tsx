const YoutubeFrames = ({ video }: { video: string }) => {
  return (
    <div className="flex w-full h-auto justify-center p-4">
      <iframe
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
            autoplay;
            allowfullscreen; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeFrames;
