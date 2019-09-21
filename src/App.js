import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser';
import FormList from './FormList';

function App() {
  const [userList, setUserList] = useState([]);
  function addUser(user) {
    setUserList(preList=>[...preList,user])
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddNewUser onAdd={addUser}/>
        <FormList list={userList}/>
      </header>
    </div>
  );
}

export default App;
