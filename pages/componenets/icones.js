import React, {useState} from "react"
import Modal from "react-modal"
import Link from "next/link"
import InputForm from "./inputForm"

const style ={
  wrapper:" flex w-screen  md:justify-between sm:justify-between border-b border-gray-200m-3 px-8 mt-9 text-2xl  ",
}

export default function Icones ({listId,type}) {
  const [open,setOpen] =useState()
  function openModal() {
    setOpen(true)
  }
  function afterOpenModal() {
    
  }
  function closeModal() {
    setOpen(false)
  }

return (
       <div className={style.wrapper}>
        <div>
            <i className="fas fa-plus cursor-pointer " onClick={openModal}></i>
            <Link href="updateTitle"><i className="fas fa-edit ml-4 cursor-pointer edit"></i></Link>
            <Link href=""><i className="fas fa-trash-alt ml-4 cursor-pointer trash"></i></Link>
        </div>
        <div className="">
            <i className="fas fa-check-circle  cursor-pointer"></i>
        
        </div>
       
        <Modal
        ariaHideApp={false} 
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal" >
        <h1 className="text-3xl text-bold">Ajouter une tâche</h1>
        <div className="flex ">
          <InputForm setOpen={setOpen} listId={listId} type={type} />
          <i className="fas fa-times ml-4 cursor-pointer mt-4 justify-between" onClick={closeModal}></i>
        </div>
      </Modal>
     
    </div>
   
  )
}