import { IWeather } from "../../models";

interface IAction {
  type: string;
  data?: IWeather;
}
const forecast = (state: any={}, action: IAction) => {
  switch (action.type) {
    case "SAVE_FORECAST":
      return { ...action.data };
    case "REMOVE_FORECAST": {
      return {};
    }
    default:
      return state;
  }
};

export default forecast;
