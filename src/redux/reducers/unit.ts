interface IAction {
  type: string;
  data?: string;
}
const unit = (state: any = "metric", action: IAction) => {
  switch (action.type) {
    case "SAVE_UNIT":
      return action.data;
    case "REMOVE_UNIT": {
      return {};
    }
    default:
      return state;
  }
};

export default unit;
