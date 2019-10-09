import React from 'react';

function Result(props){
    return (
        <>
            <ul className="result">
                {Object.keys(props.result).map(user=>
                    <li key={user}>{user} should {props.result[user]>0?"take":"pay"} {Math.abs(props.result[user])} dollars</li>
                )}
            </ul> 
            <button onClick={props.onBack}>Back</button>
        </>
    )
};

export default Result;