import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebas.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    // console.log(user);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user, error, signInUsingGoogle, logOut
    }
}

export default useFirebase;