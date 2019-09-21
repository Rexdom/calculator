import React,{useState} from 'react';
import Form from './Form';

function FormList(props) {
    const [recordList,setRecordList]=useState([]);
    const [record,setRecord]=useState({});
    
    function addRecord(name,mp,mr) {
        setRecord(prevState=>{
            return{...prevState,[name]:{paid:mp,resp:mr}}
        });
    };

    function addNewRecord() {
        setRecordList(prevState=>{
            return[...prevState,record]
        });
    };

    function onSubmit(e) {
        e.preventDefault();
    };

    return(
        <form onSubmit={onSubmit}>
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
                    />
                )}
            </ul>
            <input type="button" value="Add" onClick={addNewRecord}/>
            <button>Result</button>
        </form>
    )
}

export default FormList;