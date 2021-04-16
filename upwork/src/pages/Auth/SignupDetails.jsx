import { Link } from "react-router-dom";
import Btn from "../../components/UI/Form/Btn/Btn";
import CheckBox from "../../components/UI/Form/CheckBox/CheckBox";
import Input from "../../components/UI/Form/Input/Input";
import Radio from "../../components/UI/Form/Radio/Radio";
import Select from "../../components/UI/Form/Select/Select";

const SignupDetails = (props) => {
  
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

      <p className="text-white"><span className="hidden md:inline">Already have an account?</span> <span className="font-bold text-primary">Log in</span></p>
      </div>
    </div>
    
    <div id="signupDetails" className="py-0 md:py-5 bg-complementary">
      <div className="mt-4 form-wrapper py-6 bg-white text-center md:w-1/2 lg:w-2/5 w-full mx-auto px-5 lg:px-20 md:rounded-lg">
        <h2 className="h1 text-3xl font-bold my-3">
          Complete your free account setup
        </h2>
        <h4 className="my-6">
          {props.location.search.split('=')[1]}
        </h4>
        <div className="grid md:grid-cols-2 md:gap-x-1">
          <div className="w-full ">
            <Input
             className="pl-10"
              type="text"
              name="firstName"
              placeholder="First Name"
              errorMsg=""
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
                  <path d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              }
            />
          </div>
          <div className="w-full ">
            <Input
             className="pl-10"
              type="text"
              name="lastName"
              placeholder="Last Name"
              errorMsg=""
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
                  <path d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              }
            />
          </div>
        </div>
        <Input
        
          type="password"
          name="password"
          placeholder="Password"
          errorMsg=""
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
        />
        <div className="my-4">
          <Select options={["egypt", "cairo", "alex"]} />
        </div>
        <p className="font-bold text-xl mt-4 mb-2">I want to</p>
        <div className="flex justify-center">
        <Radio id="client">
          Hire
        </Radio>
        <Radio id="freelancer">
          Work
        </Radio>

        </div>
        <div className="flex flex-col my-4">
          <CheckBox >
          Yes! Send me genuinely useful emails every now and then to help me
              get the most out of Upwork.
          </CheckBox>
      
          <CheckBox >
          Yes, I understand and agree to the Upwork <Link to="/" className="text-primary">Terms of Service</Link>, including the User Agreement and <Link to="/" className="text-primary">Privacy Policy</Link>.
          </CheckBox>
        </div>
        <Btn className="w-full  bg-primary hover:bg-green-700 focus:ring-green-500  text-white ">
          Create My Account
        </Btn>
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
};

export default SignupDetails;
