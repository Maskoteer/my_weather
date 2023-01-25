import React, { useState } from "react";
import { Units } from "../../constants";
import UnitButton from "../unit_button";
import "./unit_select.css";

export default function UnitSelect() {
  const [selectedIndex, setSelectedIndex] = useState<number>(Units.metric);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div className="unit_select">
      <UnitButton
        selected={selectedIndex}
        handleClick={handleSelect}
        index={Units.metric}
        unit={Units.metric}
      />
      <UnitButton
        selected={selectedIndex}
        handleClick={handleSelect}
        index={Units.imperial}
        unit={Units.imperial}
      />
    </div>
  );
}
