import React from 'react';

function HistoryRecord(props) {
    let sum =0;
    
    for (let key in props.record) {
        sum+=props.record[key].paid
    };

    function onClick(){
         props.onModify(props.index)
    };

    return(
        <div className="record-box ">
            <div className={"record "+(props.selected?'selected':'')}
            onClick={onClick}>
                total:{sum}
            </div>
            <div className="delete">x</div>
        </div>
        
    );
}

export default HistoryRecord;