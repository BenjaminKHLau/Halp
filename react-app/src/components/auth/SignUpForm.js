import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const errors = [];

        if(username.length < 1) errors.push("Please provide a username")
        if(email.length < 1) errors.push("Please provide a valid email")
        if(password.length < 1) errors.push("Enter a password")
        if(password !== repeatPassword) errors.push("Passwords must match")

        setErrors(errors);
    }, [ username, email, password, repeatPassword ]);



    const onSignUp = async (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        if (password === repeatPassword) {
            const data = await dispatch(signUp(username, email, password));
            if (data) {
                setErrors(errors)
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <form className='sign-up-form' onSubmit={onSignUp}>
            <h2 className="title">Sign Up</h2>
            {isSubmitted && (<div>
                {errors.map((error, ind) => (
                    <div className='errors' key={ind}>{error}</div>
                ))}
            </div>)}
            <div className='username'>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    onChange={updateUsername}
                    placeholder='Username'
                    value={username}
                ></input>
            </div>
            <div className='email'>
                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    onChange={updateEmail}
                    placeholder='Email'
                    value={email}
                ></input>
            </div>
            <div className='password'>
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    onChange={updatePassword}
                    placeholder='Password'
                    value={password}
                ></input>
            </div>
            <div className='repeat-password'>
                <label>Repeat Password</label>
                <input
                    type='password'
                    name='repeat_password'
                    onChange={updateRepeatPassword}
                    placeholder='Repeat Password'
                    value={repeatPassword}
                    // required={true}
                ></input>
            </div>
            <button className='sign-up-submit' type='submit'>Sign Up</button>
        </form>
    );
};

export default SignUpForm;
