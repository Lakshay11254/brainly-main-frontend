// import { useState } from "react"

import CrossIcon from "../icons/CrossIcon"
import Button from "./Button"
import Input from "./Input"


function CreateContentModal({ open, onClose   }) {
  return  <div>
  {  open && <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-40 ">
    <div className="flex flex-col justify-center">
        <span className="bg-white opcaity p-4 rounded"> 
            <div className="flex">
                <div onClick={onClose} className="cursor-pointer">
                <CrossIcon />
                </div>
               
            </div>
            <div>
                <Input  placeholder="Title"/>
                <Input  placeholder="Link"/>
            </div>
            <div>
                <Button variant="primary" text="Submit"/>
            </div>
        </span>
    </div>
    </div>
    }
</div>
}

export default CreateContentModal