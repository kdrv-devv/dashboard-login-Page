import React from "react";
import "./login.scss";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    <section className="register">
      <div className="container">

        <div className="register-container">
          <div>
          <h1>Welcome back!</h1>
          <h6>Enter your Credentials to access your account</h6>
          </div>
            <form className="register-center">

              <div className="register-center-item">
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Email address" />
              </div>
              <div className="register-center-item">
                <div className="forgot-pas">
                <label htmlFor="">Password</label>
                <a href="">forgot password</a>
                </div>
                <input type="password" placeholder="Password" />
              </div>
              <div className="checkbox">
                <input  id="chek" type="checkbox" />
                <label htmlFor="chek">Remember for 30 days</label>
              </div>

              <button className="signup-button">Signup</button>
            </form>

              <div className="register-bottom">
                  <div className="google-apple">
                    <button><FcGoogle style={{fontSize:23}} />Sign in with Google</button>
                    <button><BsApple style={{fontSize:23}}  />Sign in with Apple</button>
                  </div>
                  <h4 className="have-account">Don’t have an account? <a href=""><Link to={'/register'}>Sign Up</Link> </a></h4>
              </div>  

        </div>

      </div>
    </section>
  );
};

export default LoginComponent;
