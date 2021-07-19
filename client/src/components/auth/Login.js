import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("SUCCESS!");
  };

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Sign Into Your Account
        </p>
        <form className='form' onSubmit={(event) => onSubmit(event)}>
          <div className='form-group'>
            <input
              value={email}
              onChange={(event) => onChange(event)}
              type='email'
              placeholder='Email Address'
              name='email'
            />
          </div>
          <div className='form-group'>
            <input
              value={password}
              onChange={(event) => onChange(event)}
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
