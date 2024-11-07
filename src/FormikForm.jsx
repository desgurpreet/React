import { useFormik } from "formik";
import React from "react";
import { FormSchema } from "./FormSchema";

const FormikForm = () => {
  const formInitialValues = {
    name: "",
    email: "",
  };
  //useFormik hook return a object using this obj
  //we can use (the complexities that is hold inside)
  // const formik = useFormik({
  //destructuring as place of formik variable
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
      },
    });
  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
        />
        <br />
        {/* in simple way error sms <span style={{ color: "red" }}>{errors.name}</span> */}
        {/* using touched formik for error sms  */}
        {errors.name && touched.name ? (
          <span style={{ color: "red" }}>{errors.name}</span>
        ) : null}
        <br />
        <br />
        <label htmlFor="">Enter Email: </label>
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        {/* <span style={{ color: "red" }}>{errors.email}</span> */}
        {errors.email && touched.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormikForm;
