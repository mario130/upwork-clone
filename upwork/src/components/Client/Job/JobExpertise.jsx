/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Btn from "../../UI/Form/Btn/Btn";
import CheckItem from "../../UI/Form/CheckItem/CheckItem";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";
import * as Yup from "yup";
import { addJob } from "../../../store/actions/jobPostAction";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
const initialState = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Angular",
  "NodeJS",
  "Express",
  "MongoDB",
];
const JobExpertise = (props) => {
  const [skillsitems] = useState(initialState);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      skills: [],
      experience: "",
    },
    validationSchema: Yup.object({
      skills: Yup.array()
        .of(Yup.string())
        .min(1, "at least one skill")
        .required("Required"),
      experience: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addJob(values));

      props.ToNextStep("Budget");
    },
  });
  const { skills, experience } = useSelector((state) => state.jobPost);
  useEffect(() => {
    formik.setValues({ skills, experience });
  }, [skills, experience]);

  return (
    <div className="col-span-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white mb-5">
          <ul className="list-group">
            <li className="item-border ">
              <p className="text-2xl font-extrabold	">Expertise </p>
              <span>step 4 of 6</span>
            </li>
            <li className="item-border">
              <p className="mb-4">
                What skills and expertise are most important to you ?
              </p>
              <div className="inline-flex flex-wrap">
                {skillsitems.map((skill) => (
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
              </div>
              <div className="error mt-4 ml-4 text-danger text-sm font-bold">
                {formik.touched.skills && formik.errors.skills ? (
                  <span>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="mr-5 text-danger"
                    />{" "}
                    <span>{formik.errors.skills} </span>
                  </span>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white mb-5">
          <ul className="list-group">
            <li className="item-border">
              <p className="font-bold text-sm mb-5">
                What level of experience should your freelancer have?
              </p>
              <div className="grid sm:grid-cols-3 gap-2">
                <RadioBox
                  id="enrtyLevel"
                  name="experience"
                  value="Enrty Level"
                  text="Looking for someone relatively new to this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experience === "Enrty Level"}
                ></RadioBox>
                <RadioBox
                  name="experience"
                  id="intermediate"
                  value="Intermediate"
                  text="Looking for substantial experience in this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experience === "Intermediate"}
                ></RadioBox>
                <RadioBox
                  id="expert"
                  name="experience"
                  value="Expert"
                  text="Looking for comprehensive and deep expertise in this field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.experience === "Expert"}
                ></RadioBox>
                <div className="error mt-4 ml-4 text-danger text-sm font-bold">
                  {formik.touched.experience && formik.errors.experience ? (
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="mr-5 text-danger"
                      />{" "}
                      <span>{formik.errors.experience} </span>
                    </span>
                  ) : null}
                </div>
              </div>
            </li>
            <li className="item-border">
              <Btn
                className="text-primary mr-3 border-hair border px-10 py-2 "
                handleClicking={() => props.backStep("Expertise")}
              >
                Back
              </Btn>
              <Btn
                type="submit"
                className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
                disabled={
                (formik.values.skills.length === 0 || !formik.values.experience )
                 || ( (formik.touched.skills || formik.touched.experience) &&
                  (formik.errors.skills || formik.errors.experience))
                }
              >
                Next
              </Btn>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default JobExpertise;
