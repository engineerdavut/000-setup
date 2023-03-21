import { useFormik } from "formik"
import * as Yup from "yup"

export const FormikUse=()=>{
    const formik=useFormik({
        initialValues : {
            username:'',
            password:'',
            email:''
        },
        validationSchema:Yup.object(
            {
                username:Yup.string()
                .min(8,'en az 8 karakter olmalı')
                .required('Gerekli'),
                email:Yup.string()
                .email('Geçerli eposta girin')
                .required('Gerekli'),
                password:Yup.string()
                .min(8,'en az 8 karakter olmalı')
                .required('Gerekli')
            }
        ),
        onSubmit: values=>{
            alert( `${formik.values.username} ${formik.values.password}`)
        }

    })
    return(
        <>
        <h1>Formik</h1>
        <form onSubmit={formik.handleSubmit}>
            Kullanıcı: 
            <input id="username" type="text"name="username" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.onBlur}></input>
            {formik.errors.username}<br/>
            Parola: 
            <input id="password" type="text"name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.onBlur}></input>
            {formik.errors.password}<br/>
            Email:
            <input id="email" type="text"name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.onBlur}></input>{formik.errors.email}<br/>
            <button type="submit">Gönder</button>

        </form>
        </>
    )
}