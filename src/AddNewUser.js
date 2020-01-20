import React, {useState} from 'react';

function AddNewUser(props) {
    const [name, setName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (props.userList.includes(name) === true) {
            props.setError("repeat")
        } else {
            props.onAdd(name);
            setName('');
            props.setError("")
        }

    };
    return (
        <>
            <p className="description">Please add the names of your groupmates below to begin:</p>
            <form className="user-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name of your groupmate" 
                />
                <button type='submit'>Add</button>
            </form>
        </>
    );
}

export default AddNewUser;