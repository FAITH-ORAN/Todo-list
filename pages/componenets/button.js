import clsx from "clsx"
import React from "react"

const variants = {
  primary: "bg-green-500 text-white hover:bg-green-500 /90 hover:scale-105  text-center hidden",
  add: "border-2 border-slate-200 rounded-md bg-white p-6 cursor-pointer hover:scale-105",
 
}

const sizes = {
    medium: "inline-block px-4py-2.5 absolute ml-80 mt-2 leading-tight",
    large : "inline-block px-7 py-3 mt-3  rounded-full leading-tight",
    rounded :"w-3 h-3 rounded-full"
}

export default function Button(props) {
  const { variant = "primary", size = "large", ...otherProps } = props

  return (
    <button className={clsx(sizes[size], variants[variant])}
      {...otherProps} />
  )
}

;
