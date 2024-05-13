import TextDiv from "../molecules/TextDiv";
import YoutubeFrames from "../molecules/YoutubeFrames";

const Home = () => {
  return (
    <div id="home" className="flex flex-col pt-4">
      <div>
        <h1 className="font-freeman text-white text-wrap text-4xl font-extrabold">
          Start Work Out & Be Healthy
        </h1>
        <YoutubeFrames video={"https://www.youtube.com/embed/CxgX7VAlOk0"} />
        <TextDiv></TextDiv>
      </div>
    </div>
  );
};

export default Home;
