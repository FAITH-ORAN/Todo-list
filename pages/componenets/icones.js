import React from "react"
import Link from "next/link"

const style ={
  wrapper:" flex  md:justify-between sm:justify-between m-3  text-2xl  icone-wrapper ",
}

export default function Icones () {
  return (
       <div className={style.wrapper}>
        <div>
            <i className="fas fa-plus cursor-pointer addTodo"></i>
            <Link href="updateTitle"><i className="fas fa-edit ml-4 cursor-pointer edit"></i></Link>
            <i className="fas fa-trash-alt ml-4 cursor-pointer trash"></i>
        </div>
        <div>
            <i className="fas fa-check-circle ml-4 cursor-pointer"></i>
        </div>
    </div>
  )
}