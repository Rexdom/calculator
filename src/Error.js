import React from 'react';

function Error(props) {
    let message=''
    if (props.error==='repeat') {
        message='The name should not be the same'
    } else if (props.error==='unequal'){
        message='Total of Money Paid and Money Responsible is not the same, please correct the amount.';
    } else if (props.error==='empty'){
        message='Input cannot be empty';
    } else {
        message='';
    }
    return(
        <p className="warning">{message}</p>
    )
};

export default Error;