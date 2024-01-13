import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";

const Calc = () => {
  const [inputText, setInputText] = useState("");

  function display(value) {
    setInputText(inputText + value);
  }

  function calculate() {
    try {
      const result = math.evaluate(inputText);
      setInputText(result.toString());
    } catch (error) {
      setInputText("Error");
    }
  }

  function clear() {
    setInputText("");
  }
  return (
    <form className="calculator">
      <input type="text" value={inputText} className="value" />
      <span className="num clear" onClick={() => clear()}>
        C
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calc;
