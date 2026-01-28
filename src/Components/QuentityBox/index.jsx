import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import React, { useState } from "react";
const QuentityBox = () => {

    const [inputVal,setInputVal]=useState(1)
    const plus=()=>{
        setInputVal(inputVal+1)
    }
    const minus=()=>{
        if(inputVal>1){
            setInputVal(inputVal-1)
        }
    }
    return(
        <div className="quantity-dropdown d-flex align-items-center">
        <Button onClick={minus}><FaMinus /></Button>
        <input type="text" className="form-control" value={inputVal} />
        <Button onClick={plus}><FaPlus /></Button>
      </div>
    )
}
export default QuentityBox; 