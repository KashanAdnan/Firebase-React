import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import { auth, app,db } from "../../auth/firebase.mjs"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";


const Register = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        name,
                        email,
                        phone
                    });
                    navigate("/home")
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="register-form">
            <form onSubmit={(e) => handleSubmit(e)} className="form-container register">
                <div className="input-label">
                    <label htmlFor="name">Name :</label>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} id='name' />
                </div>
                <div className="input-label">
                    <label htmlFor="email">Email :</label>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
                </div>
                <div className="input-label">
                    <label htmlFor="phone">Phone :</label>
                    <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' />
                </div>
                <div className="input-label">
                    <label htmlFor="password">Password :</label>
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                </div>
                <p>Have an Account ? <Link to={"/"}>Login</Link> </p>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
