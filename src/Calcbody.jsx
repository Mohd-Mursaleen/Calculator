import Display from "./Display";
import Buttons from "./Buttons";
import "./Calcbody.css";
import { useState } from "react";
function Calcbody() {
  let [input, setInput] = useState("");
  let onButtonClick = (event) => {
    if (event.target.innerText === "C") {
      setInput("");
    } else if (event.target.innerText === "=") {
      let result = eval(input);
      setInput(result);
    } else {
      console.log(event.target.innerText);
      let value = input + event.target.innerText;
      setInput(value);
    }
  };
  let handleOnChange = () => {
    console.log("worked");
  };

  return (
    <div className="mainBody">
      <Display change={input} />
      <h2 style={{ color: "wheat" }}>CASIO</h2>
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}
export default Calcbody;
