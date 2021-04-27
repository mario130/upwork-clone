import React, { useEffect, useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import Btn from "../../components/UI/Form/Btn/Btn";
import CheckItem from "../../components/UI/Form/CheckItem/CheckItem";
import ErrorMsg from "../../components/UI/ErrorMsg/ErrorMsg";
import { createProfile } from "../../store/actions/create-profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileStep6 = (props) => {
  const dispatch = useDispatch()

  const [Allskills] = useState([
    "MySql",
    "NodeJS",
    "Bootstrap",
    "CSS3",
    "HTML5",
    "Tailwindcss",
    "Express",
    "React",
    "Angular",
    "MongoDB",
  ]);
  // const [otherSkills] = useState([
  //   "MySql",
  //   "NodeJS",
  //   "Bootstrap",
  //   "CSS3",
  //   "HTML5",
  //   "Tailwindcss",
  //   "Express",
  //   "React",
  //   "Angular",
  // ]);
  const formik = useFormik({
    initialValues: {
      skills: [],
    },
    validationSchema: Yup.object({
      skills: Yup.array()
        .of(Yup.string())
        .min(1, "at least one skill")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step4");
    },
  });
  const { skills} = useSelector((state) => state.userProfile)
  useEffect(()=>{
  formik.setValues({skills})
},[skills])
  return (
    <div>
      <TagHeader tag="Expertise" value="3" />
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white px-5 md:py-4">
          <h1 className="text-sm font-bold my-4">Select your skills</h1>
          <div className="inline-flex flex-wrap">
                {Allskills.map((skill) => (
                  <CheckItem
                    key={skill}
                    id={skill}
                    label={skill}
                    name="skills"
                    value={skill}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={
                      formik.values.skills &&
                      formik.values.skills.includes(skill)
                    }
                  />
                ))}
                <div className="mb-5">

                 <ErrorMsg
              errorMsg={
                formik.touched.skills && formik.errors.skills
                  ? formik.errors.skills
                  : null
              }
            />
                </div>
              </div>
          <br />
          {/* <h1 className="text-sm mt-4 mb-2">Not what you are looking for?</h1>
        <label className="block">
          <select className="form-select inline-flex w-full mb-5 py-1 pl-5 border border-gray-300 shadow-sm bg-white text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            {skills.map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </label> */}
          {/* <h1 className="text-xs w-1/3  mt-2 mb-10 text-gray-400">
          Select at least 1 skill
        </h1> */}

          <hr />

          <div className="my-5">
            <Btn
              type="button"
              className="text-primary mr-3 border-hair border px-10 py-2 "
              handleClicking={()=>props.backStep("step2")}
            >
              back
            </Btn>
            <Btn
              type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              disabled={
                formik.values.skills.length === 0 ||
                  formik.errors.skills
              }
            >
              Next
            </Btn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileStep6;
