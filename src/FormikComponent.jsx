import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

const FormikComponent = () => {
  //   const [formData, setFormData] = useState({});
  const NewValidations = yup.object({
    name: yup.string().required("Name is must"),
    age: yup.number().min(10).max(50).required("Age is must"),
    pass: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      .required("Pass is must"),
    gender: yup.string().required("Gender is must"),
    hobby: yup.array().min(1, "1 Hobby is must"),
    country: yup.string().required("Country is must"),
    comment:yup.string().max(500).required('Comment is must')
  });
  return (
    <div>
      <Formik
        validationSchema={NewValidations}
        initialValues={{
          name: "",
          age: "",
          pass: "",
          gender: "",
          hobby: [],
          //  '' is replace by [ ] on validation time
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          //   setFormData(values);
        }}
      >
        <Form>
          <label htmlFor="">Enter Name: </label>
          <Field type="text" name="name"></Field>
          <RedErrorMessage name="name" />
          <br />
          <br />
          <label htmlFor="">Enter Age: </label>
          <Field type="number" name="age"></Field>
          <RedErrorMessage name="age" />
          <br />
          <br />
          <label htmlFor="">Enter Password: </label>
          <Field type="password" name="pass"></Field>
          <RedErrorMessage name="pass" />
          <br />
          <br />
          <label htmlFor="">Gender: &nbsp;</label>
          <Field type="radio" name="gender" value="Male" />
          <label htmlFor="">Male</label>&nbsp;&nbsp;
          <Field type="radio" name="gender" value="Female" />
          <label htmlFor="">Female</label>
          <RedErrorMessage name="gender" />
          <br />
          <br />
          <label>Hobbies: &nbsp;</label>
          <Field type="checkbox" name="hobby" value="Writing"></Field>
          <label htmlFor="">Writing &nbsp;</label>
          <Field type="checkbox" name="hobby" value="Reading"></Field>
          <label htmlFor="">Reading &nbsp;</label>
          <Field type="checkbox" name="hobby" value="Sleeping"></Field>
          <label htmlFor="">Sleeping &nbsp;</label>
          <RedErrorMessage name="hobby" />
          <br />
          <br />
          <label htmlFor="">Country: &nbsp;</label>
          <Field name="country" as="select">
            {/* jo element without input field k bnta uss mai "as" us hota hai
            like <select>,<textarea> */}
            <option value="">--Select--</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </Field>
          <RedErrorMessage name="country" />
          <br />
          <br />
          <label htmlFor="">Comments:&nbsp;</label>
          <Field name="comment" as="textarea"></Field>
          <RedErrorMessage name="comment" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* <h1>{JSON.stringify(formData)}</h1> */}
      {/* <h1>{formData.name}</h1> */}
    </div>
  );
};

export default FormikComponent;
