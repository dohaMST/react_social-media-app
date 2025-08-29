import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
            <h1>MST social</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda hic impedit, sint, labore vero officia vitae neque sed tenetur numquam eum laboriosam sapiente eveniet officiis deserunt fugit? Deserunt, alias.</p>
            <span>Do you have an account?</span>
            <Link to='/login'>
              <button>login</button>
            </Link>
        </div>
        <div className="right">
            <h1>register</h1>
            <form >
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="text" placeholder='Name'/>
                <button>register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
