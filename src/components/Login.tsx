import React from 'react'
import './Login.css'


const Login : React.FC = () => {
  const [focusEmail, setFocusEmail] = React.useState(false)
  const [focusPass, setFocusPass] = React.useState(false)
  return (
    <div className="card-component">
      <form action="submit">
        
        <h1>Please Login</h1>

        <div className='input-container'>
          <div className="span-container">
            <span className={focusEmail ? "d1 active " : 'd1'}>E</span>
            <span className={focusEmail ? "d2 active " : 'd2'}>m</span>
            <span className={focusEmail ? "d3 active " : 'd3'}>a</span>
            <span className={focusEmail ? "d4 active " : 'd4'}>i</span>
            <span className={focusEmail ? "d5 active " : 'd5'}>l</span>
          </div>

          <input type="email" required 
            onFocus={()=>{setFocusEmail(true)}}
            onBlur={()=>{setFocusEmail(false)}}
          />
        </div>
        <hr className={focusEmail ? 'hr-active' : ''}/>

        <div className='input-container'>
          <div className="span-container">
            <span className={focusPass ? "d1 active " : 'd1'}>P</span>
            <span className={focusPass ? "d2 active " : 'd2'}>a</span>
            <span className={focusPass ? "d3 active " : 'd3'}>s</span>
            <span className={focusPass ? "d4 active " : 'd4'}>s</span>
            <span className={focusPass ? "d5 active " : 'd5'}>w</span>
            <span className={focusPass ? "d6 active " : 'd6'}>o</span>
            <span className={focusPass ? "d7 active " : 'd7'}>r</span>
            <span className={focusPass ? "d8 active " : 'd8'}>d</span>
          </div>

          <input type="password" required
            onFocus={()=>{setFocusPass(true)}}
            onBlur={()=>{setFocusPass(false)}}
          />
        </div>
        <hr className={focusPass ? 'hr-active' : ''}/>
        <div className='button-container'>
          <button type='submit'>LogIn</button>
        </div>
        
        <div className="message">
            <div>Don't have an account?</div>
            <a href='/'>Register</a>
        </div>
     
      </form>
    </div>
  )
}

export default Login