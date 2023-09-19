/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import { Link, } from 'react-router-dom';
import Alert from '../components/Alert';
import '../style/auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startcreateUserWithEmailAndPassword } from '../store/auth/thunks';

const formData = {
  email: '',
  password:'',
  password2:'',
  username:''
}



const Register = () => {

  const dispatch = useDispatch();
  const [formSubmit, setFormSubmit] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

     

  const {
       username, email, password,password2, onInputChange,
      } = useForm(formData)


  const onSubmit = (event)=>{
      event.preventDefault()
      if(password !== password2) return console.error('las contraseñas no coinciden')
      setFormSubmit(true)
      dispatch(startcreateUserWithEmailAndPassword({email:email,password:password,displayName:username}))
      
      
  }

    
    return (
        <div className='auth-container'>
        <div className='mb-2 alert-10'>
        {
            
          !!errorMessage  && <Alert  massage={errorMessage}/>
        }</div>

        <div className={`card-3d-wrap mx-auto `}>
  <div className="card-3d-wrapper">
    <div className="card-front">
      <div className="center-wrap">
      <form onSubmit={onSubmit}>

      <div className="section text-center">
        <h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
                        <input
                          type="text"
                          name='username'
                          value={username}
                          className="form-style"
                          placeholder="Name"
                          autoComplete="off"
                          onChange={onInputChange}
                        />
                        <i className=" input-icon fa-solid fa-user"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          className="form-style"
                          placeholder="Your Email"
                          autoComplete="off"
                          onChange={onInputChange}
                        />
                        <i className=" input-icon fa-solid fa-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          className="form-style"
                          placeholder="Your Password"
                          onChange={onInputChange}
                        />
                         <i class="input-icon fa-solid fa-lock"  ></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="password2"
                          value={password2}
                          className="form-style"
                          placeholder="Confirm Password"
                          onChange={onInputChange}
                        />
                         <i class="input-icon fa-solid fa-lock"  ></i>
                      </div>
                      <input type='submit' className="btn mt-4" value='Register' disabled={isCheckingAuthentication}/>
                       
        </div>
        </form>
      </div>
    </div>
    
    
  </div>
       
</div>
 <span className='my-4 text-sm flex justify-between px-3'>You already have an account<Link to='/empleados'>login</Link></span>
        
        
           
           </div>
    );
}

export default Register;