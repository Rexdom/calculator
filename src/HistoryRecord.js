import React from 'react';

function HistoryRecord(props) {
    let sum =0;
    for (let key in props.record) {
        sum+=props.record[key].paid
    }
    return(
        <div>total:{sum}</div>
    );
}

export default HistoryRecord;