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
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema:FormSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.name);
      console.log(values.email);
    },
  });
  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <span style={{color:'red'}}>{formik.errors.name}</span>
        <br />
        <br />
        <label htmlFor="">Enter Email: </label>
        <input type="text" name="email" onChange={formik.handleChange} />
        <br />
        <span style={{color:'red'}}>{formik.errors.email}</span>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormikForm;
