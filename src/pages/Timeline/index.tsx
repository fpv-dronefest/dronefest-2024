import { Button } from "@/components/ui/button";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";

interface TimelineProps {
  title: string;
  description: string;
  time: string;
}

const timelineList = [
  {
    day: "Thursday",
    date: "22/08/2024",
    events: [
      {
        title: "FAILSAFE CHECK",
        description: "Flight tests, Registration, and Check-in.",
        time: "18:00 Onwards",
      },
      {
        title: "Free Flights",
        description: "",
        time: "09:45 - 12:30",
      },
      {
        title: "Channel Swap + 2nd Failsafe Checks",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Lunch Break",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Free Flights",
        description: "",
        time: "13:00 - ~18:00",
      },
      {
        title: "Flight Lines Close",
        description: "",
        time: "~18:00",
      },
      {
        title: "Evening Activities",
        description: "",
        time: "~19:00",
      },
    ],
  },
  {
    day: "Friday",
    date: "23/08/2024",
    events: [
      {
        title: "FAILSAFE CHECK",
        description: "Flight tests, Registration, and Check-in.",
        time: "08:00 - 09:15",
      },
      {
        title: "Channel Designation",
        description: "",
        time: "09:30 - 09:45",
      },
      {
        title: "Free Flights",
        description: "",
        time: "09:45 - 12:30",
      },
      {
        title: "Channel Swap + 2nd Failsafe Checks",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Lunch Break",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Free Flights",
        description: "",
        time: "13:00 - ~18:00",
      },
      {
        title: "Flight Lines Close",
        description: "",
        time: "~18:00",
      },
      {
        title: "Evening Activities",
        description: "",
        time: "~19:00",
      },
    ],
  },
  {
    day: "Saturday",
    date: "24/08/2024",
    events: [
      {
        title: "FAILSAFE CHECK",
        description: "Flight tests, Registration, and Check-in.",
        time: "08:00 - 09:15",
      },
      {
        title: "Channel Designation",
        description: "",
        time: "09:30 - 09:45",
      },
      {
        title: "Free Flights",
        description: "",
        time: "09:45 - 12:30",
      },
      {
        title: "Channel Swap + 2nd Failsafe Checks",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Lunch Break",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Go Nuts Goggle Run",
        description: "",
        time: "13:00",
      },
      {
        title: "Free Flights",
        description: "",
        time: "13:30 - ~18:00",
      },
      {
        title: "Flight Lines Close",
        description: "",
        time: "~18:00",
      },
      {
        title: "Giveaways",
        description: "",
        time: "~19:00",
      },
      {
        title: "Evening Activities",
        description: "",
        time: "~19:30",
      },
    ],
  },
  {
    day: "Sunday",
    date: "25/08/2024",
    events: [
      {
        title: "FAILSAFE CHECK",
        description: "Flight tests, Registration, and Check-in.",
        time: "08:00 - 09:15",
      },
      {
        title: "Channel Designation",
        description: "",
        time: "09:30 - 09:45",
      },
      {
        title: "Free Flights",
        description: "",
        time: "09:45 - 12:30",
      },
      {
        title: "Channel Swap + 2nd Failsafe Checks",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Lunch Break",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Free Flights",
        description: "",
        time: "13:00 - ~18:00",
      },
      {
        title: "Flight Lines Close",
        description: "",
        time: "~18:00",
      },
      {
        title: "Evening Activities",
        description: "",
        time: "~19:00",
      },
    ],
  },
  {
    day: "Monday",
    date: "26/08/2024",
    events: [
      {
        title: "FAILSAFE CHECK",
        description: "Flight tests, Registration, and Check-in.",
        time: "08:00 - 09:15",
      },
      {
        title: "Channel Designation",
        description: "",
        time: "09:30 - 09:45",
      },
      {
        title: "Free Flights",
        description: "",
        time: "09:45 - 12:30",
      },
      {
        title: "Channel Swap + 2nd Failsafe Checks",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Lunch Break",
        description: "",
        time: "12:30 - 13:00",
      },
      {
        title: "Go Nuts Goggle Run",
        description: "",
        time: "13:00",
      },
      {
        title: "Free Flights",
        description: "",
        time: "13:30 - ~18:00",
      },
      {
        title: "Flight Lines Close",
        description: "",
        time: "~18:00",
      },
      {
        title: "Giveaways",
        description: "",
        time: "~19:00",
      },
      {
        title: "GO HOME",
        description: "",
        time: "~19:30",
      },
    ],
  },
];

function RightTimeline({ title, description, time }: TimelineProps) {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-5 col-end-6 md:mx-auto"></div>
      <div className="relative p-4 my-6 text-gray-800 bg-white col-start-6 col-end-10 mr-auto w-full h-[120px]">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="mt-2 leading-6">{description}</p>
        <span className="absolute font-bold text-lg text-indigo-200 -top-6 left-2 whitespace-nowrap">
          {time}
        </span>
      </div>
    </div>
  );
}

function LeftTimeline({ title, description, time }: TimelineProps) {
  return (
    <div className="flex md:contents flex-row-reverse">
      <div className="relative p-4 my-6 text-gray-800 bg-white w-full h-[120px] col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="mt-2 leading-6">{description}</p>
        <span className="absolute font-bold text-lg text-indigo-200 -top-6 left-2 whitespace-nowrap">
          {time}
        </span>
      </div>
      <div className="relative col-start-5 col-end-6 md:mx-auto"></div>
    </div>
  );
}

interface TimelineDayEvent {
  day: string;
  date: string;
  events: TimelineProps[];
}

interface TimelineDayProps extends TimelineDayEvent {
  index: number;
  start: "left" | "right";
}

function TimelineDay({ day, date, events, index, start }: TimelineDayProps) {
  return (
    <div className="p-2 mt-[2.8rem]">
      <div className="p-4">
        <h2 className="text-center text-white font-bold mb-5 bg-primary bg-opacity-50 w-full h-[120px] flex items-center justify-center text-4xl">
          DAY {index === 0 && "ZERO"}
          {index === 1 && "ONE"}
          {index === 2 && "TWO"}
          {index === 3 && "THREE"}
          {index === 4 && "FOUR"} - {day} - {date}
        </h2>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          {events.map((event, index) =>
            start === "left" ? (
              index % 2 === 0
            ) : index % 2 === 1 ? (
              <LeftTimeline key={index} {...event} />
            ) : (
              <RightTimeline key={index} {...event} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const navigate = useNavigate();

  const [showToday, setShowToday] = useState(false);

  const filterToday = useCallback(
    (day: TimelineDayEvent) => {
      // convert current date to a string which matches the uk date format in the data

      const today = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });

      if (showToday) {
        return today === day.date;
      } else {
        return true;
      }
    },
    [showToday],
  );

  const empty = useMemo(() => {
    return timelineList.filter(filterToday).length === 0;
  }, [filterToday]);

  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <Button className="absolute" onClick={() => navigate("/")}>
          Back
        </Button>
        <h1 className="w-full font-bold">TIMELINE</h1>
      </div>
      <div className="p-2 mt-[2.8rem] bg-purple-800 bg-opacity-25 rounded-xl">
        <Button
          className="m-6 p-6 text-2xl"
          type="button"
          size="lg"
          onClick={() => setShowToday(!showToday)}
        >
          {showToday ? "Show All" : "Show Today"}
        </Button>
        {empty && (
          <div className="text-center text-white p-2 min-h-[calc(100svh-280px)] flex items-center justify-center text-4xl">
            No events today - please check back during the festival!
          </div>
        )}
        {timelineList.filter(filterToday).map((day, index) => (
          <div key={`${day.date}-${index}`}>
            <TimelineDay index={index} start={"right"} {...day} />
            {index !== 4 && <hr className="border-primary border-2 w-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
