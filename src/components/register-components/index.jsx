import React from "react";
import "./register.scss";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  return (
    <section className="register">
      <div className="container">

        <div className="register-container">
          <h1>Get Started Now</h1>
            <form className="register-center">
              <div className="register-center-item">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="register-center-item">
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="register-center-item">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="checkbox">
                <input  id="chek" type="checkbox" />
                <label htmlFor="chek">I agree to the terms & policy</label>
              </div>

              <button className="signup-button">Signup</button>
            </form>

              <div className="register-bottom">
                  <div className="google-apple">
                    <button><FcGoogle style={{fontSize:23}} />Sign in with Google</button>
                    <button><BsApple style={{fontSize:23}}  />Sign in with Apple</button>
                  </div>
                  <h4 className="have-account">Have an account? <a href=""><Link to={'/login'}>Sign In</Link></a></h4>
              </div>  

        </div>

      </div>
    </section>
  );
};

export default RegisterComponent;
