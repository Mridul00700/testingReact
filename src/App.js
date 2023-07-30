import logo from './logo.svg';
import './App.css';
import UserForm from './userForm';
import * as React from 'react';
import UserList from './userList';

function App() {

  const [user, setUser] = React.useState([]);

  const addUser = (userinfo) => {
    setUser(prev => [...prev, {name: userinfo.name, email: userinfo.email}]);
  }

  return (
    <>
      <UserForm addUser={addUser}/>
      <UserList userList={user} />
      </>
  );
}

export default App;
