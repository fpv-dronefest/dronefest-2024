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
            <div>FPV Dronefest Discord</div>

            <div>FPV Dronefest Facebook</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
