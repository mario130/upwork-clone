import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import Input from "../../components/UI/Form/Input/Input";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Btn from "../../components/UI/Form/Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../store/actions/create-profile";
const ProfileStep8 = (props) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      education: {
        school: "",
        areaOfStudy: "",
      },
    },
    validationSchema: Yup.object({
      education: Yup.object({
        school: Yup.string().required("Required"),
        areaOfStudy: Yup.string().required("Required"),
      }),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step6");
      console.log(values);
    },
  });
  const { school , areaOfStudy} = useSelector((state) => state.userProfile.education)
  useEffect(()=>{
    // formik.setFieldValue("education.school",school)
    // formik.setFieldValue("education.areaOfStudy",areaOfStudy)
  formik.setValues({education:{
school,areaOfStudy
  }})
},[school,areaOfStudy])
  return (
    <div>
      <TagHeader tag="Education" value="5" />

      <hr />
      <div className="bg-white px-5 md:py-4">
        <h1 className="text-xs font-bold my-4">
          Add the schools you attended, areas of study, and degrees earned.
        </h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <Input
            className={
              formik.errors.education &&
              formik.touched.education &&
              formik.errors.education.school&&
              formik.touched.education.school 
                ? "border-danger focus:ring-danger pl-4"
                : "pl-4"
            }
            id="school"
            type="text"
            label="School"
            name="education.school"
            placeholder="School"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education && formik.values.education.school}
            errorMsg={
              formik.errors.education &&
              formik.touched.education &&
              formik.errors.education.school&&
              formik.touched.education.school 
                ? formik.errors.education.school
                : null
            }
          />
          <label htmlFor="areaOfStudy" className="text-xs my-2">
            Degree (Optional)
          </label>
          <Input
            className={
              formik.errors.education &&
              formik.touched.education &&
              formik.errors.education.areaOfStudy&&
              formik.touched.education.areaOfStudy 
                ? "border-danger focus:ring-danger pl-4"
                : "pl-4"
            }
            type="text"
            name="education.areaOfStudy"
            placeholder="Area Of Study"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education && formik.values.education.areaOfStudy}
            errorMsg={
              formik.errors.education &&
              formik.touched.education &&
              formik.errors.education.areaOfStudy&&
              formik.touched.education.areaOfStudy 
                ? formik.errors.education.areaOfStudy
                : null
            }
          />
          <div className="my-5">
            <Btn
              type="button"
              className="text-primary mr-3 border-hair border px-10 py-2 "
              handleClicking={()=>props.backStep("step4")}
            >
              back
            </Btn>
            <Btn
              type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              disabled={
                !formik.isValid
              }
            >
              Next
            </Btn>
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default ProfileStep8;
