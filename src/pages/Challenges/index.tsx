import BackButton from "@/components/BackButton";
import { Modal } from "@/components/Modal";

/*
Best trick (best run)	sunday night	i flight bind and fly, foxeer stack, fly fish flash 2007 1850kv, and some props
best trick (best run) second place	sunday night	goggles L and VTX
emergancy exit	1st 2nd 3rd	 supa fly 60% build, oddity cinewhoop 60% build, fettec stack
bullseye 	closest to target each day	set of fly fish motors swords
vip dizzy loop	1st 2nd 3rd	boxer +2 rx, chesty, steele signed cap
the sniper	1st 2nd 3rd	rush stack + vtx, 1 vtx, set of swords
coventry corkscrew	1st 2nd 3rd	flyfish frame and motors, set of motors (flash), ethix cap
999 loop	1st 2nd 3rd	Freestykle kings merch
double knife edge	1st 2nd 3rd	frame x 60% build, frame x frame, ethix cap
*/

interface Challenge {
  name: string;
  description: string;
  video?: string;
  prizes: string[];
  index: number;
}

const challenges = [
  {
    name: "Best trick (best run) - First Place",
    description: "Winner announced: Sunday night",
    prizes: [
      "iFlight Bind'n'Fly",
      "Foxeer Stack",
      "FlyFish Flash 2007 1850kv",
      "Props",
    ],
  },
  {
    name: "Best trick (best run) - Second Place",
    description: "Winner announced: Sunday night",
    prizes: ["Goggles L and VTX"],
  },
  {
    name: "Holt Way MKII (The Stairmaster)",
    description: "Winner announced: Sunday night",
    video: "holt-way-mk-2.mp4",
    prizes: ["60% Frame X Build", "Foxeer Stack", "Frame X Frame"],
  },
  {
    name: "Emergancy Exit - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    video: "sync.mp4",
    prizes: [
      "SupaFly 60% Build",
      "OddityRC Cinewhoop 60% Build",
      "Fettec Stack",
    ],
  },
  {
    name: "Bullseye - Closest to Target Each Day",
    description: "Winner announced: Sunday night",
    prizes: ["Set of FlyFish Motors"],
  },
  {
    name: "VIP Dizzy Loop - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    video: "dizzy.mp4",
    prizes: ["Boxer +2 RX", "Chesty", "Steele Signed Cap"],
  },
  {
    name: "The Sniper - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    prizes: ["Rush Stack", "VTX", "Set of Motors (FlyFish Swords)"],
  },
  {
    name: "Coventry Corkscrew - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    prizes: [
      "FlyFish Frame and Motors",
      "Set of Motors (FlyFish Flash)",
      "Ethix Cap",
    ],
  },
  {
    name: "999 Loop - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    prizes: ["Freestykle Kings Merch"],
  },
  {
    name: "Double Knife Edge - 1st 2nd 3rd",
    description: "Winner announced: Sunday night",
    prizes: ["Frame X 60% Build", "Frame X Frame", "Ethix Cap"],
  },
];

function ChallengeCard({ name, description, video, prizes, index }: Challenge) {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start m-2 rounded-lg p-4 gap-4 shadow-2xl ${index % 2 === 0 ? "shadow-primary bg-primary/60" : "shadow-secondary bg-secondary/60"}`}
    >
      <h3 className="text-white font-bold text-left w-full drop-shadow-md uppercase">
        {name}
      </h3>
      <p className="text-xl font-semibold">{description}</p>
      <p className="text-xl text-left font-semibold">
        prizes:{" "}
        <p className="text-white capitalize">
          <ul className="list-disc ml-4 font-normal">
            {prizes.map((prize, index) => (
              <li key={index}>{prize}</li>
            ))}
          </ul>
        </p>
      </p>
      {video && (
        <Modal title={name} description={description}>
          <div className="items-center justify-center text-center px-4">
            <video
              className="mx-auto my-0 !h-[80svh] rounded-lg"
              src={video}
              controls
              playsInline
              muted={false}
              autoPlay={true}
              preload="metadata"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

function Challenges() {
  return (
    <div className="relative w-full">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">CHALLENGES AND PRIZES</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <p className="text-xl">
          <h2 className="uppercase font-bold text-2xl">Challenges</h2>
        </p>
        <div className="text-xl flex flex-col gap-2 items-start justify-start w-full">
          <div className="grid grid-cols-1 gap-2 w-full">
            {challenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                index={index}
                name={challenge.name}
                description={challenge.description}
                video={challenge.video}
                prizes={challenge.prizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
