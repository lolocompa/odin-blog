import React from "react";
import "../css/signup.css";
import { useState, useEffect } from "react";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchErrorMessage = async () => {
      try {
        const response = await fetch("/api/login");
        if (response.status === 400) {
          setErrorMessage("error");
        }
      } catch (error) {
        console.error("Error fetching error message:", error);
      }
    };

    fetchErrorMessage();
  }, []);

  return (
    <div>
      <form className="signup_form" action="/api/login" method="POST">
        <h1>Log in to your account</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form_container">
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="username" type="text" />
          <label htmlFor="password">Password</label>
          <input placeholder="Password" name="password" type="password" />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
