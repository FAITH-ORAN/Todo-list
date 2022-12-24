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

export default function InputForm({setOpen,listId,type}) {
  const {addMoreTodo,addMoreList}= useContext(storeApi)
  const [title,setTitle]=useState("")

  const handleOnChange=(e)=>{
    setTitle(e.target.value)
  }

  const handleBtnConfirm=(e)=>{
    if(type!="todo") {
    e.preventDefault()
    addMoreTodo(title,listId)
    setTitle("")
    setOpen(false)
    }
    else{
      addMoreList(title)
      setTitle("")
      setOpen(false)
    }
  }
  const handleBlur=()=>{
    setOpen(false)
    setTitle("")
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
              value={title}
              placeholder={type==="todo"? "entrez une todo liste":"entrez une tâche"}
              />
            <Button onClick={handleBtnConfirm}>{type==="todo"? "+ todo": "+ tâche"}</Button> {/* click on button doesnt work !! please click on enter */ }
          </Form>
        </Formik>
    </div>
  )
}