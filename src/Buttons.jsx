import React from "react";
import "./Buttons.css";

function Buttons({ onButtonClick }) {
  const buttons = [
    { text: "1", color: "#505050" },
    { text: "2", color: "#505050" },
    { text: "3", color: "#505050" },
    { text: "C", color: "red" },

    { text: "4", color: "#505050" },
    { text: "5", color: "#505050" },
    { text: "6", color: "#505050" },
    { text: "+", color: "#FF9500" },

    { text: "7", color: "#505050" },
    { text: "8", color: "#505050" },
    { text: "9", color: "#505050" },
    { text: "-", color: "#FF9500" },
    { text: "0", color: "#505050" },
    { text: "*", color: "#FF9500" },
    { text: "/", color: "#FF9500" },

    { text: "=", color: "#FF9500" },
  ];

  return (
    <div className="btn">
      {buttons.map((btn, index) => (
        <button
          key={index}
          style={{ backgroundColor: btn.color }}
          onClick={onButtonClick}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
