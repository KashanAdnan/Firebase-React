import React, { useState } from 'react'
import { db } from "../../auth/firebase.mjs"
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const q = query(collection(db, "users"), where("email", "==", user.email));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setName(doc.data().name)
            });
        } else {
            navigate("/")
        }
    });
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className='navbar'>
            <h1>{name}</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Home
