import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';
import '../style/auth.css'


const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [user, setUser] = useState({
        email:'',
        password:'',
    });

    const {login, resetPassword} = useAuth()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try {
           await login(user.email,user.password)
           navigate('/home')
           
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                setError('Email already in use')
            }
            else{
                setError(error.message)
            }

            setTimeout(() => {
                return setError('');
            }, 3000);
            
        }


        
    }

    


  

    const handleResetPassword = async()=>{
        if (!user.email) {
          return setError('Please enter your email')
        }

        try {
            await resetPassword(user.email)
            setError('te enviamos un correo para que puedas restablezar tu contraseña')
        } catch (error) {
            setError(error.massage)
        }
        
    }

    const [inicio, setInicio] = useState(false);

    const handleLogin = ()=>{
        setInicio(true)
    }



    return (
        <div className='auth-container pt-4' >
        <div className='mt-b alert-10'>
        {
            
            error && <Alert massage={error}/>
        }
        
        
        
        </div>

        <div className={`card-3d-wrap mx-auto ${inicio ? 'clicked':''   }`}>
  <div className="card-3d-wrapper ">
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
        <form onSubmit={handleSubmit}>
        <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group ">
                        <input
                          type="email"
                          name="email"
                          className="form-style"
                          placeholder="example@gmail.com"
                          onChange={handleChange}
                        />
                        <i className=" input-icon fa-solid fa-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          name="password"
                          className="form-style"
                          placeholder="Your Password"
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <i className="input-icon fa-solid fa-lock"  ></i>
                      </div>

                        <div >
                      <input type='submit' className="btn mt-4" value='submit'/>
                      <p className="mb-0 mt-4 text-center">
                        <button onClick={handleResetPassword} className="link">
                          Forgot your password?
                        </button>
                      </p>
                      </div>

         
                      </form>
                      
        </div>
        
      </div>
      
    </div>
    
  </div>
  
  
</div><span className='mt-4 text-sm flex justify-between px-3'>Don't have an Account<Link to='/empleados/registro' onClick={handleLogin}>Register</Link></span>
  

      
        </div>
    );
}

export default Login;