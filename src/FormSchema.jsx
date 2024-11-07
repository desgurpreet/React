import * as Yup from "yup";
export const FormSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Name Is Must"),
  //string,min,max lyi built in error sms aye ge jabb k required lyi custom error sms hai
  //declare custom error sms like min(3,'too short')
  email: Yup.string().email().required("Email is must"),
  age: Yup.number().min(10).max(50).required("Age is must"),
  password: Yup.string()
    .required("Password Is Must")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Enter Strong Password"
    ),
  cpass: Yup.string()
    .required("Confirm Password Is Must")
    .oneOf([Yup.ref("password"), null]),
  //oneOf for matching password with confirm password
});
