import React from 'react';

function AddButton(props) {
    const onClick = (e) => {
        e.preventDefault();
        props.addNewRecord(props.listIndex);
    }
    return (
        <button
            className="button"
            type="submit"
            onClick={onClick}
        >{props.totalIndex===props.listIndex?"Add Record":"Save"}</button>
    );
}

export default AddButton;