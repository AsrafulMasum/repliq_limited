import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // handle register
  const handleRegister = async (phone, pass) => {
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

    // Stroing user data in DB
    try {
      const res = await axiosPublic.post("/register", newUser);

      // Indicate success
      toast.success(res?.data?.message);
      return { success: true };
    } catch (error) {
      // Indicate error
      toast.error(error?.response?.data?.message);
    }
  };

  // handle login
  const handleLogin = async (phone, pass) => {
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

    // Create user object
    const user = {
      phone: formattedPh,
      pass,
    };

    // Sending request for login
    try {
      const res = await axiosPublic.post("/login", user);

      // Calling set user id to local storage
      setUserIdToLS(res.data.user._id);

      // Indicate success
      toast.success(res?.data?.message);
      return { success: true };
    } catch (error) {
      // Indicate error
      toast.error(error?.response?.data?.message);
    }
  };

  // Initializing set user id to local storage
  const setUserIdToLS = (id) => {
    localStorage.setItem("userId", id);
    getUser();
  };

  // Getting user fron DB
  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const res = await axiosPublic.get(`/user/${userId}`);
      setUser(res?.data);
    }
  };

  // Calling getUser function
  useEffect(() => {
    getUser();
  }, []);

  // handle logout
  const handleLogout = () => {
    setUser(null);

    // Removing current user from local storage
    localStorage.removeItem("userId");
  };

  // Set user while login
  useEffect(() => {
    if (user) {
      axiosPublic
        .post("/jwt", user, {
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosPublic
        .post("/logout", user, {
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [axiosPublic, user]);

  // Creating object of data
  const authData = {
    user,
    err,
    loading,
    setLoading,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
