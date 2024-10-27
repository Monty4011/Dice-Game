import React from "react";
import { useState } from "react";

const GamePlay = () => {
  const [check, setCheck] = useState(false);
  let [score, setScore] = useState(0);
  const [rules, setrules] = useState("Show Rules");
  const [dice, setdice] = useState("/dice1.png");
  const dices = [
    "",
    "/dice1.png",
    "/dice2.png",
    "/dice3.png",
    "/dice4.png",
    "/dice5.png",
    "/dice6.png",
  ];

  const random = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const changeStyle = () => {
    console.log("test successfull");
  };

  const roll = () => {
    if (selectedNumber) {
      var r = random();
      console.log(r);
      setdice(dices[r]);
      console.log(selectedNumber);
      if (selectedNumber === r) {
        setScore(score + r);
        // console.log("done")
      } else if (selectedNumber != r && selectedNumber > 0) {
        setScore(score - 2);
        // console.log("uff")
      }
    }
    else{
      alert("Select a number first")
    }
    setselectedNumber();
  };

  const show = () => {
    setCheck((prev) => !prev);
    if (check === true) {
      setrules("Show Rules");
    } else if (check === false) {
      setrules("Hide Rules");
    }
  };

  const [selectedNumber, setselectedNumber] = useState();
  const selectNumber = (e) => {
    setselectedNumber(e);
    console.log(e);
    // setScore(e);
  };

  const reset = () => {
    setScore(0);
    setselectedNumber();
  };

  return (
    <>
      <div className="flex mx-32 my-10 justify-between items-center ">
        <div className="score flex flex-col justify-center items-center">
          <div className="font-bold text-8xl">{score}</div>
          <div className="text-2xl font-bold">Total Score</div>
        </div>

        <div className="number flex flex-col items-end gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => {
                selectNumber(1);
              }}
              className={
                selectedNumber === 1
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              1{" "}
            </button>
            <button
              onClick={() => {
                selectNumber(2);
              }}
              className={
                selectedNumber === 2
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              2{" "}
            </button>
            <button
              onClick={() => {
                selectNumber(3);
              }}
              className={
                selectedNumber === 3
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              3{" "}
            </button>
            <button
              onClick={() => {
                selectNumber(4);
              }}
              className={
                selectedNumber === 4
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              4{" "}
            </button>
            <button
              onClick={() => {
                selectNumber(5);
              }}
              className={
                selectedNumber === 5
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              5{" "}
            </button>
            <button
              onClick={() => {
                selectNumber(6);
              }}
              className={
                selectedNumber === 6
                  ? "border border-black p-5 font-bold text-2xl bg-black text-white"
                  : "border border-black p-5 font-bold text-2xl"
              }
            >
              {" "}
              6{" "}
            </button>
          </div>
          <div className="font-bold text-2xl">Select Number</div>
        </div>
      </div>

      <div className=" mt-5 flex flex-col justify-center items-center gap-4">
        <img
          className="w-[125px] h-[125px] rounded-md"
          src={dice}
          alt=""
          onClick={roll}
        />
        <p className="text-2xl font-bold">Click on dice to roll</p>
        <button
          onClick={reset}
          className="font-bold border border-black w-[240px] rounded-md py-1 hover:bg-black hover:text-white"
        >
          Reset Score
        </button>
        <button
          className="font-bold border border-black w-[240px] rounded-md py-1 hover:bg-black hover:text-white"
          onClick={show}
        >
          {rules}
        </button>
      </div>

      {check ? (
        <div className=" mt-5 flex flex-col justify-center  mx-auto gap-4 bg-red-50 w-[794px]  px-4 py-6 ">
          <h1 className="text-2xl font-bold">How to play dice game</h1>
          <div className="flex flex-col gap-1">
            <p className="font-[500] text-xl ">Select any number</p>
            <p className="font-[500] text-xl ">Click on dice image</p>
            <p className="font-[500] text-xl ">
              After click on dice, if selected number is equal to dice number
              you will get same points as dice, else 2 points will be deducted{" "}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default GamePlay;
