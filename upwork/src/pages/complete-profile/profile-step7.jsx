import React, { useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import RadioBox from "../../components/UI/Form/RadioBox/RadioBox";
import { useFormik } from "formik";
import * as Yup from 'yup'
import Btn from "../../components/UI/Form/Btn/Btn";
const ProfileStep7 = (props) => {
  const [expertiseLevel] = useState([
    {
      level: "Entery Level",
      describeLevel: "I am relatively new to this field",
    },
    {
      level: "Intermediate",
      describeLevel: "I have substantial experience in this field",
    },
    {
      level: "Expert",
      describeLevel: "I have comprehensive and deep expertise in this field",
    },
  ]);
  const formik = useFormik({
    initialValues: {
      experienceLevel: "",
    },
    validationSchema: Yup.object({
      experienceLevel: Yup.string().required(),
    }),
    onSubmit: (values) => {
      props.goToNextStep("step5");
    },
  });
  return (
    <>
      <TagHeader tag="Expertise level" value="4" />

      <hr />
      <div className="bg-white px-5 md:py-4">
        <h1 className="text-sm font-bold my-4">
          What is your level of experience in this field?
        </h1>
        <form onSubmit={formik.handleSubmit}>
        <div className="grid sm:grid-cols-3 gap-2">
                <RadioBox
                  id="enteryLevel"
                  name="experienceLevel"
                  value="Entery Level"
                  text="I am relatively new to this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experienceLevel === "Entery Level"}
                ></RadioBox>
                <RadioBox
                  name="experienceLevel"
                  id="Intermediate"
                  value="Intermediate"
                  text="I have substantial experience in this field"
                 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experienceLevel === "Intermediate"}
                ></RadioBox>
                <RadioBox
                  id="Expert"
                  name="experienceLevel"
                  value="Expert"
                  text="I have comprehensive and deep expertise in this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experienceLevel === "Expert"}
                ></RadioBox>
              </div>
        <hr />
        <div className="my-5">
            <Btn
              type="button"
              className="text-primary mr-3 border-hair border px-10 py-2 "
              handleClicking={()=>props.backStep("step3")}
            >
              back
            </Btn>
            <Btn
              type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              disabled={
                !formik.values.experienceLevel ||
                  formik.errors.experienceLevel
              }
            >
              Next
            </Btn>
          </div>
      </form>
      </div>
    </>
  );
};

export default ProfileStep7;
