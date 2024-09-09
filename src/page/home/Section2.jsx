import { DefaultPlayer as Video } from "react-html5video";
import { Cover, VideoPlayer } from "../../source/import/import";
import "react-html5video/dist/styles.css";

function Section2() {
  return (
    <>
      <div className="container">
        <div className="section2">
          <Video
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            poster={Cover}
          >
            <source src={VideoPlayer} type="video/webm" />
          </Video>
        </div>
      </div>
    </>
  );
}

export default Section2;
