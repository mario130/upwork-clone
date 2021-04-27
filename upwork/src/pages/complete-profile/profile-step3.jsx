import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Btn from "../../components/UI/Form/Btn/Btn";
const ProfileStep3 = (props) => {
  const user = useSelector((state) => state.user);
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
              <h1 className="text-xl font-bold my-4">
                Join Upwork as a freelancer
              </h1>
              <h1 className="text-sm mb-6">Hi, {user.firstName}</h1>
              <h1 className="text-sm my-4">
                Thanks for your interest in Upwork! As the world’s largest
                talent platform, we connect millions of businesses with
                independent professionals like you.
              </h1>
              <h1 className="text-sm my-6">
                To get started, all you need to do is fill out a profile
              </h1>
              <Btn
                className="mb-5 float-right bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
                handleClicking={() => props.goToNextStep("step2")}
              >
                Next
              </Btn>
            </div>
    
    </>
  );
};

export default withRouter(ProfileStep3);
