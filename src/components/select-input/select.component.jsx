import "./select.style.scss"
import {FaAngleDown} from "react-icons/fa"
import {useState,useEffect} from 'react'
import { capitalize } from "../../utils"

const types={
  file_types:["audio","file","picture","text","video"],
  status_types:['approved',"disapproved","active","inactive"]

}

const SelectInput=({selectInputHandler,index,selected,selected_type})=>{
   
      const [toggleSelect,setToggleSelect]=useState(false)
     
      const clickHandler=()=>{
        setToggleSelect(!toggleSelect)
      }
      
    return(

        <div className="select">
            <div onClick={clickHandler} className='selected-container'>
            
            <span className='selected'>{selected ?capitalize(selected): 'type'}</span><FaAngleDown className={`${toggleSelect?'select-icon-reverse':''} select-icon`}/>
            </div>
            
            <div className="selectables-container">
            {toggleSelect && types[selected_type].map((selectable,i)=>{
                return (
                <div className='selectable-container' key={i} >
                <input type='radio' className="radio-button" onClick={clickHandler} onChange={(event)=>selectInputHandler(event,index)} name="categories" value={selectable} id={selectable} required/>
                <label htmlFor={selectable} >{capitalize(selectable)}</label>
                </div>)
            })}
            </div>
            </div>

    )
}
export default SelectInput