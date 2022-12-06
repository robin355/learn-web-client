import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
import './Register.css'
const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const photoURL = form.photourl.value
        const password = form.password.value;
        console.log(fullName, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                handleupdateUserProfile(fullName, photoURL)
                toast.success('create Your Account')
                navigate('/login')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }
    const handleupdateUserProfile = (fullname, photoURL) => {
        const profile = {
            displayName: fullname,
            photoURL: photoURL
        }
        profileUpdate(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='form-container'>
                <h3 className='signup-title'>Register</h3>
                <form onSubmit={handleSignUp} action="">
                    <div className='form-control'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="fullName" id="" placeholder='Your Full Name' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="photourl">PhotoURL</label>
                        <input type="text" name="photourl" id="" placeholder='your PhotoURL' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Your Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                    <p>Already have an accound  <Link to='/login'>Login</Link></p>
                    <p className='text-error'>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default Register;