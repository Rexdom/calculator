import React from 'react';
import HistoryRecord from './HistoryRecord';

function HistoryList(props) {
    return(
        <aside>
            <p>Records</p>
            {props.list.map((record,index)=>
                        <HistoryRecord 
                            key={index}
                            record={record}
                            index={index}
                            onModify={props.onModify}
                            onDelete={props.onDelete}
                            selected={props.selected===index?true:false}
                        />
            )}
        </aside>
    );
};

export default HistoryList;