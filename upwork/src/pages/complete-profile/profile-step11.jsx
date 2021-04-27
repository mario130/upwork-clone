import React, { useEffect, useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";
import Btn from "../../components/UI/Form/Btn/Btn";
import Input from "../../components/UI/Form/Input/Input";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { createProfile } from "../../store/actions/create-profile";
import { useDispatch, useSelector } from "react-redux";
const ProfileStep11 = (props) => {
  const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          profilePhoto: "",
          phone:""
        },
        validationSchema: Yup.object({
        
            phone:Yup.string().matches(/^01[0-2,5]\d{8}$/,"Invalid phone")
        }),
        onSubmit: (values) => {
          dispatch(createProfile(values))
          props.goToNextStep("step9");
        },
      });
      const { phone} = useSelector((state) => state.userProfile)
      useEffect(()=>{
      formik.setFieldValue("phone",phone)
    },[phone])
  return (
    <>
      <TagHeader tag="Profile Photo & Phone No." value="8" />
      <hr />
      <div className="bg-white px-5 py-5 md:py-4">
          <form onSubmit={formik.handleSubmit}>
        <div className="w-full">
          <h1 className="text-xs mb-10 mt-2">
            Please upload a professional portrait that clearly shows your face.
          </h1>
          <img
            className="rounded-full w-1/3 mx-auto"
            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            alt=""
          />
          <br />
          <br />
          <div className="flex w-full  items-center justify-center bg-grey-lighter mb-4">
            <label className="w-64 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">upload your picture</span>
              <input type="file" className="hidden" name="profilePhoto" />
            </label>
          </div>
        </div>

        <hr />

        <div className="w-full">
          <h1 className="text-sm font-bold my-4 ">Add your phone number.</h1>
          <Input
            className={
              formik.errors.phone && formik.touched.phone
                ? "border-danger focus:ring-danger pl-4"
                : "pl-4"
            }
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            errorMsg={
              formik.errors.phone && formik.touched.phone
                ? formik.errors.phone
                : null
            }
          />
          <h1 className="text-sm my-4">
            Your phone number will not be shared with clients.
          </h1>
        </div>

        <hr />

        <div className="my-5">
          <Btn
            type="button"
            className="text-primary mr-3 border-hair border px-10 py-2 "
            handleClicking={()=>props.backStep("step7")}
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

export default ProfileStep11;
