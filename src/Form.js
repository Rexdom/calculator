import React,{useEffect} from 'react';

function Form(props) {
    useEffect(()=>{
        props.addRecord(props.user,props.moneyPaid,props.moneyResp)
    },[]);

    return(
    <li>
        <p>{props.user}</p>
        <input 
            type="number"
            value={props.moneyPaid}
            onChange={e=>props.addRecord(props.user,e.target.value,props.moneyResp)}
            placeholder="Money Paid" 
        />
        <input 
            type="number" 
            value={props.moneyResp}
            onChange={e=>props.addRecord(props.user,props.moneyPaid,e.target.value)}
            placeholder="Money Responsible" 
        />
    </li>
    );
}

export default Form;