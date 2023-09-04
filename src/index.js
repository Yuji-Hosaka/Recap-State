import React,{useState} from 'react'; // for create UI
import ReactDOM from 'react-dom/client'; // for Render
import './index.css'; // for styling

// Form Component
//TASK : Create HTML
function Form() {
  //set data State
  const [username, setUserName] = useState('');
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  
  //set error message State
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  //Color state

  const [usernameColor, setUserNameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault ();

//Validate Username  
    if (username.length >= 8) {
      setErrorUserName("");
      setUserNameColor('green');
    } else {
      setErrorUserName('Please identify username at least 8 charecters');
      setUserNameColor('red');
    }
//Validate Email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor('green');
    } else {
      setErrorEmail("Email is invalid")
      setEmailColor('red');
    }

 // Validate Password
    if(password.length >=8) {
      setErrorPassword('');
    } else {
      setErrorPassword('Password must be at least 8 charecters');

    }
// Validate Confirm Password
    if(password === confirmPassword) {
      setErrorConfirmPassword('');
    } else {
      setErrorConfirmPassword('Password does not match, try again');
    }
  };
    return  (
      <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {/* #1 Username */}
        <div className='form-input' >
          <label>username</label>
          <input type='text' 
          value={username} 
          onChange={(e)=> 
          setUserName(e.target.value)}
          style={{borderColor: usernameColor}}
          />
          <small>{errorUserName}</small>
        </div>
        {/* #2 Email*/}
        <div className='form-input'>
          <label>email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <small>{errorEmail}</small>
        </div>

        {/* #3 : Password */}
        <div className= 'form-input'>
          <label>password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <small>{errorPassword}</small>
        </div>

        {/* #4 : Confirm Password */}
        <div className='form-input'>
          <label>Confirm-password</label>
          <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <small>Password does not match!</small>
        </div>
        <button type='submit'>Register</button>
      </form>
      </div>
    )
};

//Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);

// create : function Form () {}
// render : <Form/>
