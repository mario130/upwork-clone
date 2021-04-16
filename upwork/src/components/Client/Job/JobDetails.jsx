/* eslint-disable react-hooks/exhaustive-deps */
import Btn from "../../UI/Form/Btn/Btn";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faHashtag,
  faStickyNote,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addJob } from "../../../store/actions/jobPostAction";
import { useEffect } from "react";
const JobDetails = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      projectType: "",
    },
    validationSchema: Yup.object({
      projectType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addJob(values));
      props.ToNextStep("Expertise");
    },
  });
  const { projectType } = useSelector((state) => state.jobPost);
  useEffect(() => {
    formik.setValues({ projectType });
  }, [projectType]);
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <form onSubmit={formik.handleSubmit}>
          <ul className="list-group">
            <li className="item-border ">
              <p className="text-2xl font-extrabold"> Details </p>
              <span>step 3 of 6</span>
            </li>
            <li className="item-border">
              <p className="font-bold text-sm mb-5">
                What type of project do you have?
              </p>
              <div className="grid sm:grid-cols-3 gap-2">
                <RadioBox
                  id="onTimeProject"
                  name="projectType"
                  value="on time project"
                  text="find the right skills forshort time need"
                  svg={<FontAwesomeIcon icon={faUser} className="w-6 h-6" />}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.projectType === "on time project"}
                ></RadioBox>
                <RadioBox
                  name="projectType"
                  id="onGoingProject"
                  value="on going project"
                  text="find the right skills forshort time need"
                  svg={
                    <FontAwesomeIcon icon={faStickyNote} className="w-6 h-6" />
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.projectType === "on going project"}
                ></RadioBox>
                <RadioBox
                  id="complexProject"
                  name="projectType"
                  value="complex project"
                  text="find the right skills forshort time need"
                  svg={<FontAwesomeIcon icon={faHashtag} className="w-6 h-6" />}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.projectType === "complex project"}
                ></RadioBox>
              </div>
              <div className="error mt-4 ml-4 text-danger text-sm font-bold">
                {formik.touched.projectType && formik.errors.projectType ? (
                  <span>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="mr-5 text-danger"
                    />{" "}
                    <span>{formik.errors.projectType} </span>
                  </span>
                ) : null}
              </div>
            </li>
            <li className="item-border">
              <Btn
                className="text-primary mr-3 border-hair border px-10 py-2 "
                handleClicking={() => props.backStep("Details")}
              >
                Back
              </Btn>
              <Btn
                type="submit"
                className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
                disabled={
                  formik.touched.projectType && formik.errors.projectType
                }
              >
                Next
              </Btn>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
