import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {useEffect, useState} from "react";
import authInitialization from "../Firebase/firebase.init";

authInitialization();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    const handleName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        })
    }

    const handleSignUp = e => {
        setIsLoading(true)
        e.preventDefault();
        return createUserWithEmailAndPassword(auth,email,password)
        .finally(() => setIsLoading(false))
    }

    const handleLogin = e => {
        setIsLoading(true)
        e.preventDefault();
        return signInWithEmailAndPassword(auth,email,password)
        .finally(() => setIsLoading(false))
    }

    const signInWithGoogle =() => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .catch(error => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        handleName,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        signInWithGoogle,
        handleSignUp,
        handleLogin,
        logOut,
        isLoading
    }
}

export default useFirebase;