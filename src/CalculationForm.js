import React from 'react';

function CalculationForm(props) {
    return(
        <>
            <ul>
                {props.list.map(user=>
                    <li key={user}>{user}</li>
                )}
            </ul>
        </>
    )
}

export default CalculationForm;