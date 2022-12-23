import clsx from "clsx"
import React from "react"


const variants = {
  primary: "bg-green-500 text-white hover:bg-green-500 /90 hover:scale-105  text-center",
 
}

const sizes = {
    medium: "inline-block px-6 py-2.5 rounded-full leading-tight",
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
