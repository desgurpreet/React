import * as Yup from 'yup';
export const FormSchema=Yup.object({
    name:Yup.string().min(3).max(20).required('Name Is Must'),
    //string,min,max lyi built in error sms aye ge jabb k required lyi custom error sms hai
    //declare custom error sms like min(3,'too short')
    email:Yup.string().email().required('Email is must')
});