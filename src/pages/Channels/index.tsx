import BackButton from "@/components/BackButton";

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

          <div className="grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 grid gap-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Channels;
