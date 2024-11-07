import { useFormik } from "formik";
import React from "react";

const FormikForm = () => {
  const formInitialValues = {
    name: "",
    email: "",
  };
  //useFormik hook return a object using this obj
  //we can use (the complexities that is hold inside)
  const formik = useFormik({
    initialValues: formInitialValues,
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
        <br />
        <label htmlFor="">Enter Email: </label>
        <input type="text" name="email" onChange={formik.handleChange} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormikForm;
