import { useEffect, useState } from "react";
import "./search.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getForecastData } from "../../data";
import { handle_observe_unit, handle_save_unit } from "../../redux/handlers";
import { cities, ICity } from "../../data/cities";
// import cities from "cities.json";

export default function Search() {
  const [unit, setUnit] = useState<string>("metric");
  const [city, setCity] = useState<ICity | null>({
    label: "Tunis",
    lat: 36.81897,
    lng: 10.16579,
  });

  useEffect(() => {
    handle_save_unit(unit);
    const unsubscribe = handle_observe_unit((newUnit: string) => {
      setUnit(newUnit);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (city) getForecastData(city.lat, city.lng, unit);
  }, [city, unit]);
  const handle_change = (_city: ICity | null) => {
    if (_city) setCity(_city);
  };
  return (
    <Autocomplete
      disablePortal
      id="city_auto_complete"
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        value: ICity | null
      ) => handle_change(value)}
      defaultValue={city}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      className="city_auto_complete"
    />
  );
}
