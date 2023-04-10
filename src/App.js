import React from 'react';
import { hot } from 'react-hot-loader/root';
import UserForm from './UserForm';
import UsersTable from './UsersTable';

const App = () => (
  <>
    <h1>Users</h1>
    <UsersTable />
    <h2>Add User</h2>
    <UserForm />
  </>
);

export default hot(App);
