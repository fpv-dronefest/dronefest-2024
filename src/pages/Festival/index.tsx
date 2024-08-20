import BackButton from "@/components/BackButton";
import { useNavigate } from "react-router";

function Festival() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">FESTIVAL INFO</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <p className="text-xl">
          <h2 className="uppercase font-bold text-2xl">Getting Here</h2>
        </p>
        <p className="text-xl flex flex-col gap-2">
          <a
            className="flex flex-col items-end m-2"
            href="https://maps.apple.com/?address=Brinklow%20Road,%20Ansty,%20Coventry,%20CV7%209JN,%20England&auid=17370960260931536522&ll=52.440491,-1.383512&lsp=9902&q=Mobbswood%20Farm"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="border-4 border-black/70 rounded-lg rounded-br-none"
              src="map_pic.png"
              alt="Click to view Map"
            />
            <span className="text-md uppercase bg-black/70 p-2 rounded-b-lg">
              {" "}
              Mobbswood Farm, Brinklow Rd, Ansty, Coventry CV7 9JN{" "}
            </span>
          </a>
          <h2 className="uppercase">Getting to the camping area</h2>
          <button
            onClick={() => {
              navigate("directions.png");
            }}
            className="flex flex-col items-end m-2"
            rel="noreferrer"
          >
            <img
              className="border-4 border-black/70 rounded-lg rounded-br-none"
              src="directions.png"
              alt="Directions"
            />
            <span className="text-md uppercase bg-black/70 p-2 rounded-b-lg">
              {" "}
              Tap to enlarge{" "}
            </span>
          </button>
          <div className="flex flex-col items-end m-2">
            <video
              className="border-4 border-black/70 rounded-lg rounded-br-none"
              src="directions.mp4"
              controls
              playsInline
              muted={false}
              autoPlay={false}
              preload="metadata"
            ></video>
            <span className="text-md uppercase bg-black/70 p-2 rounded-b-lg">
              <a
                href="https://www.instagram.com/p/C9-XXdbIIA6/"
                target="_blank"
                rel="noreferrer"
              >
                Tap to play video{" "}
              </a>
            </span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Festival;
