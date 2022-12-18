import React,{useState} from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"



const SignupSchema = Yup.object().shape({
  description: Yup.string()
  .min(2, "Too Short!")
  .max(20, "Too Long!")
})


export default function Title() {
  const [open, setOpen]= useState()

  
return (
    <div>
      {open ? (
        <Formik 
          initialValues={{
         description: "Php",
          
        }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values)
          }}
       >
          {({ errors, touched }) => (
            <Form>
              <Field name="description" className="border-none focus:outline-0 w-12"  />
              {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            </Form>
          )}

        </Formik>
        ):(
          <div onClick={()=>setOpen(!open)}>Php</div>
      )}
       
       
    </div>
  )
}