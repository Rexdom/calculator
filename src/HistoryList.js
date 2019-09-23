import React from 'react';
import HistoryRecord from './HistoryRecord';

function HistoryList(props) {
    return(
        <aside>
            {props.list.map((record,index)=>
                        <HistoryRecord 
                            key={index}
                            record={record}
                            index={index}
                            onModify={props.onModify}
                            selected={props.selected===index?true:false}
                        />
            )}
        </aside>
    );
};

export default HistoryList;