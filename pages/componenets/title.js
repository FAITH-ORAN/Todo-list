import React,{useState} from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  description: Yup.string()
  .min(2, "Too Short!")
  .max(20, "Too Long!")
})

export default function Title({title}) {
  const [open, setOpen]= useState()
  const handleValue=(e)=>{
    console.log(e.target.value)
  }
 
return (
    <div onClick={handleValue}>
      {open ? (
        <Formik 
          initialValues={{
         description: "",
          
        }}
          validationSchema={SignupSchema}
        
       >
          {({ errors, touched }) => (
            <Form>
              <Field  name="description" className="border-none focus:outline-0 w-12" 
              onBlur={()=>setOpen(!open)}  />
              {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            </Form>
          )}

        </Formik>
        ):(
          <div onClick={()=>setOpen(!open)}>{title}</div>
      )}
    </div>
  )
}