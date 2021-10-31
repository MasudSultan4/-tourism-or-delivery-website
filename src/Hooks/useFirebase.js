import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    

    
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sing in with google 
    const singInWithGoogle = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)  
    }

    
    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    },[])

    // Function for logOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => { setUser({}) })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        singInWithGoogle,
        setError,
        setUser,
        isLoading,
        setIsLoading,
        logOut

    }
};

export default useFirebase;