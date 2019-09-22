import React,{useState, useEffect} from 'react';

function Form(props) {
    const [moneyPaid,setMoneyPaid]=useState(0);
    const [moneyResp,setMoneyResp]=useState(0);

    useEffect(()=>{
        props.addRecord(props.user,moneyPaid,moneyResp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[moneyPaid,moneyResp]);

    return(
    <li>
        <p>{props.user}</p>
        <input 
            type="number"
            value={moneyPaid}
            onChange={e=>setMoneyPaid(e.target.value)}
            placeholder="Money Paid" 
        />
        <input 
            type="number" 
            value={moneyResp}
            onChange={e=>setMoneyResp(e.target.value)}
            placeholder="Money Responsible" 
        />
    </li>
    );
}

export default Form;