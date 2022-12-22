import React from "react"
import Title from "./title"
import Icones from "./icones"
import Liste from "./liste"
import InputForm from "./inputForm"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const style={
  div:"w-60 flex justify-between font-bold capitalize text-lg text-center border-2 border-slate-200 rounded-md bg-white p-6 cursor-pointer hover:scale-105 selected-items",
  spanWrapper: "relative rounded-xl table bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-600 via-emerald-500 to-green-700 badge",
  spanFirst: "left relative pl-1 table-cell align-middle  text-sm",
  spanSecond: "right table-cell align-middle pl-3 pr-3  text-sm unselected-items"
}

export default function Todo({list}) {
  return (
    <>
    <div className={style.div}>
       <Title title={list.title} />
       <span className={style.spanWrapper}>
          <span className={style.spanFirst}>0</span>
          <span className={style.spanSecond}>0</span>
       </span>
    </div>
    <hr className="line  h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <Icones />
    {list.todos.map((todo)=>{
      return <Liste key={todo.id} todo={todo}  />
    })}
  
    </>

  )
}