/* eslint-disable no-useless-escape */
import AppleBtn from "../../components/Auth/AppleBtn";
import GoogleBtn from "../../components/Auth/GoogleBtn";
import Input from "../../components/UI/Form/Input/Input";
import Separator from "../../components/UI/Seperator/Seperator";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { localBackend } from "../../services/basedUrl";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errors: {
        email: "",
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
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  
    const email = this.state.email
    axios
      .post(`${localBackend}/users/checkEmail/`,{email})
      .then((res) => {
        this.props.history.push(`/signup/details?email=${email}`);
        this.setState({...this.state,email:null})
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          ...this.state,
          errors: { email: "this email already registered" },
        });
      });
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        {/* NAVBAR */}
        <div className="bg-complementary py-3 px-3">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
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

            <p className="text-white">
              <span className="hidden md:inline">Already have an account?</span>{" "}
              <Link to="/login">
                <span className="font-bold text-primary">Log in</span>
              </Link>
            </p>
          </div>
        </div>

        <div id="signup" className="py-0 md:py-5 bg-complementary">
          <div className="mt-4 form-wrapper py-6 bg-white text-center md:w-1/2 lg:w-2/5 w-full mx-auto px-5 lg:px-20 md:rounded-lg">
            <h2 className="h1 text-3xl font-bold my-6">
              Get your free account
            </h2>
            <GoogleBtn />
            <AppleBtn />
            <Separator>or</Separator>
            <form onSubmit={this.handleSubmit}>
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
                noValidate
              />

              <button
                disabled={this.state.email ? false : true}
                className="w-full  bg-primary hover:bg-dark focus:ring-green-500  text-white  py-2 px-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2  rounded-lg "
              >
                Continue with Email
              </button>
            </form>
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

export default withRouter(Signup);
