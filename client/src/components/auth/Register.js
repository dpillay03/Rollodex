import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log("SUCCESS!");
    }
  };

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form' onSubmit={(event) => onSubmit(event)}>
          <div className='form-group'>
            <input
              value={name}
              onChange={(event) => onChange(event)}
              type='text'
              placeholder='Name'
              name='name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              value={email}
              onChange={(event) => onChange(event)}
              type='email'
              placeholder='Email Address'
              name='email'
            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
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
          <div className='form-group'>
            <input
              value={password2}
              onChange={(event) => onChange(event)}
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link href='/login'>Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Register;
