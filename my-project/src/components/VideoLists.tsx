import { Carousel } from "react-responsive-carousel";
import Card from '@mui/material/Card'

const HeroTitleStyles = ""

const HeroVideoCarousel = ({
  videos,
}: {
  videos: Video[];
}): React.JSX.Element => {
  return (
    <div className="w-full">
      <Carousel>
        {videos.map((video) => (
            <Card>
              <h4 className={`${HeroTitleStyles} `}>{video.title}</h4>
            </Card>
        ))}
      </Carousel>
    </div>
  );
};

const VideoVerticalList = ({
  videos,
}: {
  videos: Video[];
  title: string;
}): React.JSX.Element => {
  return <div></div>;
};
const VideoHorizontalList = ({
  videos,
  title,
}: {
  videos: Video[];
  title: string;
}): React.JSX.Element => {
  return <div></div>;
};
