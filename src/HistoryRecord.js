import React from 'react';

function HistoryRecord(props) {
    let sum =0;
    
    // eslint-disable-next-line
    for (let key in props.record) {
        sum+=props.record[key].paid?props.record[key].paid:0
    };

    function onClick(){
        props.onModify(props.index);
    };

    function onDelete(){
        props.onDelete(props.index)
    };

    return(
        <div className="record-box ">
            <div className={"record "+(props.selected?'selected':'')}
            onClick={onClick}>
                <div className="recordTag">#{props.record.tag}</div>
                total:{sum}
            </div>
            <div className="delete" onClick={onDelete}>x</div>
        </div>
        
    );
}

export default HistoryRecord;