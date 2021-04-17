/* eslint-disable react-hooks/exhaustive-deps */
import {
  faClock,
  faDollarSign,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";
import * as Yup from "yup";
import { addJob } from "../../../store/actions/jobPostAction";
import { useEffect } from "react";
const Budget = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      paymentChoice: "Pay By the hour",
      budget: 0,
    },
    validationSchema: Yup.object({
      paymentChoice: Yup.string().required("Required"),
      budget: Yup.number()
        .min(5, "Minimum budget is 5 US Dollars")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addJob(values));

      props.ToNextStep("Review");
    },
  });
  const { paymentChoice, budget } = useSelector((state) => state.jobPost);
  useEffect(() => {
    formik.setValues({ paymentChoice, budget });
  }, [paymentChoice, budget]);
  return (
    <div className="col-span-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white mb-5">
          <ul className="list-group">
            <li className="item-border ">
              <p className="text-2xl font-extrabold">Budget </p>
              <span>step 5 of 6</span>
            </li>
            <li className="item-border">
              <p className="font-bold text-sm mb-5">
                How would you like to pay your freelancer or agency?{" "}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <RadioBox
                  svg={<FontAwesomeIcon icon={faClock} />}
                  id="payByHour"
                  name="paymentChoice"
                  value="Pay By the hour"
                  text="Pay hourly to easily scale up and down."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.paymentChoice === "Pay By the hour"}
                ></RadioBox>
                <RadioBox
                  id="payFixedPrice"
                  name="paymentChoice"
                  svg={<FontAwesomeIcon icon={faDollarSign} />}
                  value="Pay a Fixed Price"
                  text="Define payment before work begins and pay only when work is delivered."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.paymentChoice === "Pay a Fixed Price"}
                ></RadioBox>
                <div className="error mt-4 ml-4 text-danger text-sm font-bold">
                  {formik.touched.paymentChoice &&
                  formik.errors.paymentChoice ? (
                    <span>
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="mr-5 text-danger"
                      />
                      <span>{formik.errors.paymentChoice} </span>
                    </span>
                  ) : null}
                </div>
              </div>
            </li>
            <li className="item-border">
              {formik.values.paymentChoice === "Pay By the hour" && (
                <div>
                  <p className="font-bold text-sm mb-2">
                    Enter your hourly range
                  </p>
                  <Input
                    className={
                      formik.touched.budget && formik.errors.budget
                        ? "border-danger focus:ring-danger pl-10"
                        : "pl-10"
                    }
                    svg={
                      <svg
                        width="20"
                        height="20"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dollar-sign"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 288 512"
                      >
                        <path
                          fill="currentColor"
                          d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                        ></path>
                      </svg>
                    }
                    type="number"
                    minNum="0"
                    name="budget"
                    placeholder="0"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.budget}
                    errorMsg={
                      formik.touched.budget && formik.errors.budget
                        ? formik.errors.budget
                        : null
                    }
                  />
                </div>
              )}
              {formik.values.paymentChoice === "Pay a Fixed Price" && (
                <div>
                  <p className="font-bold text-sm mb-2">
                    Enter your fixed price
                  </p>
                  <Input
                    className={
                      formik.touched.budget && formik.errors.budget
                        ? "border-danger focus:ring-danger pl-10"
                        : "pl-10"
                    }
                    svg={
                      <svg
                        width="20"
                        height="20"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="dollar-sign"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 288 512"
                      >
                        <path
                          fill="currentColor"
                          d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                        ></path>
                      </svg>
                    }
                    type="number"
                    minNum="0"
                    name="budget"
                    placeholder="0"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.budget}
                    errorMsg={
                      formik.touched.budget && formik.errors.budget
                        ? formik.errors.budget
                        : null
                    }
                  />
                </div>
              )}
            </li>
            <li className="item-border">
              <Btn
                className="text-primary mr-3 border-hair border px-10 py-2 "
                handleClicking={() => props.backStep("Budget")}
              >
                Back
              </Btn>
              <Btn
                type="submit"
                className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
                disabled={
                  (!formik.values.budget || !formik.values.paymentChoice)
                  ||((formik.touched.budget || formik.touched.paymentChoice) &&
                  (formik.errors.budget || formik.errors.paymentChoice))
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

export default Budget;
