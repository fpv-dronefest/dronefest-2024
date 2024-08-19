import BackButton from "@/components/BackButton";

const channels = [
  {
    channel: 1,
    name: "Powerloop",
  },
  {
    channel: 2,
    name: "Trippy Spin",
  },
  {
    channel: 3,
    name: "Matty Flip",
  },
  {
    channel: 4,
    name: "Juicy Flick",
  },
  {
    channel: 5,
    name: "Knife Edge",
  },
];

function Channels() {
  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">CHANNELS</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <div className="p-2 mt-[2.8rem] text-start">
          <h1 className="text-2xl font-bold">
            THE FOLLOWING CHANNELS WILL BE IN USE DURING THE FESTIVAL:
          </h1>
          <br />

          <div className="grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid gap-4">
            {channels.map((channel) => (
              <div key={channel.channel}>
                <img src={`channels/Channel_${channel.channel}.png`} alt={channel.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channels;
