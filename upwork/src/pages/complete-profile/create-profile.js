import { Switch } from "react-router";
import Sidbar from "../../components/complete-profile/sidbar";
import ProtectedFreelancer from "../../components/shared/ProtectedFreelancer";
import ProfileStep10 from "./profile-step10";
import ProfileStep11 from "./profile-step11";
import ProfileStep12 from "./profile-step12";
import ProfileStep3 from "./profile-step3";
import ProfileStep5 from "./profile-step5";
import ProfileStep6 from "./profile-step6";
import ProfileStep7 from "./profile-step7";
import ProfileStep8 from "./profile-step8";
import ProfileStep9 from "./profile-step9";
import Nav from '../../components/shared/navbar';
import Footer from "../../components/shared/footer";

const CreateProfile = (props) => {
  const goToNextStep = (step) => {
    props.history.push(`/freelancer/create-profile/${step}`);
  };
const backStep = (step) => {
  props.history.push(`/freelancer/create-profile/${step}`);

}
  return (
    <>
    <Nav variation="freelancer" />
    <div className="w-full bg-bodyGray md:py-6">
      <div className="md:gap-4 md:grid md:grid-cols-12">
        <Sidbar />
        <div className="md:col-span-6 bg-white shadow-lg">
          <Switch>
            <ProtectedFreelancer path="/freelancer/create-profile/step1" exact>
              <ProfileStep3 goToNextStep={goToNextStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step2">
              <ProfileStep5 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step3">
              <ProfileStep6 goToNextStep={goToNextStep}backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step4">
              <ProfileStep7 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step5">
              <ProfileStep8 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step6">
              <ProfileStep9 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step7">
              <ProfileStep10 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>

            <ProtectedFreelancer path="/freelancer/create-profile/step8">
              <ProfileStep11 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
            <ProtectedFreelancer path="/freelancer/create-profile/step9">
              <ProfileStep12 goToNextStep={goToNextStep} backStep={backStep} />
            </ProtectedFreelancer>
          </Switch>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CreateProfile;
