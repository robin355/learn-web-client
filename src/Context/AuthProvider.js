import { React, createContext, useState, useEffect } from 'react';
import app from '../Configure/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const Googleprovider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider);
    }
    const GitHubProvider = new GithubAuthProvider()

    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GitHubProvider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const EmailSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoading(false)

        })

        return () => {
            unsubscibe()
        }
    }, [])
    const Logout = () => {
        return signOut(auth)
    }

    const authInfo = { user, googleSignIn, createUser, EmailSignIn, profileUpdate, Logout, gitHubSignIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;