import BackButton from "@/components/BackButton";

const sponsors = [
  { name: "Enola Gaye", src: "enola-gaye.png", invert: true },
  { name: "ethix", src: "ethix.png" },
  { name: "Hobby RC", src: "hobbyrc.png" },
  { name: "Supafly", src: "supafly.png" },
  { name: "FlyHighFPV", src: "flyhighfpv.webp" },
  { name: "Fettec", src: "fettec.jpg" },
  { name: "FlyFishFPV", src: "flyfishfpv.webp" },
  { name: "Gemfan", src: "gemfan.jpg" },
  { name: "TRYP FPV", src: "trypfpv.png" },
  { name: "Torvol", src: "torvol.jpg" },
  { name: "BetaFPV", src: "betafpv.webp" },
  { name: "T-Motor", src: "t-motor.png" },
  { name: "Foxeer", src: "foxeer.png" },
  { name: "iFlight RC", src: "iflight.png" },
  { name: "Tattu", src: "tattu.png" },
  { name: "Rush", src: "rushfpv.png" },
  { name: "Radiomaster", src: "radiomaster.avif" },
  { name: "TBS", src: "tbs.svg" },
  { name: "Caddx", src: "caddx.avif", invert: true },
  { name: "Camera Centre UK", src: "cameracentreuk.png" },
  { name: "Comp City Giveaways", src: "compcitygiveaways.webp", invert: true },
  { name: "FPVFreestyleKings", src: "fpvfreestylekings.avif" },
  { name: "OddityRC", src: "oddityrc.webp" },
];

function Sponsors() {
  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">SPONSORS</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <div className="p-2 mt-[2.8rem] text-start">
          <h1 className="text-2xl font-bold">
            FPV DRONEFEST 2024 WOULD LIKE TO THANK OUR WONDERFUL SPONSORS:
          </h1>
          <br />

          <div className="grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 grid gap-4">
            {sponsors.map(({ name, src, invert }) => (
              <div
                key={name}
                className={`p-2 rounded-xl flex flex-col items-center justify-center ${invert ? "bg-black" : "bg-white"}`}
              >
                {src && (
                  <img src={`/dronefest-2024/sponsors/${src}`} alt={name} />
                )}
                {!src && <span>{name}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
