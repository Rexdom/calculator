import React, {useState,useEffect} from 'react';
import HistoryRecord from './HistoryRecord';

function HistoryList(props) {
    const [list,setList]=useState(props.list);
    const [keyword,setKeyword] = useState('');

    useEffect(()=>{
        setList(props.list.filter(function(record){
            if (keyword.length===0)
                return record
            else 
                return record.tag.slice(0,keyword.length)===keyword
        }));
    },[props.list,keyword]);

    return(
        <aside>
            <p className="recordTitle">Records</p>
            <input 
                className="search" 
                type="text" 
                placeholder="tags filter"
                value={keyword}
                onChange={e=>setKeyword(e.target.value)}
            />
            <div className="records">
                {props.list.map((record,index)=>{
                    if (list.includes(record)) 
                        return <HistoryRecord 
                            key={index}
                            record={record}
                            index={index}
                            onModify={props.onModify}
                            onDelete={props.onDelete}
                            selected={props.selected===index?true:false}
                        />
                    else return null;
                })}
            </div>
        </aside>
    );
};

export default HistoryList;