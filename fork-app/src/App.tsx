import React,{useState} from 'react';
import {IUserInput} from './Common/Interface';
import SearchBar from './Component/SearchComponent/SearchBar';
import TableDisplay from './Component/TableComponent/TableDisplay'

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: ""
  });
  function SetUserInput(a: IUserInput){
    setUserInput(a)
  }
  return (
    <div className="App">
      <SearchBar SetUserInput = {(a: IUserInput) => SetUserInput(a)}/>
      <TableDisplay SearchQuery = {UserInput.SearchQuery}></TableDisplay>
    </div>
  );
}

export default App;
