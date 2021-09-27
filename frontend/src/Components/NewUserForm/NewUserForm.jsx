import React, { useState } from "react";
import './NewUserForm.scss';

const NewUserForm = (props) => {
  const [userInfo, setSetUserInfo] = useState({
    name: "",
    email: "",
    fav_source_control: "",
    team_size: "",
  });
  const [curQuestion, setCurQuestion] = useState(0);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setSetUserInfo((prevUser) => {
        return {
            ...prevUser,
            [name]: value
        };
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (curQuestion === 3) {
        submitUser();
      } else {
        intramentQuestion();
      }
      event.preventDefault();
    } else if (event.key === 'Tab') {
      intramentQuestion();
      event.preventDefault();
    }
  };

  const intramentQuestion = () => {
    setCurQuestion(curQuestion + 1)
    document.querySelector(".selected + div > input").style.visibility = "visible";
    document.querySelector(".selected + div > input").focus()
  }

  const submitUser = () => {
      props.onSubmit(userInfo);
  };

  return (
      <form id="new-user-form" className="new-user-form">
        <div className={`question ${curQuestion === 0 && "selected"} ${curQuestion > 0 && "answered"}`}>
          <label for="name">What's your name?</label>
          <input
            name="name"
            form="new-user-form"
            placeholder="Full Name"
            value={userInfo.name}
            autoComplete="off"
            onChange={handleChange}
            onKeyDown={handleKeyDown} />
          <br/>
          <button className="next-btn" type="button" onClick={intramentQuestion}>OK</button>
        </div>
        <div className={`question ${curQuestion === 1 && "selected"} ${curQuestion > 1 && "answered"}`}>
          <label for="name">What's your email?</label>
          <input
            name="email"
            form="new-user-form"
            placeholder="email"
            value={userInfo.email}
            autoComplete="off"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus={curQuestion === 1} />
          <br/>
          <button className="next-btn" type="button" onClick={intramentQuestion}>OK</button>
        </div>
        <div className={`question radio ${curQuestion === 2 && "selected"} ${curQuestion > 2 && "answered"}`}>
          <label for="name">What's your favorite source control tool?</label><br/>
          <input type="radio" id="GitHub" name="fav_source_control" value="GitHub" onChange={handleChange}/>&nbsp;
          <label for="GitHub">GitHub</label><br/>
          <input type="radio" id="GitLab" name="fav_source_control" value="GitLab" onChange={handleChange}/>
          <label for="GitLab">GitLab</label><br/>
          <input type="radio" id="BitBucket" name="fav_source_control" value="BitBucket" onChange={handleChange}/>
          <label for="BitBucket">BitBucket</label><br/>
          <input type="radio" id="TFS" name="fav_source_control" value="TFS" onChange={handleChange}/>
          <label for="TFS">TFS</label><br/>
          <input type="radio" id="Other" name="fav_source_control" value="Other" onChange={handleChange}/>
          <label for="Other">Other</label><br/>
          <button className="next-btn radio-next" type="button" onClick={intramentQuestion}>OK</button>
        </div>
        <div className={`question ${curQuestion === 3 && "selected"} ${curQuestion > 3 && "answered"}`}>
          <label for="name">How many people are on your team?</label>
          <input
            name="team_size"
            form="new-user-form"
            placeholder="Number of team members"
            value={userInfo.team_size}
            autoComplete="off"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus={curQuestion === 3} />
          <br/>
          <button className="next-btn" type="button" onClick={submitUser}>Submit</button>
        </div>
      </form>
  );
}

export default NewUserForm;