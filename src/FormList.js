import React, { useState } from "react";
import Form from "./Form";
import HistoryList from "./HistoryList";
import RemainAmountSection from "./RemainAmountSection";
import Error from "./Error";
import AddButton from "./AddButton";
import UserSplitSelect from "./UserSplitSelect";

import { getMoneyRemain } from "./helpers/getMoneyRemain";

function FormList(props) {
  const [isSplitting, setIsSplitting] = useState(false);
  const [record, setRecord] = useState({});
  const [tag, setTag] = useState("");
  const [numOfRecord, setNumOfRecord] = useState(props.recordList.length);

  function addRecord(name, mp, mr) {
    setRecord((prevState) => {
      return { ...prevState, [name]: { paid: mp, resp: mr } };
    });
  }

  function addNewRecord(i) {
    let paidSum = 0;
    let respSum = 0;
    Object.keys(record).forEach((user) => {
      if (user !== "tag") {
        paidSum += Number(record[user].paid);
        respSum += Number(record[user].resp);
      }
    });
    if (isNaN(paidSum) || isNaN(respSum)) {
      props.setError("empty");
    } else if (paidSum !== respSum) {
      props.setError("unequal");
    } else {
      if (i === props.recordList.length) {
        setNumOfRecord(props.recordList.length + 1);
      } else {
        setNumOfRecord(props.recordList.length);
      }
      let refRecordList = [...props.recordList];
      record.tag = tag;
      refRecordList[i] = record;
      Object.keys(record).forEach((user) => {
        if (user !== "tag") {
          refRecordList[i][user].paid = Number(record[user].paid);
          refRecordList[i][user].resp = Number(record[user].resp);
        }
      });
      props.setRecordList(refRecordList);
      setRecord({});
      setTag("");
      props.setError(false);
    }
  }

  function onModify(i) {
    setNumOfRecord(i);
    setRecord({ ...props.recordList[i] });
    setTag(props.recordList[i].tag);
  }

  function onDelete(i) {
    setNumOfRecord(props.recordList.length - 1);
    props.setRecordList(
      props.recordList.filter(function (r, index) {
        return index !== i;
      })
    );
    setRecord({});
    setTag("");
  }

  function onResult(e) {
    var sum = 0;
    const obj = {};
    const result = (() => {
      for (let u = 0; u < props.list.length; u++) {
        for (let i = 0; i < props.recordList.length; i++) {
          let paid = props.recordList[i][props.list[u]]
            ? props.recordList[i][props.list[u]].paid
            : 0;
          let resp = props.recordList[i][props.list[u]]
            ? props.recordList[i][props.list[u]].resp
            : 0;
          sum += paid - resp;
        }
        obj[props.list[u]] = sum;
        sum = 0;
      }
      return obj;
    })();
    props.onResult(result);
  }

  function onSplitClick() {
    setIsSplitting(true);
  }

  function onFinishSplit(selectedUserList) {
    const numSelectedUser = selectedUserList.length;
    const remainAmount = getMoneyRemain(record);
    const moneyResponsible =
      Math.round((remainAmount / numSelectedUser) * 100) / 100;
    setRecord((prev) => {
      selectedUserList.forEach((user) => {
        const hasUserRecord = prev[user];
        prev[user] = {
          paid: hasUserRecord ? prev[user].paid : 0,
          resp: hasUserRecord
            ? prev[user].resp + moneyResponsible
            : moneyResponsible,
        };
      });

      return { ...prev };
    });
    setIsSplitting(false);
  }

  if (isSplitting) {
    return (
      <UserSplitSelect userList={props.list} finishSplit={onFinishSplit} />
    );
  }
  return (
    <div className="content">
      <form className="Form">
        <ul>
          <li id="title">
            <p>Name</p>
            <p>Money Paid</p>
            <p>Money Responsible</p>
          </li>
          {props.list.map((user) => (
            <Form
              key={user}
              user={user}
              addRecord={addRecord}
              moneyPaid={record[user] ? record[user].paid : 0}
              moneyResp={record[user] ? record[user].resp : 0}
            />
          ))}
        </ul>
        <Error error={props.error} />

        <RemainAmountSection record={record} onSplitClick={onSplitClick} />
        <div className="tag">
          <input
            className="tags"
            type="text"
            placeholder="tags(e.g lunch)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <AddButton
            listIndex={numOfRecord}
            totalIndex={props.recordList.length}
            addNewRecord={addNewRecord}
          />
        </div>
        <div className="submitButton" onClick={onResult}>
          Result
        </div>
      </form>
      <HistoryList
        list={props.recordList}
        onModify={onModify}
        onDelete={onDelete}
        selected={numOfRecord}
      />
    </div>
  );
}

export default FormList;
