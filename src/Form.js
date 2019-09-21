import React,{useState, useEffect, useCallBack} from 'react';

function Form(props) {
    const [moneyPaid,setMoneyPaid]=useState(0);
    const [moneyResp,setMoneyResp]=useState(0);


    const update = useCallBack(()=>{
        props.addRecord(props.user,moneyPaid,moneyResp)
    },[moneyPaid,moneyResp]);

    useEffect(()=>{
        update();
    },[update]);

    function changeVal(type,e) {
        if (type==="paid") setMoneyPaid(e.target.value);
        if (type==="resp") setMoneyResp(e.target.value);
    };

    return(
    <li>
        <p>{props.user}</p>
        <input 
            type="number"
            value={moneyPaid}
            onChange={e=>changeVal('paid',e)}
            placeholder="Money Paid" 
        />
        <input 
            type="number" 
            value={moneyResp}
            onChange={e=>changeVal('resp',e)}
            placeholder="Money Responsible" 
        />
    </li>
    );
}

export default Form;