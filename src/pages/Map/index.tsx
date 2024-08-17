import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/ui/button";

const FestivalMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <Button
          className="absolute"
          onClick={() =>
            navigate("/", {
              preventScrollReset: false,
            })
          }
        >
          Back
        </Button>
        <h1 className="w-full font-bold">MAP</h1>
      </div>
      <div className="pt-4 w-full h-full">
        <div className="flex flex-col gap-4">
          <a
            href="/dronefest_map.jpg"
            className="flex flex-col items-end m-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="border-4 border-black/70 rounded-lg rounded-br-none"
              src="/dronefest_map.jpg"
              alt="Directions"
            />
            <span className="text-md uppercase bg-black/70 p-2 rounded-b-lg">
              {" "}
              Tap to enlarge{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FestivalMap;
