import React,{useState} from 'react';
import Form from './Form';
import HistoryList from './HistoryList';
import AddButton from './AddButton';

function FormList(props) {
    const [recordList,setRecordList]=useState([]);
    const [record,setRecord]=useState({});
    const [numOfRecord,setNumOfRecord]=useState(0);

    function addRecord(name,mp=0,mr=0) {
        setRecord(prevState=>{
            return{...prevState,[name]:{paid:parseInt(mp),resp:parseInt(mr)}}
        });
    };

    function addNewRecord(i) {
        if (i===recordList.length) {
            setNumOfRecord(recordList.length+1);
        } else {
            setNumOfRecord(recordList.length);
        }
        let refRecordList=[...recordList];
        refRecordList[i]=record;
        setRecordList(refRecordList);
        setRecord({});
    };

    function onModify(i) {
        setNumOfRecord(i);
        setRecord({...recordList[i]});
    };

    function onResult(e) {
        e.preventDefault();
        var sum=0;
        const obj={};
        const result = (()=> {
            for (let u=0;u<props.list.length;u++) {
                for (let i=0;i<recordList.length;i++) {
                    sum+=recordList[i][props.list[u]].paid-recordList[i][props.list[u]].resp
                }
                obj[props.list[u]]=sum;
                sum=0;
            }
            return obj
        })();
        console.log(result);
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
                list={recordList}
                onModify={onModify}
                selected={numOfRecord}
            />
        </div>
    )
}

export default FormList;