import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./weather_swiper.css";
import no_data_illustration from "../../assets/illustrations/no_data.svg";
import { Navigation } from "swiper";
import WeatherCard from "../weather_card";
import { IWeather, IWeatherItem } from "../../models";
import { handle_observe_forecast } from "../../redux/handlers";
import { extract_data } from "../../utils";
import WeatherCardSkeleton from "../weather_card_skeleton";
export default function WeatherSwiper() {
  const [weather, setWeather] = useState<IWeather>();
  const [unit, setUnit] = useState("metric");
  const [isDataFetched, setIsDataFetched] = useState(false);
  useEffect(() => {
    const unsubscribe = handle_observe_forecast((_weather: IWeather, unit) => {
      setWeather(extract_data(_weather));
      setUnit(unit);
      setIsDataFetched(true);
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
  const render_skeletons = () => {
    return [1, 2, 3].map((elem) => (
      <SwiperSlide
        key={elem}
        className="swiper_slide_elem"
        role="swiper_slide_elem"
      >
        <WeatherCardSkeleton />
      </SwiperSlide>
    ));
  };

  if (
    isDataFetched &&
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
      // slidesPerView={3}
      // spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={breakpoints}
      className="weatherSwiper"
    >
      {isDataFetched ? render_cards() : render_skeletons()}
    </Swiper>
  );
}

const breakpoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  450: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  525: {
    slidesPerView: 1.8,
    spaceBetween: 20,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  680: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },
  850: {
    slidesPerView: 2.5,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};
