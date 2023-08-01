import React from "react";

function Result(props) {
  return (
    <>
      <ul className="result">
        {Object.keys(props.result).map((user) => (
          <li key={user}>
            {user} should {props.result[user] > 0 ? "take" : "pay"}{" "}
            {Math.round(Math.abs(props.result[user]) * 100) / 100} dollars
          </li>
        ))}
      </ul>
      <button onClick={props.onBack}>Back</button>
    </>
  );
}

export default Result;
