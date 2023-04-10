import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import UserForm from './UserForm';
import UsersTable from './UsersTable';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(FETCH_URL);
      const result = await response.json();
      setUserData(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UsersTable data={userData} />
      <h2>Add User</h2>
      {/* <UserForm /> */}
    </>
  );
};

export default hot(App);
