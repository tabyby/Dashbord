import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GmailLogin from "./Gmaillogin";
import "./login.css"

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [user, setUser] = useState("");

  const error = "";

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("hello", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/admin/login"
      await axios.post(url, data).then((response) => {
        if (
          response.data === "Invalid Password" ||
          response.data === "Invalid Email or Password"
        ) {
          alert("Invalid Password");
          // navigate.push("/login");
        } else if (response.msg === "logged in successfully")
          setUser(data.email);
        navigate("/starter");
        localStorage.setItem("doctor", JSON.stringify(response.data.token));
        // console.log('user',user)
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="styleslogincontainer">
      {/* <div className="styleslogincontainer">
        <div className="styleslogincontainer">
          <form className="styleslogincontainer" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <div> {console.log("user", user)}</div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="styleslogincontainer"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="styleslogincontainer"
            />
            {error && <div className="styleslogincontainer">{error}</div>}

            <button onclick={()=>{handleSubmit()}} type="submit" className="styleslogincontainer">
              Sing In
            </button>
          </form>
        </div>
        <div className="styleslogincontainer">
          <h1>New Here ?</h1>
          <Link to="/PostBlogs">
            <button type="button" className="styleslogincontainer">
              Sing Up
            </button>
          </Link>
        </div>
      </div> */}

      <div className="maincontainer">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-6 d-none d-md-flex bg-image"></div>

            <div class="col-md-6 bg-light">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-10 col-xl-7 mx-auto">
                      <h3 class="display-4">Welcome!</h3>
                      <p class="text-muted mb-4">
                        Fill the form with your email and password
                      </p>
                      <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                          <input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            class="form-control rounded-pill border-0 shadow-sm px-4"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                          />
                        </div>
                        <div class="form-check">
                          <input
                            id="customCheck1"
                            type="checkbox"
                            checked
                            class="form-check-input"
                          />
                          <label for="customCheck1" class="form-check-label">
                            Remember password
                          </label>
                        </div>
                        <div class="d-grid gap-2 mt-2">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            Sign in
                          </button>

                          <GmailLogin />
                        </div>
                        {/* <Link to="/signup">
                          <div class="text-center d-flex justify-content-between mt-4">
                            <p>You don't have an account yet?</p>
                          </div>
                        </Link> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
