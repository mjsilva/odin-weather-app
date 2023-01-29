import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

const CurrentWeather = () => {
  return (
    <section id="current-weather" className="flex p-6 justify-start flex-wrap">
      <div className="flex">
        <IconContext.Provider value={{ className: "text-[10rem]" }}>
          <WiDaySunny />
        </IconContext.Provider>
        <div className="flex flex-col p-4">
          <div className="text-8xl">21°</div>
          <div className="">Sunny</div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-5">
        <div>
          <div className="text-3xl font-medium">23°</div>
          <div>High</div>
        </div>
        <div>
          <div className="text-3xl font-medium">7mph</div>
          <div>Wind</div>
        </div>
        <div>
          <div className="text-3xl font-medium">05:27</div>
          <div>Sunrise</div>
        </div>
        <div>
          <div className="text-3xl font-medium">14°</div>
          <div>Low</div>
        </div>
        <div>
          <div className="text-3xl font-medium">0%</div>
          <div>Rain</div>
        </div>
        <div>
          <div className="text-3xl font-medium">20:57</div>
          <div>Sunset</div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
