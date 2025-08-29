import React, { useContext } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const {login} = useContext(AuthContext)
  const handleLogin =()=>{
    login()
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>hello world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda hic impedit, sint, labore vero officia vitae neque sed tenetur numquam eum laboriosam sapiente eveniet officiis deserunt fugit? Deserunt, alias.</p>
            <span>Dont you have an account?</span>
            <Link to="/register"><button>register</button></Link>
        </div>
        <div className="right">
            <h1>login</h1>
            <form >
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button onClick={handleLogin }>login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
