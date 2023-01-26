import React from "react";
import { units, Units, unit_names } from "../../constants";
import { handle_save_unit } from "../../redux/handlers";
import "./unit_button.css";

interface IProps {
  index: number;
  selected: number;
  unit: Units;
  handleClick: (index: number) => void;
}
export default function UnitButton({
  index,
  selected,
  unit,
  handleClick,
}: IProps) {
  const handle_select = () => {
    handleClick(index);
    handle_save_unit(units[unit]);
  };
  return (
    <button
      className={`unit_button ${selected === index ? "selected" : ""}`}
      onClick={() => handle_select()}
      role="unit_button"
    >
      {unit_names[unit]}
    </button>
  );
}
