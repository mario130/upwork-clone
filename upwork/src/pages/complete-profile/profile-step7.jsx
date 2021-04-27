import React, { useEffect, useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import RadioBox from "../../components/UI/Form/RadioBox/RadioBox";
import { useFormik } from "formik";
import * as Yup from 'yup'
import Btn from "../../components/UI/Form/Btn/Btn";
import { createProfile } from "../../store/actions/create-profile";
import { useDispatch, useSelector } from "react-redux";
const ProfileStep7 = (props) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      expertiseLevel: "",
    },
    validationSchema: Yup.object({
      expertiseLevel: Yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step5");
    },
  });
  const { expertiseLevel} = useSelector((state) => state.userProfile)

  useEffect(()=>{
    formik.setValues({expertiseLevel})
  },[expertiseLevel])
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
                  name="expertiseLevel"
                  value="Entery Level"
                  text="I am relatively new to this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.expertiseLevel === "Entery Level"}
                ></RadioBox>
                <RadioBox
                  name="expertiseLevel"
                  id="Intermediate"
                  value="Intermediate"
                  text="I have substantial experience in this field"
                 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.expertiseLevel === "Intermediate"}
                ></RadioBox>
                <RadioBox
                  id="Expert"
                  name="expertiseLevel"
                  value="Expert"
                  text="I have comprehensive and deep expertise in this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.expertiseLevel === "Expert"}
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
                !formik.values.expertiseLevel ||
                  formik.errors.expertiseLevel
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
