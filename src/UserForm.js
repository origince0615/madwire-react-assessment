import React, { useEffect, useState } from 'react';

const UserForm = ({ data, onSubmit }) => {
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    setInputs(data);
  }, [data]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form className="UserForm" onSubmit={onHandleSubmit}>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          value={inputs.name}
          onChange={handleChange}
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          value={inputs.username}
          onChange={handleChange}
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          value={inputs.email}
          onChange={handleChange}
        ></input>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
