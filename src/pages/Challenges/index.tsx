import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Challenges() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <Button className="absolute" onClick={() => navigate("/")}>
          Back
        </Button>
        <h1 className="w-full font-bold">CHALLENGES AND PRIZES</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <p className="text-xl">
          <h2 className="uppercase font-bold text-2xl">Challenges</h2>
        </p>
        <p className="text-xl flex flex-col gap-2 items-start justify-start">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-start m-2 bg-primary/60 rounded-lg p-4 gap-4 shadow-2xl shadow-primary">
              <h3 className="text-white font-bold text-left w-full drop-shadow-md uppercase">
                Holt Way MKII (The Stairmaster)
              </h3>
              <p className="text-xl font-semibold">
                winner announced:{" "}
                <span className="text-white font-normal"> sunday night </span>
              </p>
              <p className="text-xl text-left font-semibold">
                prizes:{" "}
                <p className="text-white capitalize">
                  <ul className="list-disc ml-4 font-normal">
                    <li>iFlight Bind'n'Fly</li>
                    <li>Foxeer Stack</li>
                    <li>Fly Fish Flash 2007 1850kv Motors</li>
                    <li>Props</li>
                  </ul>
                </p>
              </p>
              <video
                className="w-full"
                src="holt-way-mk-2.mp4"
                controls
                playsInline
                muted={false}
                autoPlay={false}
                preload="metadata"
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Challenges;
