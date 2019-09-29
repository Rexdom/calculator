import React,{useState} from 'react';
import Form from './Form';
import HistoryList from './HistoryList';
import AddButton from './AddButton';

function FormList(props) {
    const [record,setRecord]=useState({});
    const [numOfRecord,setNumOfRecord]=useState(props.recordList.length);

    function addRecord(name,mp,mr) {
        setRecord(prevState=>{
            return{...prevState,[name]:{paid:mp,resp:mr}}
        });
    };

    function addNewRecord(i) {
        if (i===props.recordList.length) {
            setNumOfRecord(props.recordList.length+1);
        } else {
            setNumOfRecord(props.recordList.length);
        }
        let refRecordList=[...props.recordList];
        refRecordList[i]=record;
        Object.keys(record).forEach((user)=>{
            if (isNaN(record[user].paid)) {
                refRecordList[i][user].paid=0;
            } else refRecordList[i][user].paid = parseInt(record[user].paid);
            if (isNaN(record[user].resp)) {
                refRecordList[i][user].resp=0;
            } else refRecordList[i][user].resp = parseInt(record[user].resp);
        })
        props.setRecordList(refRecordList);
        setRecord({});
    };

    function onModify(i) {
        setNumOfRecord(i);
        setRecord({...props.recordList[i]});
    };

    function onDelete(i) {
        setNumOfRecord(props.recordList.length-1);
        props.setRecordList(props.recordList.filter(function(r,index){
            return index !== i 
        }));
        setRecord({});
    };

    function onResult(e) {
        e.preventDefault();
        var sum=0;
        const obj={};
        const result = (()=> {
            for (let u=0;u<props.list.length;u++) {
                for (let i=0;i<props.recordList.length;i++) {
                    let paid = props.recordList[i][props.list[u]]?props.recordList[i][props.list[u]].paid:0;
                    let resp = props.recordList[i][props.list[u]]?props.recordList[i][props.list[u]].resp:0;
                    sum+=paid-resp;
                }
                obj[props.list[u]]=sum;
                sum=0;
            }
            return obj
        })();
        props.onResult(result);
    };

    return(
        <div className="content">
            <form onSubmit={onResult}>
                <ul className="Form">
                    <li id="title">
                        <p>Name</p>
                        <p>Money Paid</p>
                        <p>Money Responsible</p>
                    </li>
                    {props.list.map(user=>
                        <Form
                            key={user}
                            user={user}
                            addRecord={addRecord}
                            moneyPaid={record[user]?record[user].paid:0}
                            moneyResp={record[user]?record[user].resp:0}
                        />
                    )}
                </ul>
                <AddButton 
                    listIndex={numOfRecord} 
                    addNewRecord={addNewRecord}
                />
                <button>Result</button>
            </form>
            <HistoryList 
                list={props.recordList}
                onModify={onModify}
                onDelete={onDelete}
                selected={numOfRecord}
            />
        </div>
    )
}

export default FormList;