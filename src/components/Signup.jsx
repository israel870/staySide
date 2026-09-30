import React from "react";
import authBG from "../assets/authBG.png";
import { Link, useNavigate} from "react-router-dom";
import { Formik, FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import apiUrl from "../api";

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last Name is required"),
    emailAddress: Yup.string().required("Email address is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    role: Yup.string().required("Role is required"),
    agreed: Yup.boolean().oneOf([true],"You need to agree to the service and privacy policy").required("required")
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      role: "",
      agreed:false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert("Working!")
      
      console.log(values);

      apiUrl
        .post(`/postuser`, values)
        .then((res) => {
          console.log(`Data sent successfully`, res.data);
          if (res.data.isSaved){
            navigate('/verify', {state:{email:values.emailAddress}})
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section className="flex flex-col w-full h-screen md:flex-row">
      <div className="flex flex-col md:w-2/5 md:h-full items-center md:items-start pt-3 xl:px-40 md:px-4">
        <div className="flex items-center gap-2 pb-4">
          <img src="/logo.png" alt="" className="h-10" />{" "}
          <h1 className="text-3xl font-semibold">
            {" "}
            <span className="text-[#156936]">Stay</span>Side
          </h1>
        </div>
        <h2 className="font-semibold md:text-2xl">Create your account</h2>
        <p className="text-[#666972] mt-2 md:text-sm text-xs">
          Join HomeNest and find the perfect home to care for
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:gap-2.5 gap-0.5 pt-3"
        >
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 p-2 rounded-md"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? <span className="text-red-600">{formik.errors.firstName}</span>:null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
          <input
            type="lastName"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter your last name"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? <span className="text-red-600">{formik.errors.lastName}</span>:null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border border-gray-300 p-2 rounded-md"
            name="emailAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? <span className="text-red-600">{formik.errors.emailAddress}</span>:null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-2 rounded-md"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <span className="text-red-600">{formik.errors.password}</span>:null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="role">I am a</label>
          <select
            name="role"
            id=""
            className="border border-gray-300 p-2 rounded-md"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="disabled">Select a role</option>
            <option value="homeOwner">Home Owner</option>
            <option value="houseSitter">House Sitter</option>
          </select>
          {/* {formik.touched.role && formik.errors.role ? <span className="text-red-600">{formik.errors.role}</span>:null} */}
          </div>
          <div className="text-xs flex items-center">
            <input type="checkbox" name="agreed" id="agreed" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.agreed} /> <label htmlFor="agreed">I agree to the
            <Link to={""}>Terms of Service </Link> and
            <Link to={""}> Privacy Policy</Link>
            </label>
          </div>
          <button
            className="bg-[#156936] text-white p-2 rounded-md"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex gap-0.5 justify-center items-center">
            {" "}
            <div className="h-px w-2/5 bg-gray-300"></div> or{" "}
            <div className="h-px w-2/5 bg-gray-300"></div>{" "}
          </div>
          <button className="flex border p-2 justify-center gap-2 rounded-md border-gray-400">
            <img src="/google.png" alt="" className="h-6" />
            Sign up with Google
          </button>
        </form>
      </div>
      <div
        className="hidden md:flex md:flex-col items-end pe-8 md:w-3/5 md:h-full text-3xl text-white pt-9"
        style={{
          backgroundImage: `url(${authBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>A home to care for.</h1>
        <h1>A place to belong.</h1>
      </div>
    </section>
  );
};

export default Signup;
