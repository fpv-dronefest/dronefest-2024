import BackButton from "@/components/BackButton";
import Markdown from "react-markdown";

function Rules() {
  return (
    <div className="relative">
      <div className="p-2 top-2 flex justify-between flex-row items-center w-full z-10">
        <BackButton />
        <h1 className="w-full font-bold">RULES AND REGULATIONS</h1>
      </div>

      <div className="p-2 mt-[2.8rem]">
        <div className="p-2 mt-[2.8rem] text-start">
          <h1 className="text-2xl font-bold">RULES AND REGULATIONS</h1>
          <br />
          <Markdown>{`1. **Pre-flight Checks**: Make sure your props are spinning right, the correct model is selected on your radio, and your battery is strapped in securely. This will ensure things run smoothly and everyone’s ready to go!
2. **Aircraft Arming**: Only arm your drone on the flight line and only when you're ready to fly. Let the other pilots around you know when you’re plugging in!
3. **Communication**: Don't leave your fellow pilots in the dark; if you're taking off, landing, or running into issues, let them know.
4. **Controlled Flying**: Keep your flights within your skill level. It’s okay to try new things, but don’t attempt complicated manoeuvres which could put yourself or anyone in danger.
5. **Respect Flight Boundaries**: Stay within designated flight paths. DO NOT fly over spectators or unauthorised areas. This is for the safety of everyone attending.
6. **Emergency Procedures**: If your drone gets a mind of its own, execute your fail-safe immediately and let an organiser know. Someone will go and collect it for you.
7. **Landing and Post-Flight**: After your flight, land in your designated landing spot. Once you touch down, disarm your drone and unplug your battery. Clear the flight line quickly and efficiently to ensure the next pilot waiting gets their turn as soon as possible and that we can get in as many flights as possible each day.
8. **Respect Other Pilots**: Give your fellow pilots their turn and space on the flight line. We're a community, not a competition.
9. **Event Rules**: Follow all event rules while on site. If you disregard the rules, and depending on the severity of your actions, we reserve the right to limit your involvement, or ban you from flying for the day, or even for the remainder of the festival. We will not tolerate actions that risk others’ safety. We care about the FPV community and do not want to see anyone injured or have their time at the festival ruined.
10. **Flight Queue Protocol**: Your transmitter will dictate your position in the queue for flying at your desired flight tent. You are free to wander off and look around while waiting but if you're not back when it's your turn, then you’ll be placed at the end of the queue.
11. **Broken Props and LiPo Disposal**: Prop bins for your broken props and safe LiPo bins for any damaged LiPos will be on the flight lines.
12. **Channel Etiquette**: Please do not channel surf while flightlines are open. There will be designated times for this but during regular flying this is not allowed. Channel surfing can cause serious risks to anyone on site if a pilot loses visibility while in the air and will negatively affect others’ enjoyment of the festival.
13. **Once your VTX power is set, there is no changing this at any time.** If on our tent walks we find your power has been increased, we will ban you from flying for the day.
14. **When in Doubt, Shout Out**: Our organiser team will be located all around the site so if there is anything you’re unsure about or if you see anything you don't like, flag one of us down and we will be happy to help. Remember, there's no such thing as a dumb question, and it is always better to ask than to risk anyone's safety.
15. **Flight areas**: This year we have split the flight zone into blue and green. We will close off each section as and when we need to to collect downed drones. Please listen for and adhere to call outs and listen for which section has been closed off. Failure to do this will result in a warning, you only get one and then next time you’re banned from flying for the day.
* a. When a zone is closed, please stop all manoeuvres and fly high above the site into the open zone (Green or blue).

  &nbsp;  
**And remember, at these events safety is more important than capturing the perfect drone shot. Always consider the wellbeing of yourself and others on the flight line.**`}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default Rules;
