import React from "react"


const style ={
  li : "w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 li",
  div : "flex items-center pl-3",
  input : "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500",
  label : "py-3 ml-2 w-full  text-gray-900 dark:text-gray-300"
}


export default function Liste({todo}) {
return (
      
        <div className={style.li}>
          <div className={style.div}>
            <input type="checkbox" className={style.input}/>
            <label className={style.label}>{todo.title}</label>
          </div>
        </div>
      
    )
}