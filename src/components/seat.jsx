import React from "react";

function Seat({ ghe, isSelecting, isSelected, onSelect, disabled }) {
  let className = "ghe";
  if (ghe.daDat) className += " gheDuocChon";
  else if (isSelected) className += " gheDangChon";

  return (
    <button
      className={className}
      disabled={ghe.daDat || disabled}
      onClick={() => onSelect(ghe)}
      style={{ cursor: ghe.daDat || disabled ? "not-allowed" : "pointer" }}
    >
      {ghe.soGhe}
    </button>
  );
}

export default Seat;