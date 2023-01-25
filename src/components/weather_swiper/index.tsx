import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./weather_swiper.css";
import no_data_illustration from "../../assets/illustrations/no_data.svg";
import { Navigation } from "swiper";
import WeatherCard from "../weather_card";
import { IWeather, IWeatherItem } from "../../models";
import { handle_observe_forecast } from "../../redux/handlers";
import { extract_data } from "../../utils";
export default function WeatherSwiper() {
  const [weather, setWeather] = useState<IWeather>();
  const [unit, setUnit] = useState("metric");
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    const unsubscribe = handle_observe_forecast((_weather: IWeather, unit) => {
      setWeather(extract_data(_weather));
      setUnit(unit);
      setDataFetched(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const render_cards = () => {
    return weather?.list.map((elem: IWeatherItem) => {
      return (
        <SwiperSlide
          key={elem.dt}
          className="swiper_slide_elem"
          role="swiper_slide_elem"
        >
          <WeatherCard data={elem} unit={unit} />
        </SwiperSlide>
      );
    });
  };

  if (
    dataFetched &&
    (!weather || !Array.isArray(weather?.list) || weather.list?.length === 0)
  )
    return (
      <div className="no_data_container">
        <img
          src={no_data_illustration}
          alt="no data"
          className="no_data_image"
        />
        <h2 className="no_data_title">No Data Found</h2>
      </div>
    );
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={breakpoints}
      className="weatherSwiper"
    >
      {render_cards()}
    </Swiper>
  );
}

const breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};
