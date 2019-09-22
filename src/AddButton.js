import React from 'react';

function AddButton(props) {
    const onClick = () => props.addNewRecord(props.listIndex)
    return (
        <input type="button" value="Add" onClick={onClick}/>
    );
}

export default AddButton;