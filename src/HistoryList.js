import React, {useState,useEffect} from 'react';
import HistoryRecord from './HistoryRecord';

function HistoryList(props) {
    const [list,setList]=useState(props.list);
    const [keyword,setKeyword] = useState('');

    useEffect(()=>{
        setList(props.list)
    },[props.list]);

    function searchTags(e) {
        setKeyword(e.target.value);
        setList(props.list.filter(function(record){
            if (e.target.value.length===0)
                return record
            else 
                return record.tag.slice(0,e.target.value.length)===e.target.value
        }));
    };

    return(
        <aside>
            <p className="recordTitle">Records</p>
            <input 
                className="search" 
                type="text" 
                placeholder="tags filter"
                value={keyword}
                onChange={e=>searchTags(e)}
            />
            <div className="records">
                {list.map((record,index)=>
                            <HistoryRecord 
                                key={index}
                                record={record}
                                index={index}
                                onModify={props.onModify}
                                onDelete={props.onDelete}
                                selected={props.selected===index?true:false}
                            />
                )}
            </div>
        </aside>
    );
};

export default HistoryList;