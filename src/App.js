import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import UserForm from './UserForm';
import UsersTable from './UsersTable';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const editData = { name: '', username: '', email: '' };

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

  const onHandleSubmit = (data) => {
    let temp = [...userData];
    if (editIndex === -1) {
      temp = [...temp, data];
    } else {
      temp.splice(editIndex, 1, data);
    }
    setUserData(temp);
    setEditIndex(-1);
  };

  return (
    <>
      <h1>Users Table</h1>
      <UserForm
        data={editIndex !== -1 ? userData[editIndex] : editData}
        onSubmit={onHandleSubmit}
      />
      {userData.length > 0 && (
        <UsersTable data={userData} onEditData={setEditIndex} />
      )}
    </>
  );
};

export default hot(App);
