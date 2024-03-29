import React from "react";

function Form(props) {
  return (
    <li>
      <p>{props.user}</p>
      <input
        type="number"
        step={0.01}
        value={props.moneyPaid}
        onChange={(e) =>
          props.addRecord(props.user, e.target.value, props.moneyResp)
        }
      />
      <input
        type="number"
        step={0.01}
        value={props.moneyResp}
        onChange={(e) =>
          props.addRecord(props.user, props.moneyPaid, e.target.value)
        }
      />
    </li>
  );
}

export default Form;
