import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';
import '../style/auth.css'


const Register = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [user, setUser] = useState({
        email:'',
        username:'',
        password:'',
        password2:'',
    });

    const {signUp} = useAuth()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try {
            if (user.password.trim() !== user.password2.trim()) {
                setError('las contraseñas no coinciden')
            }else{
                await signUp(user.username,user.email,user.password)
                navigate('/')
            }
           
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
    const [inicio, setInicio] = useState(false);



    return (
        <div className='auth-container'>
        <div className='mb-2 alert-10'>
        {
            
            error && <Alert  massage={error}/>
        }</div>

        <div className={`card-3d-wrap mx-auto ${inicio ? 'clicked':''   }`}>
  <div className="card-3d-wrapper">
    <div className="card-front">
      <div className="center-wrap">
      <form onSubmit={handleSubmit}>

      <div className="section text-center">
        <h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
                        <input
                          type="text"
                          name='username'
                          className="form-style"
                          placeholder="Name"
                          autoComplete="off"
                          onChange={handleChange}
                        />
                        <i className=" input-icon fa-solid fa-user"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          name="email"
                          className="form-style"
                          placeholder="Your Email"
                          autoComplete="off"
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
                        />
                         <i class="input-icon fa-solid fa-lock"  ></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password2"
                          name="password2"
                          className="form-style"
                          placeholder="Confirm Password"
                          onChange={handleChange}
                        />
                         <i class="input-icon fa-solid fa-lock"  ></i>
                      </div>
                      <input type='submit' className="btn mt-4" value='Register'/>
                       
        </div>
        </form>
      </div>
    </div>
    
    
  </div>
       
</div>
 <span className='my-4 text-sm flex justify-between px-3'>You already have an account<Link to='/empleados' onClick={()=>{setInicio(true)}}>login</Link></span>
        
        
           
           </div>
    );
}

export default Register;