import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { InstagramEmbed } from "react-social-media-embed";

const News: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-2 fixed top-2 flex justify-between flex-row items-center w-full backdrop-blur-sm z-10 gap-2">
        <Button className="absolute" onClick={() => navigate("/")}>
          Back
        </Button>
        <h1 className="w-full font-bold">News</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <InstagramEmbed url="https://instagram.com/fpvdronefest" />
      </div>
    </div>
  );
};

export default News;
