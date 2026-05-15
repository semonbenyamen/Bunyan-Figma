import { useState } from "react";


function FormDashboard({ setIsDraft  }) {
  // Manage form inputs and update draft status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // function checks if there is data
  const handleFormChange = (newEmail, newPassword) => {
    if(newEmail ||newPassword) {
      setIsDraft(true);
    } else {
      setIsDraft(false);
    }
  }


    return (
        <div className="container">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

    {/* Update email input value and sync draft badge state*/}
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      handleFormChange(e.target.value, password);
    }}/>


    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

    {/*Update password input value and sync draft badge state*/}
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={password}
    onChange={(e) => {
      setPassword(e.target.value);
      handleFormChange(email,e.target.value);
    }}/>
    

  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default FormDashboard;