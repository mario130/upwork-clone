import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import {localBackend} from "./../../services/basedUrl";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Proposal = () => {
  const job = JSON.parse(localStorage.getItem("job")).data;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      bid: "",
      duration: "",
      coverLetter: "",
      imgPath: "",
    },
    validationSchema: Yup.object({
      bid: Yup.string().required("bid is required"),
      duration: Yup.string().required("duration is required"),
      coverLetter: Yup.string().required("duration is required"),
      imgPath: Yup.mixed()
    }),
    onSubmit: async () => {
      console.log(job._id);
      // alert( formik.values.bid );
      // alert( formik.values.duration );
      // alert( formik.values.coverLetter );
      // alert( formik.values.imgPath !== "" ? formik.values.imgPath : "" );
      try {
        let formData = new FormData()
        formData.append("imgPath",formik.values.imgPath);
        formData.append("bid",formik.values.bid)
        formData.append("duration",formik.values.duration)
        formData.append("coverLetter",formik.values.coverLetter)

        
        await axios({
          method: "post",
          url: `${localBackend}/proposal/add/${job._id}`,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: formData,
        }).then((res) => {
          console.log(res);
          console.log(res.data);
          setError(false);
          setSuccess(true);
          setTimeout(() => {
            history.push("/freelancer");
          }, 1500);
        });
      } catch (ex) {
        setErrorMsg(ex.response.data.message)
        setSuccess(false);
        setError(true);
      }
    },
  });

  return (
    <div className="bg-gray-100 md:mx-10 lg:max-w-5xl lg:mx-auto">
      <h3 className="px-4 mt-6 mb-2 font-bold text-2xl">Submit a proposal</h3>

      {formik.errors.coverLetter ||
      formik.errors.bid ||
      formik.errors.duration ? (
        <div className="bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
          <div className="px-4 md:px-6 py-3 md:py-5 text-sm space-y-1">
            <span>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="mr-5 text-danger"
              />{" "}
              <span>Please fix the errors below </span>
            </span>
          </div>
        </div>
      ) : null}

      {/* Proposal settings */}
      {/* <div className="bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
        <h5 className="px-4 md:px-6 py-3 md:py-5 font-bold text-xl border-b border-gray-200">
          Proposal settings
        </h5>

        <div className="px-4 md:px-6 py-3 md:py-5 text-sm space-y-1">
          <p>
            This proposal requires{" "}
            <span className="font-bold">{job.requiredConnects} connects</span>
          </p>
          <p>
            When you submit this proposal, you'll have{" "}
            <span className="font-bold">999 connects</span> remaining.
          </p>
        </div>
      </div> */}

      {/* Job details */}
      <div className="bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
        <h5 className="px-4 md:px-6 py-3 md:py-5 font-bold text-xl border-b border-gray-200">
          Job details
        </h5>

        <div className="px-4 md:px-6 py-3 md:py-5 text-sm md:flex md:divide-x md:divide-gray-200">
          <div className="pr-4 flex-1">
            <h5 className="font-bold my-3">{job.title}</h5>
            <p className="mb-3">{job.description}</p>
            <Link to={`/job/${job._id}`} className="text-primary font-semibold">
              View job posting
            </Link>
          </div>
          <div className="px-4 md:pl-5 md:pr-16 hidden md:block">
            <div className="flex mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <div className="w-max ml-3">
                <h6 className="font-bold">{job.experience} level</h6>
                <p className="text-gray-600">Experience level</p>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <div className="w-max ml-3">
                <h6 className="font-bold">{job.projectType}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        //  action={this.registerUser}
        //  action="{{ url('http://localhost:4001/proposal/add/'. $job.id ) }} "
        //  action="{{http://localhost:4001/proposal/add/$job.id}}"
        //  method="POST"
      >
        {/* Terms */}
        <div className="bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
          <div className="px-4 md:px-6 py-3 md:py-5 border-b border-gray-200 md:flex md:justify-between md:items-center">
            <h5 className="font-bold text-xl">Terms</h5>
            {job.budget && (
              <p className="text-gray-500 text-sm md:text-base md:font-extrabold">
                Client's budget: ${job.budget.toFixed(2)} USD
              </p>
            )}
          </div>

          <div className="px-4 md:px-6 py-3 md:py-5 text-sm">
            <h5 className="font-bold text-base mb-3 mt-4 md:mt-2 md:mb-6">
              What is the rate you'd like to bid for this job?
            </h5>

            <div className="md:flex md:items-center">
              <div className="md:flex-1">
                <h6 className="font-bold">Bid</h6>
                <p className="mb-1 md:mb-2">
                  Total amount the client will see on your proposal
                </p>
                <div className="relative mb-5">
                  <input
                    name="bid"
                    type="number"
                    min="0"
                    max={job.budget}
                    // className="border border-gray-200 focus:outline-none py-2 px-2 text-right w-60 rounded-lg"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.bid && formik.errors.bid
                        ? "py-2 px-2 text-right w-60 border-2 border-red-500 focus:outline-none   rounded-lg "
                        : "border border-gray-200 focus:outline-none py-2 px-2 text-right w-60 rounded-lg"
                    }
                    value={formik.values.bid}
                    errorMsg={
                      formik.touched.bid && formik.errors.bid
                        ? formik.errors.bid
                        : null
                    }
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 absolute top-1.5 left-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="pt-1">
                    {formik.touched.bid && formik.errors.bid ? (
                      <span>
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="mr-5 text-danger"
                        />{" "}
                        <b className="text-danger">A Bid is required. </b>
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="md:flex-1">
                <div className="flex md:flex-col">
                  <svg
                    className="w-8 h-8 md:w-16 md:h-16 mr-3 md:m-auto"
                    role="img"
                    viewBox="0 0 145 130"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72.5.5L16.8 17.6v61c0 5.6 1.4 11.2 4.2 16.1 6.1 10.8 20.3 27.5 51.5 34.8 31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.5 4.2-16.1v-61L72.5.5z"
                      fill="#6fda44"
                    ></path>
                    <path
                      d="M128.2 78.6v-61L72.5.5v129c31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.4 4.2-16.1z"
                      fill="#34ba08"
                    ></path>
                    <path
                      d="M75.9 75.9c2.8-.4 4.4-1.6 4.4-4 0-2-1.2-3.2-4.4-4.9l-6.1-1.6C61 62.9 56.5 59.7 56.5 52c0-6.9 5.3-11.3 13.3-12.5v-3.6h6.5v3.6c4.4.4 8.1 2 11.7 4.4l-4 7.3c-2.4-1.6-5.3-2.8-7.7-3.6 0 0-2-.8-6.1-.4-3.2.4-4.4 2-4.4 4s.8 3.2 4.4 4.4l6.1 1.6C86 59.6 90 63.7 90 70.5c0 6.9-5.3 11.7-13.3 12.5v4h-6.5v-4c-6.1-.4-11.3-2.4-15.4-5.7l4.9-7.3c3.2 2.4 6.5 4.4 10.1 5.3 4.1 1 6.1.6 6.1.6z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div className="md:text-center md:mt-2">
                    <h6>Includes Upwork Hourly Protection.</h6>
                    <button className="text-primary font-bold">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="px-4 md:px-6 py-3 md:py-5 bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
          <h5 className="font-bold mb-3">How long will this project take?</h5>
          <select
            name="duration"
            id="duration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // className="px-3 py-1 bg-white border border-gray-200 w-full md:w-64 focus:outline-none cursor-pointer rounded-lg"
            className={
              formik.touched.duration && formik.errors.duration
                ? "px-3 py-1 bg-white w-full md:w-64 cursor-pointer border-2 border-red-500 focus:outline-none   rounded-lg "
                : "px-3 py-1 bg-white border border-gray-200 w-full md:w-64 focus:outline-none cursor-pointer rounded-lg"
            }
            value={formik.values.duration}
            errorMsg={
              formik.touched.duration && formik.errors.duration
                ? formik.errors.duration
                : null
            }
          >
            <option value="Not Selected" selected>
              Please select...
            </option>
            <option value="More than 6 months">More than 6 months</option>
            <option value="3 to 6 months">3 to 6 months</option>
            <option value="1 to 3 months">1 to 3 months</option>
            <option value="Less than 1 month">Less than 1 month</option>
          </select>
          <div className="pt-1">
            {formik.touched.duration && formik.errors.duration ? (
              <span>
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="mr-5 text-danger"
                />{" "}
                <b className="text-danger">A Duration is required. </b>
              </span>
            ) : null}
          </div>
        </div>

        {/* Letter */}
        <div className="pb-2 bg-white mb-2 md:mb-6 border border-gray-200 md:rounded-lg">
          <h5 className="px-4 md:px-6 py-3 md:py-5 font-bold text-xl mb-1 border-b border-gray-200">
            Additional details
          </h5>

          <div className="px-4 md:px-6 text-sm">
            <h6 className="font-bold pt-3 pb-1">Cover Letter</h6>
            <p className="text-gray-500 mb-2">
              Introduce yourself and explain why you’re a strong candidate for
              this job. Feel free to suggest any changes to the job details or
              ask to schedule a video call.
            </p>
            <textarea
              name="coverLetter"
              id="coverLetter"
              rows="4"
              placeholder="Add cover letter"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.coverLetter && formik.errors.coverLetter
                  ? " w-full border-2 border-red-500 focus:outline-none   rounded-lg p-4 "
                  : " w-full border border-gray-200 focus:outline-none rounded-lg p-4 "
              }
              value={formik.values.coverLetter}
              errorMsg={
                formik.touched.coverLetter && formik.errors.coverLetter
                  ? formik.errors.coverLetter
                  : null
              }
            ></textarea>
            <div className="pt-1">
              {formik.touched.coverLetter && formik.errors.coverLetter ? (
                <span>
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="mr-5 text-danger"
                  />{" "}
                  <b className="text-danger">A cover letter is required. </b>
                </span>
              ) : null}
            </div>
          </div>

          <div className="px-4 md:px-6 text-sm">
            <h6 className="font-bold pt-3 pb-1">Attachments</h6>
            <div className="upload">
              <input
                type="file"
                name="imgPath"
                id="imgPath"
                /* onChange={formik.handleChange} */
                onChange={(event) => {
                  formik.setFieldValue("imgPath", event.target.files[0]);
                }}
                /* value={formik.values.imgPath} */
              ></input>
            </div>
          </div>

          <div className="mt-4 px-3 md:px-5 pt-6 pb-3 border-t border-gray-200">
            <div className="flex md:w-96">
              <Link to={`/job/${job._id}`}>
                <button className="flex-1 px-4 md:order-2 mx-1 py-2 rounded-lg font-bold text-primary">
                  Cancel
                </button>
              </Link>
              <button
                className="flex-1 md:order-1 mx-1 py-2 rounded-lg font-bold bg-primary text-white"
                type="submit"
              >
                Submit a proposal
              </button>
            </div>
            {success && (
              <div className="pt-3">
                {" "}
                <Alert severity="success">
                  {" "}
                  Success And Redirecting You To Feed Page{" "}
                  <CircularProgress
                    color="#76ff03"
                    style={{ width: 15, height: 15 }}
                  />{" "}
                </Alert>{" "}
              </div>
            )}
            {error && (
              <div className="pt-3">
                {" "}
                <Alert severity="error"> {errorMsg} </Alert>{" "}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Proposal;
