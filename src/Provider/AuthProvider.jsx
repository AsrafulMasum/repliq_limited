import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyCaptcha = () => {
    if(!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {
          console.log("Capcha Solved")
        },
        'expired-callback': () => {}
      }, auth);
    }
  }

  const onSignUp = async (phone) => {
    setLoading(true)
    verifyCaptcha()
    const formatPhone = '+' + phone
    const appVerifier = window.recaptchaVerifier;
    await signInWithPhoneNumber(auth, formatPhone, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false)
      toast.success('OTP send successfully!')
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authData = {
    user,
    loading,
    onSignUp,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
