import React from 'react';
import logo from './logo.svg';
import './App.css';
// import the UserList component
import UserList from "./User/UserList";

const users = [
  { id: 1, name: "Akash", age: "30"},
  { id: 2, name: "Hamilton", age: "22"},
  { id: 3, name: "Chitra", age: "26"},
  { id: 4, name: "Sanju", age: "32"},
  { id: 5, name: "Eric", age: "34"},
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">User List</h3>
        </header>
        <UserList users={users}/>
      </div>
    );
  }
}

export default App;
