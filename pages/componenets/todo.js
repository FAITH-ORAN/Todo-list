import React from "react"
import Title from "./title"
// const handleClick = (e) => {
//   e.preventDefault()
//   console.log(e.target.childNodes[0].textContent)
// }

const style={
  div:"w-60 flex justify-between font-bold capitalize text-lg text-center border-2 border-slate-200 rounded-md bg-white p-6 cursor-pointer hover:scale-105 selected-items",
  spanWrapper: "relative rounded-xl table bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-600 via-emerald-500 to-green-700 badge",
  spanFirst: "left relative pl-1 table-cell align-middle  text-sm",
  spanSecond: "right table-cell align-middle pl-3 pr-3  text-sm unselected-items"
}

export default function Todo(props) {
  return (
    <div    className={style.div}>
       <Title />
       <span className={style.spanWrapper}>
          <span className={style.spanFirst}>0</span>
          <span className={style.spanSecond}>0</span>
       </span>
    </div>
  )
}