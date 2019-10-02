import React from 'react';

function Error(props) {
    let message=''
    if (props.error==='unequal'){
        message='Total of Money Paid and Money Responsible is not the same, please correct the amount.'
    } else if (props.error==='empty'){
        message='Input cannot be empty'
    } else message=''
    return(
        <p>{message}</p>
    )
};

export default Error;