// import { useState } from "react"

import CrossIcon from "../icons/CrossIcon"


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
        </span>
    </div>
    </div>
    }
</div>

function Input({onChange, placeholder} : {onChange: () => void})
{
    return <div>
        <input placeholder={placeholder} 
        type="text" 
        className="px-4 py-2 border rounded"
        onChange={onChange}
        />
        </div>
}
}
export default CreateContentModal