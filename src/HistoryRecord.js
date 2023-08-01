import React from "react";

function calculatePercentage(paid, resp) {
  return Math.round((resp / paid) * 100);
}

function HistoryRecord(props) {
  let sum = 0;

  // eslint-disable-next-line
  for (const key in props.record) {
    sum += props.record[key].paid ? props.record[key].paid : 0;
  }

  function onClick() {
    props.onModify(props.index);
  }

  function onDelete() {
    props.onDelete(props.index);
  }

  return (
    <div className="record-box ">
      <div
        className={"record " + (props.selected ? "selected" : "")}
        onClick={onClick}
      >
        {props.record.tag && (
          <div className="recordTag">#{props.record.tag}</div>
        )}
        <div className="recordDetail">total : {sum}</div>
        {Object.keys(props.record)
          .filter((key) => key !== "tag")
          .map((user, index) => {
            const resp = props.record[user].resp;
            if (resp > 0) {
              return (
                <div key={index} className="recordDetail">
                  {user} : {resp}
                  <span>({calculatePercentage(sum, resp)}%)</span>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="delete" onClick={onDelete}>
        x
      </div>
    </div>
  );
}

export default HistoryRecord;
