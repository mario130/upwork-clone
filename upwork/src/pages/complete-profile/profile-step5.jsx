import React, { useEffect, useState } from "react";
import TagHeader from "../../components/complete-profile/tagHeader";

import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../../components/UI/Form/Select/Select";
import ErrorMsg from "../../components/UI/ErrorMsg/ErrorMsg";
import Btn from "../../components/UI/Form/Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "../../store/actions/create-profile";
const ProfileStep5 = (props) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Required"),
      subcategory: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(createProfile(values))

      props.goToNextStep("step3");

    },
  });
  const { category , subcategory} = useSelector((state) => state.userProfile)
  useEffect(()=>{
  formik.setValues({subcategory, category})
},[subcategory,category])
  const [allCategories] = useState([
    { value: "Accounting", name: "Accounting" },
    { value: "Admin Support", name: "Admin Support" },
    { value: "Customer Service", name: "Customer Service" },
    { value: "Data Science", name: "Data Science" },
    { value: "Web & Mobie Dev", name: "Web & Mobie Dev" },
  ]);
  const [selectedSubCategory, setSelectedSubCategory] = useState({});

  const [subCategories] = useState([
    {
      id: 1,
      linkedto: "Accounting",
      topics: [
        "Accountaing",
        "Financial Planning",
        "Human Resources",
        "Managment Consulting",
        "Other",
      ],
    },
    {
      id: 2,
      linkedto: "Admin Support",
      topics: [
        "Data Entry",
        "Other -Admin Support",
        "Personal Assistance",
        "Project Managment",
        "Transaction",
        "Web Researchs",
      ],
    },
    {
      id: 3,
      linkedto: "Customer Service",
      topics: ["Customer Service", "Technical Supp[ort"],
    },
    {
      id: 4,
      linkedto: "Data Science",
      topics: [
        "A/B Testing",
        "Data Extraction",
        "Data Mining",
        "Data Visualization",
        "Machine Learning",
      ],
    },
    {
      id: 5,
      linkedto: "Web & Mobie Dev",
      topics: [
        "Desctop Development",
        "Ecommerce Development",
        "Game Development",
        "Mobile Development",
        "web Development",
      ],
    },
  ]);
  useEffect(() => {
    switch (formik.values.category) {
      case "Accounting":
        setSelectedSubCategory(
          subCategories.find((sub) => sub.linkedto === "Accounting")
        );
        break;
      case "Admin Support":
        setSelectedSubCategory(
          subCategories.find((sub) => sub.linkedto === "Admin Support")
        );
        break;
      case "Customer Service":
        setSelectedSubCategory(
          subCategories.find((sub) => sub.linkedto === "Customer Service")
        );
        break;
      case "Data Science":
        setSelectedSubCategory(
          subCategories.find((sub) => sub.linkedto === "Data Science")
        );
        break;
      case "Web & Mobie Dev":
        setSelectedSubCategory(
          subCategories.find((sub) => sub.linkedto === "Web & Mobie Dev")
        );
        break;
      default:
        break;
    }
  }, [formik.values.category, subCategories]);
  return (
    
    <div>
      <TagHeader tag="Category" value="2" />

      <hr />
      <div className="bg-white px-5 md:py-4">
        <h1 className="text-sm font-bold my-4">
          Tell us about the work you do
        </h1>
        <h1 className="text-sm my-2">What is the main service you offer?</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-4">
            <Select name="category" onChange={formik.handleChange} onBlur={formik.handleBlur } value={formik.values.category}>
              <option value="">please select ...</option>
              {allCategories.map((ele, i) => (
                <option key={i} value={ele.value}>
                  {ele.name}
                </option>
              ))}
            </Select>
            <ErrorMsg
              errorMsg={
                formik.touched.category && formik.errors.category
                  ? formik.errors.category
                  : null
              }
            />
          </div>
          <div className="my-4">
            <Select name="subcategory" onChange={formik.handleChange}  onBlur={formik.handleBlur } value={formik.values.subcategory}>
              <option value="">please select ...</option>
              {Object.keys(selectedSubCategory).length &&
                selectedSubCategory.topics.map((ele, i) => (
                  <option key={i}>{ele}</option>
                ))}
            </Select>
            <ErrorMsg
              errorMsg={
                formik.touched.subcategory && formik.errors.subcategory
                  ? formik.errors.subcategory
                  : null
              }
            />
          </div>

          <hr />
          <div className="my-5">
            <Btn
              type="button"
              handleClicking={()=>props.backStep("step1")}
              className="text-primary mr-3 border-hair border px-10 py-2 "
            >
              back
            </Btn>
            <Btn
              type="submit"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              disabled={
                formik.values.subcategory === "" ||
                formik.values.category === "" ||
                ((formik.touched.subcategory || formik.touched.category) &&
                  (formik.errors.subcategory || formik.errors.category))
              }
            >
              Next
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileStep5;
