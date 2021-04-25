import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const ProfileStep3 = (props) => {
const user = useSelector(state => state.user)
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <img
            src="https://www.saintlad.com/wp-content/uploads/2021/02/Upwork-Job-Post-Not-Getting-Any-Applications-4-550x314.png"
            alt="profile"
            className="w-full h-48 align-middle border-none"
          />
        </div>
      </div>
      <div className="px-5">
        <h1 className="text-xl font-bold my-4">Join Upwork as a freelancer</h1>
        <h1 className="text-sm mb-6">Hi,{" "} {user.firstName}</h1>
        <h1 className="text-sm my-4">
          Thanks for your interest in Upwork! As the world’s largest talent
          platform, we connect millions of businesses with independent
          professionals like you.
        </h1>
        <h1 className="text-sm my-6">
          To get started, all you need to do is fill out a profile
        </h1>

        <button className="border border-gray-300 md:w-1/5 md:float-right w-1/2 justify-center bg-primary mx-4 text-white font-bold py-2 mt-4 mb-10 rounded-md hover:bg-dark"
        // to="/freelancer/create-profile/step2"
        onClick={()=>props.goToNextStep("step2")}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default withRouter(ProfileStep3);
