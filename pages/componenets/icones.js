import React, {useState} from "react"
import Modal from "react-modal"
import Link from "next/link"
import InputForm from "./inputForm"

const style ={
  wrapper:" flex  md:justify-between sm:justify-between m-3  text-2xl  icone-wrapper ",
}

export default function Icones ({listId}) {
  const [open,setOpen] =useState()
  function openModal() {
    setOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
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
        <div>
            <i className="fas fa-check-circle ml-4 cursor-pointer"></i>
        </div>
        <Modal
        ariaHideApp={false} 
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal" >
        <h1 className="text-3xl text-bold">Ajouter une tâche</h1>
        <div className="flex ">
          <InputForm setOpen={setOpen} listId={listId} />
          <i className="fas fa-times ml-4 cursor-pointer mt-4 justify-between" onClick={closeModal}></i>
        </div>
      </Modal>
    </div>


    
      
   
  )
}