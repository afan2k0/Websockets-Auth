import React, { useState } from 'react'
import { useLoaderData } from "react-router-dom"

export function loader() {
  //get restaurant data
}

const CreateNewUser = () => {

  const restaurantTableData = useLoaderData();
  const regex = /^[a-zA-Z0-9]{1,20}$/;
  const [name, setName] = useState("")
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setName(e.target.value);
    setIsValid(regex.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username submitted: ${name}`);
  };

  return (
    <>
      <div>Welcome to {restaurantTableData.restaurantName}</div>
      <h1>Your Table number: {restaurantTableData.tableNumber}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={handleChange}
        />
        {!isValid && <p>Please enter an alphanumeric value with 1-20 characters.</p>}
        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </>
  )
}

export default CreateNewUser