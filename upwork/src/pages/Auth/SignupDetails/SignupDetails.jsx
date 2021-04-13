import { Link } from "react-router-dom";
import Btn from "../../../components/UI/Form/Btn/Btn";
import CheckBox from "../../../components/UI/Form/CheckBox/CheckBox";
import Input from "../../../components/UI/Form/Input/Input";
import Radio from "../../../components/UI/Form/Radio/Radio";
import Select from "../../../components/UI/Form/Select/Select";

const SignupDetails = () => {
  return (
    <div id="signupDetails" className="py-5 bg-bodyGray">
      <div className="form-wrapper py-6 bg-white text-center md:w-2/5 w-full mx-auto px-5 ">
        <h2 className="h1 text-3xl font-bold my-3">
          Complete your free account setup
        </h2>
        <h4 className="my-6">hesham2020@gmail.com</h4>
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
  );
};

export default SignupDetails;
