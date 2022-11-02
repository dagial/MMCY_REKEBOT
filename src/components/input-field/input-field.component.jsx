import SelectInput from "../select-input/select.component"
import "./input-field.style.scss"
import TextInput from "../text-input/text-input.component"
import  {AiOutlineMinusCircle} from "react-icons/ai"

const InputFields=({label,step,textInputHandler,selectInputHandler,minusIcon})=>{
    let {text,type}=step;
   
    return (
        <div className="input-fields-container">
            <label htmlFor="step 1">Step {label+1}</label>
            <div className="input-container">
   
       <TextInput value={text} onChange={(event)=>textInputHandler(event,label)} />
        <SelectInput selectInputHandler={selectInputHandler} index={label} selected={type} selected_type="file_types"/>
        </div>
        </div>
    )
}
export default InputFields;