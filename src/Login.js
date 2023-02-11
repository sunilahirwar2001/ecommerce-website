import React, { useState, useEffect } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [isSignUp, setIsSignUp] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signUpsubmitted, setSignUpSubmitted] = useState(false);
  const [loggedInSubmitted, setLoggedInSubmitted] = useState(false);
  const [valUser, setValUser] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    if (signUpsubmitted) {
      // Send the form data to the server or perform other actions
    }
  }, [signUpsubmitted]);
  function handleLogin() {
    // Replace this with a call to your authentication server
    setIsLoggedIn(true);
  
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setValUser(false);
  }

  
  function handleSignUp() {
    // Replace this with a call to your authentication server
  
    setIsSignUp(true);
  }

  function handleLoggedIn(e){

    var  userData = localStorage.getItem("credentials");
    userData = JSON.parse(userData);
    
    let obj = userData.find(o => o.username == username);
    if(obj){
      if(obj.password == password){
        setValUser(true);
      }
    }
    
    setLoggedInSubmitted(true);
    //setTimeout(setLoggedInSubmitted,2000);
    console.log(loggedInSubmitted);
    console.log(valUser);
    setTimeout(setLoggedInSubmitted,2000)
  }

    function handleSignUpSubmit(e){
      e.preventDefault();
      var oldUserData = localStorage.getItem("credentials");
      console.log(oldUserData);
      if(oldUserData) {
        oldUserData = JSON.parse(oldUserData);
      } else {
        oldUserData = [];
      }

      let newUserData = {"username" : username,"password": password,"mobile":mobile,"email":email};

      oldUserData.push(newUserData);

      localStorage.setItem('credentials', JSON.stringify(oldUserData));
      setSignUpSubmitted(true);
      setIsSignUp(false);
      setTimeout(setSignUpSubmitted, 2000);
         
    } 

  return (
    <div className="login-div">
      {
        valUser ? (<div><p>Welcome, {username}</p><button onClick={handleLogout}>Logout</button></div>) : ""
      }
      {
        !isLoggedIn ? (<div> <button onClick={handleLogin} className='login'>Login</button>
        <button onClick={handleSignUp}>SignUp</button></div>) :""
      }

      {(isLoggedIn && valUser == false ) ? (
        <>
        {/* <label>Name</label> */}
       
          {/* <p>Welcome, {username}</p> */}
          <label>
            Username:
            <input
              type="text" placeholder="" required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Passward
            <input
              type="password" placeholder="Password" required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button  onClick={handleLoggedIn}>login</button>
          
        </>
      ) : (
        <>
      
          {isSignUp ? (
           <form onSubmit={handleSignUpSubmit}>
           <label>Name</label>
           <input
              type="text"
             
              onChange={(e) => setUsername(e.target.value)}
            />

<label>Email</label>
           <input
              type="email" required
             
              onChange={(e) => setEmail(e.target.value)}
            />

<label>mobile</label>
           <input
              type="number"
             required
              onChange={(e) => setMobile(e.target.value)}
            />


<label>Passward</label>
           <input
              type="passward"
              required
             
              onChange={(e) => setPassword(e.target.value)}
            />
<input type="submit" value="Save"  />

            </form> ) : ("")}

            <div>
          { signUpsubmitted?"submitted successfully":handleSignUp

          }
          
            </div>
        </>
      )}
      { loggedInSubmitted ? (valUser ? "Logged In successfully": "Wrong Username or Password" ):""

}
    </div>
  );
}

export default Login;
