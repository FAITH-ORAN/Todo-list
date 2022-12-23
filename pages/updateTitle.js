import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Link from "next/link"

const SignupSchema = Yup.object().shape({
  description: Yup.string()
  .min(2, "Too Short!")
  .max(20, "Too Long!")
})

export default function UpdateTitle() {
  return(
      <div>
        <div className="flex justify-between ml-3 mr-3">
          <h1 className="text-3xl capitalize mt-3">Edit project</h1>
          <Link href="/"><span className="cursor-pointer ">X</span></Link>
        </div>

        <Formik 
          initialValues={{
         description: " ",
          
        }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values)
          }}
       >
          {({ errors, touched }) => (
            <Form>
              <Field name="description" className=" bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-lg focus:border-blue-500 block mt-3 ml-2  p-2.5"  />
              {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            </Form>
          )}

        </Formik>
      </div>
  )
}