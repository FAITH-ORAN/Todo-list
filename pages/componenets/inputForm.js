import React from "react"
import Button from "./button"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  description: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
})


export default function InputForm({setOpen}) {
  return (
    <div>
      
      <Formik 
          initialValues={{
         description: " test",
          
        }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values)
          }}
       >
          {({ errors, touched }) => (
            <Form>
              <Field name="description" className=" bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-lg focus:border-blue-500 block mt-3 ml-2  p-2.5"
                onBlur={()=>setOpen(false)}
                />
              {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            </Form>
          )}

        </Formik>
        <div className="mt-3">
            <Button onClick={()=>setOpen(false)}>Ajouter</Button>
            
        </div>
    </div>
  )
}

;
