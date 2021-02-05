import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUserSession } from '../utils/common';

const Login = () => {
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
       
       if(inputEmail==="test@gmail.com" && inputPassword==="test"){
            console.log("success");
            const token = "token123";
            setUserSession(token,"test");
            history.push('/dashboard');
       }
       else{
           console.log("unsuccessfull");
       }
    }
    const setEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const setPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
            <div className="row justify-content-md-center">
                <div className="text-center col-sm-6 col-offset-2">
                    <form className="form-signin">
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label className="sr-only">Email address</label>
                        <input type="email" id="inputEmail"  name="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={setEmailChange}/>
                        <label className="sr-only">Password</label>
                        <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required onChange={setPasswordChange} />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit"  onClick={handleLogin} >Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;