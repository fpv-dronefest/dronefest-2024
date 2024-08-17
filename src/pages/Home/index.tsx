import { type PropsWithChildren } from "react";
import { useNavigate } from "react-router";

import Hex from "../../assets/hex.svg";

// fancy mobile nav

const w = 50;
const h = w / 1.1547;
const e = h * 0.5;
const s = w * 0.125;
const u = "svw";
const width = `${w}${u}`;
const height = `${h}${u}`;
const extent = `${e}${u}`;
const shift = `${s}${u}`;

function HomeButton({
  url,
  children,
  src,
  imgStyle,
}: PropsWithChildren<{
  url: string;
  src?: string;
  imgStyle?: React.CSSProperties;
}>) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      style={{
        width,
        height,
        clipPath: `polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)`,
      }}
      className={`text-3xl relative hover:invert`}
    >
      <div className={`relative`} style={{ width, height }}>
        {src && (
          <img
            src={src}
            style={{
              width,
              height, // clip the image to the hex shape
              ...imgStyle,
            }}
          />
        )}
        {!src && (
          <div
            className="bg-gradient-to-br from-primary/70 to-secondary/70"
            style={{
              width,
              height, // clip the image to the hex shape
            }}
          />
        )}

        <div
          className="top-0 absolute z-10 flex justify-center items-center font-semibold h-auto"
          style={{ width, height }}
        >
          <span
            className="text-[10svw]"
            style={{ textShadow: "0.8rem 0.8rem 7px #000000" }}
          >
            {children}
          </span>
        </div>
      </div>
    </button>
  );
}

function Home() {
  return (
    <div className="flex-col flex gap-4">
      <div className={`Home flex flex-row w-full mt-12 -ml-5 pt-20`}>
        <div
          className={`flex flex-col relative gap-[5px]`}
          style={{
            width,
            marginTop: `calc(${extent} + 2.5px)`,
            left: `calc(${shift} - 2.5px)`,
          }}
        >
          <HomeButton
            src="/ambulance.png"
            imgStyle={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            url="/festival"
          >
            FESTIVAL
          </HomeButton>
          <HomeButton
            src="/map_thumb.png"
            imgStyle={{ opacity: 0.7 }}
            url="/map"
          >
            MAP
          </HomeButton>
          <HomeButton url="/news">NEWS</HomeButton>
        </div>
        <div
          className={`flex flex-col relative gap-[5px]`}
          style={{ width, right: `calc(${shift} - 2.5px)` }}
        >
          <div
            className="flex flex-col text-3xl relative"
            style={{ width, height, bottom: shift }}
          >
            <img src="/Gemfan-FPVDF-2024-Colour.png" className="relative" />
            <img
              src="/Gemfan-FPVDF-2024-Colour.png"
              className="absolute blur-md hue-rotate-180 brightness-200 mix-blend-plus-lighter scale-150 -z-10"
            />
          </div>
          <HomeButton url="/rules">RULES</HomeButton>
          <HomeButton url="/timeline">TIMELINE</HomeButton>

          <HomeButton src="/prizes_thumb.png" url="/challenges">
            PRIZES
          </HomeButton>
        </div>
      </div>

      <div className="shadow-2xl shadow-primary">
        <a href="/challenges">
          <img src="/fl_banner.jpg" alt="Sponsors" />
        </a>
      </div>
    </div>
  );
}

export default Home;
