import React,{useState} from 'react';
import logo from './logo.svg';
import './PC.css';
import './Mobile.css';
import AddNewUser from './AddNewUser';
import FormList from './FormList';
import Result from './Result';

function App() {
  const [userList, setUserList] = useState([]);
  const [recordList,setRecordList]=useState([]);
  const [result, setResult] = useState({});
  const [isResult, setIsResult] = useState(false);
  const [error,setError]=useState('none');
  
  function addUser(user) {
    setUserList(preList=>[...preList,user])
  };

  function onResult(r) {
    setResult(r);
    setIsResult(true);
  }

  function onBack() {
    setIsResult(false);
  }

  function changeRecordList(list) {
    setRecordList(list);
  }

  function onError(error) {
    setError(error);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isResult===true ? (
          <Result result={result} onBack={onBack}/>
        ) : (
          <>
            <AddNewUser onAdd={addUser} userList={userList} setError={onError}/>
            <FormList 
              list={userList} 
              onResult={onResult} 
              recordList={recordList}
              error={error}
              setError={onError}
              setRecordList={changeRecordList}
            />
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
