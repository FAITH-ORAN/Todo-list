import React,{useState,useContext} from "react"
import Button from "./button"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import storeApi from "../utils/storeApi"

const SignupSchema = Yup.object().shape({
  description: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
})


export default function InputForm({setOpen,listId}) {
  const {addMoreTodo}= useContext(storeApi)
  const [todoTitle,setTodoTitle]=useState("")

  const handleOnChange=(e)=>{
    setTodoTitle(e.target.value)
  }

  const handleBtnConfirm=(e)=>{
    e.preventDefault()
    addMoreTodo(todoTitle,listId)
    setTodoTitle("")
    setOpen(false)
  }
  const handleBlur=()=>{
    setOpen(false)
    setTodoTitle("")
  }


return (
    <div>
      
      <Formik 
          initialValues={{
         description: "",
        }}
        validationSchema={SignupSchema}
       >
          <Form onChange={handleOnChange} >
            <Field id ="description" name="description" className=" bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-lg focus:border-blue-500 block mt-3 ml-2  p-2.5"
              onBlur={handleBlur}
              value={todoTitle}
              />
            <Button onClick={handleBtnConfirm}>Ajouter</Button> {/* click on button doesnt work !! please click on enter */ }
          </Form>
        </Formik>
    </div>
  )
}