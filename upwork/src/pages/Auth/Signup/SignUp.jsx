import AppleBtn from "../../../components/Auth/AppleBtn";
import GoogleBtn from "../../../components/Auth/GoogleBtn";
import Btn from "../../../components/UI/Form/Btn/Btn";
import Input from "../../../components/UI/Form/Input/Input";
import Separator from "../../../components/UI/Seperator/Seperator";

const Signup = () => {
  return (
    <div id="signup" className="py-5 bg-bodyGray">
      <div className="form-wrapper py-6 bg-white text-center md:w-2/5 w-full mx-auto px-5 ">
        <h2 className="h1 text-3xl font-bold my-6">Get your free account</h2>
        <GoogleBtn/>
        <AppleBtn/>
        <Separator>or</Separator>
      <Input type="email" name="email" placeholder="Your email" errorMsg="" svg={ <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
            </svg>}/>

      
          <Btn className="w-full  bg-green-400 hover:bg-green-500 focus:ring-green-500  text-white ">
    Continue with Email
          </Btn>
      </div>
    </div>
  );
};

export default Signup;
