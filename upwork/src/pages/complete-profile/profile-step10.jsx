import React, { useEffect, useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/UI/Form/Input/Input";
import TextArea from "../../components/UI/Form/TextArea/TextArea";
import Btn from "../../components/UI/Form/Btn/Btn";
import { createProfile } from "../../store/actions/create-profile";
import { useDispatch, useSelector } from "react-redux";
const ProfileStep10 = (props) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      title: "",
      overview: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      overview: Yup.string()
        .min(15, "Must be 15 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step8");
    },
  });
  const { title,overview} = useSelector((state) => state.userProfile)
  useEffect(()=>{
  formik.setValues({title,overview})
},[overview,title])
  return (
    <>
      <TagHeader tag="Title & Overview" value="7" />

      <hr />
      <div className="bg-white px-5 py-5 md:py-4">
          <form onSubmit={formik.handleSubmit}>
        <Input
          label="title"
          className={
            formik.touched.title && formik.errors.title
              ? "border-danger focus:ring-danger pl-4"
              : "pl-4"
          }
          type="text"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={(e) => {
            formik.values.title &&
              formik.setValues({
               ...formik.values, title: formik.values.title.trim(),
              });
            formik.handleBlur(e);
          }}
          value={formik.values.title}
          errorMsg={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : null
          }
        />
        <label htmlFor="areaOfStudy" className="text-xs my-2">
          Professional Overview
        </label>
        <TextArea
          name="overview"
          className={
            formik.touched.overview && formik.errors.overview
              ? " border-danger focus:border-danger pl-4 hover:border-danger "
              : " pl-4 "
          }
          value={formik.values.overview}
          onChange={formik.handleChange}
          onBlur={(e) => {
            formik.values.overview &&
              formik.setValues({...formik.values, overview: formik.values.overview.trim() });
            formik.handleBlur(e);
          }}
          errorMsg={
            formik.touched.overview && formik.errors.overview
              ? formik.errors.overview
              : null
          }
        />
        <hr />
        <div className="my-5">
          <Btn
            type="button"
            className="text-primary mr-3 border-hair border px-10 py-2 "
            handleClicking={()=>props.backStep("step6")}
          >
            back
          </Btn>
          <Btn
            type="submit"
            className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
            disabled={!formik.isValid}
          >
            Next
          </Btn>
        </div>{" "}
          </form>
      </div>
    </>
  );
};

export default ProfileStep10;
