/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from "formik";
import Btn from "../../UI/Form/Btn/Btn";
import TextArea from "../../UI/Form/TextArea/TextArea";
import * as Yup from 'yup'
import { addJob } from "../../../store/actions/jobPostAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const JobDescription = (props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      description: "",
  
    },
    validationSchema: Yup.object({
      description: Yup.string()
      .min(10, "Must be 40 characters or more")
      .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addJob(values))
      props.ToNextStep("Details");
    },
  });
  const { description} = useSelector((state) => state.jobPost)
  useEffect(()=>{
  formik.setValues({description})
},[description])
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
      <form onSubmit={formik.handleSubmit}>
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold"> Describtion </p>
            <span>step 2 of 6</span>
          </li>
          <li className="item-border">
            <p className="font-bold text-sm">A good description includes:</p>
            <div className="ml-4 mb-5">
              <ul className="list-disc ml-4">
                <li className="">What the deliverable is</li>
                <li className="">
                  Type of freelancer or agency you're looking for</li>
                <li className="">
                  Anything unique about the project, team, or your company
                </li>
              </ul>
            </div>
            <TextArea
            name="description"
            className={
              formik.touched.description && formik.errors.description
                ? " border-danger focus:border-danger pl-4 hover:border-danger "
                : " pl-4 " 
            }
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={(e)=>{
              formik.setValues({description:formik.values.description.trim()})
            formik.handleBlur(e)
            }}
            errorMsg={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : null
            }
            />

          </li>
          <li className="item-border">
            <Btn  className="text-primary mr-3 border-hair border px-10 py-2 "
          handleClicking={()=>props.backStep("Description")}

            >
              Back
            </Btn>
            <Btn
            type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              disabled={formik.values.description === "" ||(formik.touched.description && formik.errors.description)}
  
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

export default JobDescription;
