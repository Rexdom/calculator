import React from "react";
import { getMoneyRemain } from "./helpers/getMoneyRemain";

function RemainAmountSection(props) {
  const { record, onSplitClick } = props;
  const remainAmount = getMoneyRemain(record);

  if (!isNaN(remainAmount)) {
    return (
      <div className="remainAmountSection">
        <div className="remainAmount">Remain: {remainAmount}</div>
        {remainAmount > 0 && (
          <button type="button" className="button" onClick={onSplitClick}>
            Split
          </button>
        )}
      </div>
    );
  }
  return null;
}

export default RemainAmountSection;
