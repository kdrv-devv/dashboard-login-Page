import React, { useState } from "react";
import "./register.scss";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { register } from "swiper/element";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Spin } from "antd";

const RegisterComponent = () => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fulldata = queryClient.getQueryData(["REGISTER"]);
  console.log(fulldata);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addUser.mutate(data);
    setLoad(true);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["REGISTER"],
    queryFn: () =>
      axios
        .get("https://674a9424868020296634d45d.mockapi.io/autoOils")
        .then((data) => data.data),
  });
  const addUser = useMutation({
    mutationFn: (newUser) =>
      axios({
        url: "https://674a9424868020296634d45d.mockapi.io/autoOils",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: newUser,
      }).then((data) => data.data),
    onSuccess: () => {
      navigate("/login");
      setLoad(false);
      return queryClient.invalidateQueries(["REGISTER"]);
    },
  });

  return (
    <section className="register">
      <div className="container">
        <div className="register-container">
          <h1>Get Started Now</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="register-center">
            <div className="register-center-item">
              <label htmlFor="">Name</label>
              <input
                {...register("name",{ required: "Name is required" })}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="register-center-item">
              <label htmlFor="">Email address</label>
              <input
                {...register("email",{ required: true })}
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="register-center-item">
              <label htmlFor="">Password</label>
              <input
                {...register("password",{ required: true })}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="checkbox">
              <input id="chek" type="checkbox" />
              <label htmlFor="chek">I agree to the terms & policy</label>
            </div>

            <button type="submit" className="signup-button">
              {load ? <Spin size="small"/> : ""}
              Signup
            </button>
          </form>

          <div className="register-bottom">
            <div className="google-apple">
              <button>
                <FcGoogle style={{ fontSize: 23 }} />
                Sign in with Google
              </button>
              <button>
                <BsApple style={{ fontSize: 23 }} />
                Sign in with Apple
              </button>
            </div>
            <h4 className="have-account">
              Have an account?{" "}
              <p href="">
                <Link to={"/login"}>Sign In</Link>
              </p>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
