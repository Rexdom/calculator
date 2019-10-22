import React from 'react';

function AddButton(props) {
    const onClick = () => props.addNewRecord(props.listIndex)
    return (
        <input 
            type="button"
            className="button" 
            value={props.totalIndex===props.listIndex?"Add":"Save"} 
            onClick={onClick}
        />
    );
}

export default AddButton;