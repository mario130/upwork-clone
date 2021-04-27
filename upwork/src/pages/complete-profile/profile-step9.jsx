import React, { useEffect, useState } from "react";
import Sidbar from "../../components/complete-profile/sidbar";
import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import * as Yup from "yup";
import { useFormik } from "formik";
import Btn from "../../components/UI/Form/Btn/Btn";
import Input from "../../components/UI/Form/Input/Input";
import { createProfile } from "../../store/actions/create-profile";
import { useDispatch, useSelector } from "react-redux";
const ProfileStep9 = (props) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      hourlyRate: 0,
    },
    validationSchema: Yup.object({
      hourlyRate: Yup.number().min(5,"minimum 5 $").max(10000).required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step7");
    },
  });
  const { hourlyRate} = useSelector((state) => state.userProfile)
  useEffect(()=>{
  formik.setValues({hourlyRate})
},[hourlyRate])
  return (
    <>
      <TagHeader tag="Hourly rate" value="6" />

      <hr />
      <div className="bg-white px-5 md:py-4">
        <h1 className="text-xs font-bold my-4">
          Clients will see this rate on your profile and in search results once
          you publish your profile. You can adjust your rate every time you
          submit a proposal.
        </h1>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <Input
            className={
              formik.errors.hourlyRate && formik.touched.hourlyRate
                ? "border-danger focus:ring-danger pl-4"
                : "pl-4"
            }
            type="number"
            name="hourlyRate"
            minNum="0"
            placeholder="Area Of Study"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hourlyRate}
            errorMsg={
              formik.errors.hourlyRate && formik.touched.hourlyRate
                ? formik.errors.hourlyRate
                : null
            }
          />
          <label className="text-xs my-2">
            <span className="font-bold">Upwork Service Fee</span> <br /> The
            Upwork Service Fee is 20% when you begin a contract with a new
            client. Once you bill over $500 with your client, the fee will be
            10%. <br />
            <span className="text-xl text-right w-full float-right font-bold">
              $ -2/hr
            </span>
          </label>
          <hr className="my-10" />
          <div className="my-5">
            <Btn
              type="button"
              className="text-primary mr-3 border-hair border px-10 py-2 "
              handleClicking={()=>props.backStep("step5")}
            >
              back
            </Btn>
            <Btn
              type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              //   disabled={!formik.isValid}
            >
              Next
            </Btn>
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default ProfileStep9;
