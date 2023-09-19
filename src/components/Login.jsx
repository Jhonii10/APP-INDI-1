import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import '../style/auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startLoginWithEmailPassword } from '../store/auth/thunks';

const formData = {
  email:'',
  password:'',

}

const Login = () => {

    const {status , errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const {email,password,onInputChange} = useForm(formData)
    const isAuthenticating = useMemo(()=>status === 'checking',[status])

    const onSubmit = (event)=>{
      event.preventDefault()
      dispatch(startLoginWithEmailPassword({email,password})) 
  }




    return (
        <div className='auth-container' >
        <div className='mt-b alert-10'>
        {
            
          !!errorMessage && <Alert massage={errorMessage}/>
        }
        
        
        
        </div>

        <div className={`card-3d-wrap mx-auto`}>
  <div className="card-3d-wrapper ">
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
        <form onSubmit={onSubmit}>
        <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group ">
                        <input
                          type="email"
                          name="email"
                          className="form-style"
                          placeholder="example@gmail.com"
                          onChange={onInputChange}
                        />
                        <i className=" input-icon fa-solid fa-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="password"
                          className="form-style"
                          placeholder="Your Password"
                          onChange={onInputChange}
                          autoComplete="off"
                        />
                        <i className="input-icon fa-solid fa-lock"  ></i>
                      </div>

                        <div >
                      <input type='submit' className="btn mt-4" value='submit' disabled={isAuthenticating}/>
                      <p className="mb-0 mt-4 text-center">
                        {/* <button onClick={handleResetPassword} className="link">
                          Forgot your password?
                        </button> */}
                      </p>
                      </div>

         
                      </form>
                      
        </div>
        
      </div>
      
    </div>
    
  </div>
  
  
</div><span className='mt-4 text-sm flex justify-between px-3'>Don't have an Account<Link to='/empleados/registro'>Register</Link></span>
  

      
        </div>
    );
}

export default Login;