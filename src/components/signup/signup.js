import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'; // Ensure this path is correct for your logo image
import axios from 'axios';
import { toast } from 'react-toastify'; 
const SignUpPage = () => {
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

      const handaleSubmit = (e) => {
        e.preventDefault();
       
        if (e.target[3].value !== e.target[4].value) {
          alert('Password does not match');
          return;
        }
        axios.post('https://backend-wq9h.onrender.com/api/v1/users/register', {
          fullName: e.target[0].value,
          username: e.target[1].value,
          email: e.target[2].value,
          password: e.target[3].value,
        }).then((response) => {
          console.log(response);
          toast.success('User registered successfully');
          window.location.href = '/login';
        }).catch((error) => {
          if(error.status === 400) {
            toast.error('User already exists');
          }
          else {
            toast.error('Something went wrong');
          }
        })
      }
    return (
      <div style={styles.background}>
        <div style={styles.container}>
          <img
            src={logo}
            alt="App Logo"
            style={styles.logo}
          />
          <h2 style={styles.header}>Sign Up</h2>
          <form onSubmit={(e)=>{handaleSubmit(e)}}  style={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Username"
              style={styles.input}
              required
            />
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
            <input
              type="password"
              placeholder="Re-enter Password"
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Sign Up
            </button>
          </form>
          <p style={styles.text}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    );
  };

  export default SignUpPage;


