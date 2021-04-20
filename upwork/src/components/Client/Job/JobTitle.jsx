/* eslint-disable react-hooks/exhaustive-deps */
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";
import {  useFormik } from "formik";
import { useEffect, useState } from "react";
import RadioInput from "../../UI/Form/RadioInput/RadioInput";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../../../store/actions/jobPostAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const initialState = [
  {
    HtmlId: "graphicDesign",
    name: "Graphic Design",
    desc:
      "Graphic design involves creating visual media, often using typography, photography, and illustration to communicate ideas.",
  },
  {
    HtmlId: "dev",
    name: "Full Stack Development",
    desc:
      "Full stack development involves both the front and back-end of a website or application.",
  },
  {
    HtmlId: "writing",
    name: "Writing Tutoring",
    desc:
      "Writing tutoring is the process of helping students develop their writing skills.",
  },
  {
    HtmlId: "translation",
    name: "Translation",
    desc:
      "Translation is the process of translating words and meaning from one language into another language.",
  },
  {
    HtmlId: "content",
    name: "Content Writing",
    desc:
      "Content writing is creating informational, entertaining content for businesses, such as blogs, articles, newsletters, white papers, and social media posts.",
  },
];
const JobTitle = (props) => {
  const dispatch = useDispatch()
  const [categoeries] = useState(initialState);
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
      .min(15, "Must be 15 characters or more")
      .required("Required"),
      category:Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      dispatch(addJob(values))

      props.ToNextStep("Description");
    },
  });
  const { title,category } = useSelector((state) => state.jobPost)
  useEffect(()=>{

  formik.setValues({title,category})
},[title,category])

   

  return (
    <div className="col-span-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white mb-5">
          <ul className="list-group">
            <li className="item-border ">
              <p className="text-2xl font-extrabold	">Title </p>
              <span>step 1 of 6</span>
            </li>
            <li className="item-border">
              <Input
                label="Enter the name of your job post"
                className={
                  formik.touched.title && formik.errors.title
                    ? "border-danger focus:ring-danger pl-4"
                    : "pl-4"
                }
                type="text"
                name="title"
                placeholder="Job Title"
                onChange={formik.handleChange}
                onBlur={(e)=>{
                  formik.setValues({title:formik.values.title.trim(),category:formik.values.category})
                formik.handleBlur(e)
                }}
                value={formik.values.title}
                errorMsg={
                  formik.touched.title && formik.errors.title
                    ? formik.errors.title
                    : null
                }
              />

              <p className="font-bold text-sm">Here are some good examples:</p>
              <div className="ml-4">
                <ul className="list-disc ml-4">
                  <li className="">
                    Developer needed for creating a responsive WordPress Theme
                  </li>
                  <li className="">
                    CAD designer to create a 3D model of a residential building
                  </li>
                  <li className="">Need a design for a new company logo</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white mb-5">
          <ul className="list-group">
            <li className="item-border ">
              <p className=" font-bold	">Job Category </p>
            </li>
            <li className="item-border">
              <p className=" mb-5">
                Let's categorize your job, which helps us personalize your job
                details and match your job to relevant freelancers and agencies.
                Here are some suggestions based on your job title:
              </p>
              {categoeries.map((cat) => (
                <RadioInput
                name="category"
                  key={cat.HtmlId}
                  id={cat.HtmlId}
                  label={cat.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  value={cat.name}
                  checked={formik.values.category ===cat.name} 

                />
              ))}
              <div className="error mt-4 ml-4 text-danger text-sm font-bold">
                {formik.touched.category && formik.errors.category ? (
                  <span>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="mr-5 text-danger"
                    />{" "}
                    <span>{formik.errors.category} </span>
                  </span>
                ) : null}
              </div>
            </li>
            <li className="item-border">
              <Btn
                type="button"
                className="text-primary mr-3 border-hair border px-10 py-2 "
                handleClicking={()=>props.history.push("/client/home")}
              >
                cancel
              </Btn>
              <Btn
                type="submit"
                className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
                disabled={ (formik.values.title==="" || formik.values.category==="") || (( formik.touched.title||formik.touched.category) && ( formik.errors.title||formik.errors.category))}
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

export default withRouter(JobTitle);
