import React from 'react'; // for create UI
import ReactDOM from 'react-dom/client'; // for Render
import './index.css'; // for styling

// Form Component
//TASK : Create HTML
function Form() {
    return <div className='container'>
      <form className='form'>
        <div className='form-input'>
          <label>username</label>
          <input type='text'/>
          <small>Identify username at least 8 charecters</small>
        </div>
        {/* #2 Email*/}
        <div className='form-input'>
          <label>email</label>
          <input type='email'/>
          <small>Email pattern is not correct</small>
        </div>

        {/* #3 : Password */}
        <div className= 'form-input'>
          <label>password</label>
          <input type='password'/>
          <small>Password must be at least 8 charecters</small>
        </div>

        {/* #4 : Confirm Password */}
        <div className='form-input'>
          <label>Confirm-password</label>
          <input type='password'/>
          <small>Password does not match!</small>
        </div>
        <button type='submit'>Register</button>
      </form>
      </div>
};

//Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);