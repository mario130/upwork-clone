/* eslint-disable no-useless-escape */
import AppleBtn from "../../components/Auth/AppleBtn";
import GoogleBtn from "../../components/Auth/GoogleBtn";
import Btn from "../../components/UI/Form/Btn/Btn";
import Input from "../../components/UI/Form/Input/Input";
import Separator from "../../components/UI/Seperator/Seperator";
import React, { Component } from "react";
import { localBackend } from "./../../services/basedUrl";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/loginUserAction";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
        login: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    errors.login =""

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    let payload;
    let errors = this.state.errors;
    try {
      let response = await axios.post(`${localBackend}/users/auth`, data);
      payload = response.data;
      localStorage.setItem("user", this.state.email);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("userId", payload._id);
      localStorage.setItem("userType", payload.userType);
      localStorage.setItem("userName", payload.userName);
      localStorage.setItem("firstName", payload.firstName);
      localStorage.setItem("fullName", payload.firstName +' '+payload.lastName);

      this.props.loginUser(this.state.email, payload.token, payload.userType,payload.userName,payload.firstName);
      if( payload.userType === "client"){
        this.props.history.replace("/client/home")
      }else {
        this.props.history.replace("/freelancer")

      }

      errors.login = "";
    } catch (err) {
      errors.login = "Email Address or Password not correct";
      console.log(err);
    }
    this.setState(errors);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        {/* NAVBAR */}
        <div className="bg-complementary py-3 px-3">
          <div className="max-w-5xl mx-auto flex justify-center">
            {/* Logo */}
            <svg
              className="text-white ml-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102.4 30"
              width="106"
              height="30"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#ffffff"
                d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
              ></path>{" "}
              <path
                fill="#6fda44"
                d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
              ></path>
            </svg>
          </div>
        </div>

        <div id="login" className="py-0 md:py-5 bg-bodyGray">
          <div className="mt-4 form-wrapper py-6 bg-white text-center md:w-1/2 lg:w-2/5 w-full mx-auto px-5 lg:px-20 md:rounded-lg">
            <h2 className="h1 text-3xl font-bold my-6">Log in to Upwork</h2>
            <form onSubmit={this.handleSubmit} >
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                errorMsg={errors.email.length > 0 && errors.email}
                className="pl-10"
                svg={
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                }
                onChange={this.handleChange}
                value={this.state.email}
              />

              <Input
                type="password"
                name="password"
                placeholder="Password"
                errorMsg={errors.password.length > 0 && errors.password}
                className="pl-10"
                svg={
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="M4.5 4.657C4.5 3.192 5.621 2 7 2s2.5 1.19 2.5 2.656V6h-5V4.657zM11.5 6V4.657C11.5 2.09 9.481 0 7 0S2.5 2.09 2.5 4.657V6h-.992C1.228 6 1 6.23 1 6.5v7c0 .276.229.5.5.5h11c.276 0 .5-.231.5-.5v-7a.5.5 0 00-.508-.5H11.5z"></path>
                  </svg>
                }
                onChange={this.handleChange}
                value={this.state.password}
              />

              <button
                disabled={
                  this.state.email &&
                  this.state.password &&
                  !errors.email &&
                  !errors.password
                    ? false
                    : true
                }
                className="w-full  bg-primary hover:bg-dark focus:ring-green-500  text-white  py-2 px-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2  rounded-lg "
              >
                Continue
              </button>
              {errors.login.length > 0 && (
                <small className="text-danger">{errors.login}</small>
              )}
              {this.state.redirect ? <Redirect push to="/freelancer" /> : null}
            </form>
            <Separator>or</Separator>
            <GoogleBtn />
            <AppleBtn />
            <Separator>New to Upwork?</Separator>
            <Link to="/signup">
              <Btn className="w-2/4  bg-white hover:text-dark focus:ring-dark  text-prbg-primary border border-gray-400">
                Sign Up
              </Btn>
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <div className="py-4 bg-complementary">
          <div className="mx-auto text-center text-white text-sm">
            <p className="mb-3">© 2015 - 2021 Upwork® Global Inc.</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    loginUser,
  };
};

// export default Login;
export default connect(null, mapDispatchToProps())(Login);
