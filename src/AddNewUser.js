import React, {useState} from 'react';

function AddNewUser(props) {
    const [name, setName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onAdd(name);
        setName('');

    };
    return (
        <>
            <p>Please add all the names of your groupmates below to begin:</p>
            <form onSubmit={handleSubmit}>
                <input 
                    id="addUser"
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name of your groupmate" 
                />
                <button id="addUserButton">Add</button>
            </form>
        </>
    );
}

export default AddNewUser;