import React from "react";
import "../css/signup.css";

export const Signup = () => {
  return (
    <div>
      <form class="signup_form" action="/api/sign-up" method="POST">
        <h1>Sign up for an account</h1>
        <div class="form_container">
          <label for="username">Username</label>
          <input name="username" placeholder="username" type="text" />
          <label for="password">
            Password
          </label>
          <input  placeholder="Password" name="password" type="password" />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
