import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  // handle register
  const handleRegister = async (phone, pass) => {
    setLoading(true);
    setErr(false);

    // Validate password length
    if (pass?.length <= 5) {
      toast.error("Password must be at least 6 characters!");
      setErr("Password must be at least 6 characters!");
      setLoading(false);
      return;
    }

    // Validate phone number
    if (!phone || phone?.length < 10) {
      toast.error("Please provide a valid phone number!");
      setErr("Please provide a valid phone number!");
      setLoading(false);
      return;
    }

    // Format the phone number
    const formattedPh = "+" + phone;

    // Create new user object
    const newUser = {
      phone: formattedPh,
      pass,
    };

    // Storing user data in DB
    try {
      const res = await axiosPublic.post("/register", newUser);
      setLoading(false);

      // Indicate success
      toast.success(res?.data?.message);
      return { success: true };
    } catch (error) {
      setLoading(false);
      // Indicate error
      toast.error(error?.response?.data?.message);
    }
  };

  // handle login
  const handleLogin = async (phone, pass) => {
    setLoading(true);

    // Validate password length
    if (!pass) {
      toast.error("Please insert a password!");
      setErr("Please insert a password!");
      setLoading(false);
      return;
    }

    // Validate phone number
    if (!phone || phone?.length < 10) {
      toast.error("Please provide a valid phone number!");
      setErr("Please provide a valid phone number!");
      setLoading(false);
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

      // Store user id to local storage
      localStorage.setItem("userId", res.data.user._id);

      await getUser();

      // Indicate success
      toast.success(res?.data?.message);
      return { success: true };
    } catch (error) {
      setLoading(false);
      // Indicate error
      toast.error(error?.response?.data?.message);
    }
  };

  // Getting user from DB
  const getUser = async () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      try {
        const res = await axiosPublic.get(`/user/${userId}`);
        setUser(res?.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }
    setLoading(false);
  };

  // Call getUser function when the component mounts
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
