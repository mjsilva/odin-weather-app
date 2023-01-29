import { LocationData } from "../types";
import {format} from "date-fns";

const Location = (props: {locationData: LocationData}) => {
  const { locationData } = props;
  
  return (
    <section id="location" className="p-6">
      <h1 className="text-3xl font-bold">{locationData.city}, {locationData.country}</h1>
      <p>{format(new Date(), "iiii, d LLLL")}</p>
    </section>
  );
};

export default Location;
