import { Switch } from "react-router";
import Sidbar from "../../components/complete-profile/sidbar";
import ProtectedFreelancer from "../../components/shared/ProtectedFreelancer";
import ProfileStep1 from "./profile-step1";
import ProfileStep10 from "./profile-step10";
import ProfileStep11 from "./profile-step11";
import ProfileStep12 from "./profile-step12";
import ProfileStep2 from "./profile-step2";
import ProfileStep3 from "./profile-step3";
import ProfileStep4 from "./profile-step4";
import ProfileStep5 from "./profile-step5";
import ProfileStep6 from "./profile-step6";
import ProfileStep7 from "./profile-step7";
import ProfileStep8 from "./profile-step8";
import ProfileStep9 from "./profile-step9";

const CreateProfile = () => {
  return (
    <div className="w-full bg-bodyGray md:py-6">
      <div className="md:gap-4 md:grid md:grid-cols-12">
        <Sidbar />
        <div className="md:col-span-6 bg-white shadow-lg">
        <Switch>
          <ProtectedFreelancer
            path="/freelancer/create-profile/step1"
            exact
            component={ProfileStep3}
          />
          <ProtectedFreelancer path="/freelancer/create-profile/step2" component={ProfileStep5} />
          <ProtectedFreelancer path="/freelancer/create-profile/step3" component={ProfileStep6} />
          <ProtectedFreelancer path="/freelancer/create-profile/step4" component={ProfileStep7} />
          <ProtectedFreelancer path="/freelancer/create-profile/step5" component={ProfileStep8} />
          <ProtectedFreelancer path="/freelancer/create-profile/step6" component={ProfileStep9} />
          <ProtectedFreelancer path="/freelancer/create-profile/step7" component={ProfileStep10} />
          <ProtectedFreelancer path="/freelancer/create-profile/step8" component={ProfileStep11} />
          <ProtectedFreelancer path="/freelancer/create-profile/step9" component={ProfileStep12} />



          </Switch>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
