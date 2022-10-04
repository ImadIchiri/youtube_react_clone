import VideoCard from "./VideoCard";
import Videos from "../../../data/Content/videos.json";

function Content() {
  return (
    <div className="content">
      <div className="content_wrapper">
        <div className="test">
          {Videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
        <div className="test">
          {Videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
        <div className="test">
          {Videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
        <div className="test">
          {Videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
