import Contacts from "../molecules/Contacts";
import TextDiv from "../molecules/TextDiv";
import YoutubeFrames from "../molecules/YoutubeFrames";
import { Link } from "react-router-dom";

const Home = () => {
  const text1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum inmodi, explicabo incidunt quaerat numquam reprehenderit repudiandae quo esse voluptatibus molestias iusto? Alias aperiam, maiores optio suscipit obcaecati animi.";
  const text2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum in modi, explicabo incidunt quaerat numquam reprehenderit repudiandae quo esse voluptatibus molestias iusto? Alias aperiam, maiores optio suscipit obcaecati animi.";

  return (
    <div id="home" className="flex flex-col  items-center pt-4">
      <h1 className="font-freeman m-4  text-white text-wrap text-4xl font-extrabold">
        Start Work Out & Be Healthy
      </h1>
      <div className="flex flex-col max-w-4/5 m-4 font-freeman text-white text-xl justify-center ">
        <p className="mb-4 px-4 py-1 border border-white">
          Body positivity is the way you keep youself healthy.
        </p>

        <div className="flex w-4/5 items-start ">
          <Link
            to={"./data"}
            className="btn font-freeman px-4 py-1 text-lg border border-white"
          >
            Join Us
          </Link>
        </div>
      </div>
      <YoutubeFrames video={"https://www.youtube.com/embed/CxgX7VAlOk0"} />
      <TextDiv text={text1}></TextDiv>
      <YoutubeFrames
        video={"https://www.youtube.com/embed/CxgX7VAlOk0"}
      ></YoutubeFrames>
      <TextDiv text={text2}></TextDiv>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
