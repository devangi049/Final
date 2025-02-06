import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // Ensure this path is correct for your logo image
import SignUpPage from '../signup/signup';
import axios from 'axios';
import Cookies from 'js-cookie';


const LoginPage = () => {
  const styles = {
    background: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#00B98E",
    },
    container: {
      width: "90%",
      maxWidth: "400px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      textAlign: "center",
    },
    logo: {
      width: "100px",
    },
    header: {
      margin: "10px 0",
      fontSize: "24px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginTop: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#00B98E",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#019374",
    },
    text: {
      marginTop: "15px",
      fontSize: "14px",
      color: "#666",
    },
    link: {
      color: "#00B98E",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form[0].value,
      password: form[1].value,
    };
    axios.post("https://backend-wq9h.onrender.com/api/v1/users/login", data)
      .then((response) => {
        alert("Login successful");
        const { username, referenceToken, accessToken } = response.data.data.user;
        localStorage.setItem('userName', username);  
        localStorage.setItem('referenceToken', referenceToken);
        Cookies.set('accessToken', accessToken, { expires: 7 });
        window.location.href = "/";
      })
      .catch((error) => {
        alert("Login failed");
      });
  };
  
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <img
          src={logo}
          alt="App Logo"
          style={styles.logo}
        />
        <h2 style={styles.header}>Login</h2>
        <form style={styles.form} onSubmit={(e)=>{
          handleSubmit(e);
        }} >
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
