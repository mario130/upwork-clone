import React, { useEffect, useState } from "react";
import Sidbar from "../../components/complete-profile/sidbar";
import TagHeader from "../../components/complete-profile/tagHeader";
import BackNextBtns from "../../components/complete-profile/back-nextBtns";
import Select from "../../components/UI/Form/Select/Select";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/UI/Form/Input/Input";
import Btn from "../../components/UI/Form/Btn/Btn";
import ErrorMsg from "../../components/UI/ErrorMsg/ErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../store/actions/create-profile";
const countries = require("../../store/data/countries.json");
const ProfileStep12 = (props) => {
  const dispatch = useDispatch()

  const [allCountries] = useState(countries);
  const formik = useFormik({
    initialValues: {
      location: {
        country: "",
        street: "",
        city: "",
        postalCode: "",
      },
    },
    validationSchema: Yup.object({
      location: Yup.object({
        country: Yup.string().required("required"),
        street: Yup.string().required("required"),
        city: Yup.string().required("required"),
        postalCode: Yup.string().required("required"),
      }),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step9");
      console.log(values);
    },
  });
  const { country , street,city,postalCode} = useSelector((state) => state.userProfile.location)
  useEffect(()=>{
   

  formik.setValues({location:{
    country , street,city,postalCode
  }})
},[country , street,city,postalCode])
  return (
    <>
      <TagHeader tag="Location" value="9" />

      <hr />
      <div className="bg-white px-5 md:py-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full">
            <h1 className="text-sm font-bold my-2">Where are you based?</h1>
            <h1 className="text-xs mb-6 mt-2">
              We take your privacy very seriously. Only your city and country
              will be shown to clients.
            </h1>

            <label htmlFor="country" className="text-xs my-2 font-bold block">
              Country
            </label>
            <Select
              className={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.country &&
                formik.touched.location.country
                  ? "border-danger focus:ring-danger "
                  : ""
              }
              name="location.country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location.country}
            >
              <option vlaue="">please select...</option>
              {Object.keys(allCountries).map((key, i) => {
                return <option key={i}>{allCountries[key]}</option>;
              })}
            </Select>
            <ErrorMsg
              errorMsg={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.country &&
                formik.touched.location.country
                  ? formik.errors.location.country
                  : null
              }
            />
            <Input
              className={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.city &&
                formik.touched.location.city
                  ? "border-danger focus:ring-danger pl-4"
                  : "pl-4"
              }
              id="city"
              type="text"
              label="City"
              name="location.city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location.city}
              errorMsg={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.city &&
                formik.touched.location.city
                  ? formik.errors.location.city
                  : null
              }
            />
            <Input
              className={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.street &&
                formik.touched.location.street
                  ? "border-danger focus:ring-danger pl-4"
                  : "pl-4"
              }
              id="street"
              type="text"
              label="Street"
              name="location.street"
              placeholder="Street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location.street}
              errorMsg={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.street &&
                formik.touched.location.street
                  ? formik.errors.location.street
                  : null
              }
            />

            <Input
              className={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.postalCode &&
                formik.touched.location.postalCode
                  ? "border-danger focus:ring-danger pl-4"
                  : "pl-4"
              }
              id="postalCode"
              type="text"
              label="Postal Code"
              name="location.postalCode"
              placeholder="Postal Code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location.postalCode}
              errorMsg={
                formik.errors.location &&
                formik.touched.location &&
                formik.errors.location.postalCode &&
                formik.touched.location.postalCode
                  ? formik.errors.location.postalCode
                  : null
              }
            />

            <br />
            <br />
          </div>
          <hr />
          <div className="my-5">
            <Btn
              type="button"
              handleClicking={()=>props.backStep("step8")}
              className="text-primary mr-3 border-hair border px-10 py-2 "
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

export default ProfileStep12;
