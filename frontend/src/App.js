import React, { useState } from "react";
import axios from "axios";
import NewUserForm from "./Components/NewUserForm/NewUserForm";
import './App.scss';

function App() {
  const [userFormSubmitted, setUserFormSubmitted] = useState(false);

  const handleUserFormSubmit = (userInfo) => {
    setUserFormSubmitted(true);
    axios
      .post("http://localhost:8000/api/users/", userInfo)
      .then((res) => console.log(res));
  }

  return (
    <div className="App">
      {!userFormSubmitted && <NewUserForm onSubmit={handleUserFormSubmit}/>}
      {userFormSubmitted && 
      <div className="submit-message">
        <h1>Your form has been submitted!</h1>
        <h2>Thank you for joining us!</h2>
      </div>}
    </div>
  );
}

export default App;
