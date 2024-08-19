import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // handle register
  const handleRegister = (phone, pass) => {
    setErr(false);

    // Validate password length
    if (pass?.length <= 5) {
      toast.error("Password must be at least 6 characters!");
      setErr("Password must be at least 6 characters!");
      return;
    }

    // Validate phone number
    if (!phone || phone?.length < 10) {
      toast.error("Please provide a valid phone number!");
      setErr("Please provide a valid phone number!");
      return;
    }

    // Format the phone number
    const formattedPh = "+" + phone;

    // Create new user object
    const newUser = {
      phone: formattedPh,
      pass,
    };

    // Retrieve existing users or initialize an empty array
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the phone number already exists
    const userExists = allUsers.some((user) => user.phone === formattedPh);
    if (userExists) {
      toast.error("User with this phone number already exists!");
      setErr("User with this phone number already exists!");
      return;
    }

    // Add the new user
    allUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(allUsers));

    // Indicate success
    toast.success("User registered successfully!");
    return { success: true };
  };

  const handleLogin = (phone, pass) => {
    // Validate password length
    if (!pass) {
      toast.error("Please insert a password!");
      setErr("Please insert a password!");
      return;
    }

    // Validate phone number
    if (!phone || phone?.length < 10) {
      toast.error("Please provide a valid phone number!");
      setErr("Please provide a valid phone number!");
      return;
    }

    // Format the phone number
    const formattedPh = "+" + phone;

    // Retrieve existing users or initialize an empty array
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the phone number already exists
    const userExists = allUsers.filter((user) => user.phone === formattedPh);

    // Check if the user exists
    if (userExists?.length === 0) {
      toast.error("Please create an account!");
      setErr("Please create an account!");
      return;
    }
    // Validate password
    if (pass === userExists[0]?.pass) {
      // Add current user
      localStorage.setItem("currentUser", JSON.stringify(userExists));

      // Set current user
      setUser(userExists);

      // Indicate success
      toast.success("Login successful!");
      return { success: true };
    } else {
      toast.error("Incorrect password!");
      setErr("Incorrect password!");
      return;
    }
  };

  const authData = {
    user,
    err,
    loading,
    setLoading,
    handleRegister,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
