import { React, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FaGoogle, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Login = () => {
    const { googleSignIn, EmailSignIn, gitHubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        EmailSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                toast.success('Login Success')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.warning("Please Check your password And Email")
                setError(errorMessage)
            })

    }

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                toast.success('Login By Email')
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }
    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const user = result.user;
                toast.success('Login By GitHub')
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className='form-container'>
            <h3 className='signup-title'>Login</h3>
            <form onSubmit={handleSignIn} action="">
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>Have you an Accound?<Link to='/register'>Please Register</Link></p>
                <p className='text-error'>{error}</p>
                <div>
                    <Button onClick={handleGoogleSign} className='me-2' variant="outline-success"><FaGoogle></FaGoogle> Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> GitHubSign</Button>
                </div>
                <div className='mt-2'>
                    <Button className='me-2' variant="outline-success"><FaTwitter></FaTwitter> Twiter</Button>
                    <Button variant="outline-dark"><FaWhatsapp></FaWhatsapp> Whatsapp</Button>
                </div>
            </form>

        </div>
    );
};

export default Login;