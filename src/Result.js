import React from 'react';

function Result(props){
    return (
        <>
            <ul className="result">
                {Object.keys(props.result).map(user=>
                    <li key={user}>{user}: {props.result[user]}</li>
                )}
            </ul> 
            <button onClick={props.onBack}>Back</button>
        </>
    )
};

export default Result;