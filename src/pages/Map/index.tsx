import BackButton from "@/components/BackButton";
import React from "react";
import { useNavigate } from "react-router";

const FestivalMap: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">MAP</h1>
      </div>
      <div className="pt-4 w-full h-full">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              window.open("/dronefest-2024/dronefest_map.jpg", "_blank");
            }}
            className="flex flex-col items-end m-2"
            rel="noreferrer"
          >
            <img
              className="border-4 border-black/70 rounded-lg rounded-br-none"
              src="dronefest_map.jpg"
              alt="Directions"
            />
            <span className="text-md uppercase bg-black/70 p-2 rounded-b-lg">
              {" "}
              Tap to enlarge{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestivalMap;
