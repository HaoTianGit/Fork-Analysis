import React,{useState} from 'react';
import {IUserInput} from './Common/Interface';
import SearchBar from './Component/SearchComponent/SearchBar';
import TableDisplay from './Component/TableComponent/TableDisplay'

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    UserQuery:"",
    RepoQuery:""
  });
  function SetUserInput(a: IUserInput){
    setUserInput(a)
  }
  return (
    <div className="App">
      <SearchBar SetUserInput = {(a: IUserInput) => SetUserInput(a)}/>
      <TableDisplay user = {UserInput.UserQuery} repo = {UserInput.RepoQuery}></TableDisplay>
    </div>
  );
}

export default App;
