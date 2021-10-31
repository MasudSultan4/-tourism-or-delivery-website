import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singInWithGoogle, setError, setIsLoading } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    const handleGoogleSingin = (e) => {
        e.preventDefault();
      singInWithGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
            })
            .catch(error => {
                setError(error.message)

            })
            setIsLoading(false)
            
            
    }
   
     return (
         <div className='Login'>
             <div className="login-container text-center ">
                 <h5 className="text-red py-4">Login Your Account!</h5>
                 <hr />
                 
                 <Button className="bg-warning text-black" onClick={handleGoogleSingin}>Sing in with Google</Button>
             </div>
         </div>
     );
};

export default Login;