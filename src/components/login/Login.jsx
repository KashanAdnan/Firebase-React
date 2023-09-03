import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { auth, app } from "../../auth/firebase.mjs"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSumbit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home")
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="login-form">
            <form onSubmit={(e) => handleSumbit(e)} className="form-container">
                <div className="input-label">
                    <label htmlFor="email">Email :</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id='email' placeholder='Email' value={email} />
                </div>
                <div className="input-label">
                    <label htmlFor="password">Password :</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} id='password' placeholder='Password' />
                </div>
                <p>Don't Have an Account ? <Link to={"register"}>Register</Link></p>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
