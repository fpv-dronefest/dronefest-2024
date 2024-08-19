import BackButton from "@/components/BackButton";

function Community() {
  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">COMMUNITY</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <div className="p-2 mt-[2.8rem] text-start">
          <div className="grid-cols-2 grid gap-4">
            <a href="https://discord.gg/h8Ga2ypkqp" target="_blank" className="flex flex-col items-center justify-center gap-2">
              <img className="rounded-full bg-white p-4 max-w-[110px]" src="discord.svg" alt="Discord" />
              <span className="rounded-2xl bg-black/70 p-2">FPVDroneFest Discord</span>
            </a>

            <a href="https://www.facebook.com/groups/3612414052324327" target="_blank" className="flex flex-col items-center justify-center gap-2">
              <img className="rounded-full max-w-[110px]" src="facebook.svg" alt="Discord" />
              <span className="rounded-2xl bg-black/70 p-2">FPVDroneFest Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
