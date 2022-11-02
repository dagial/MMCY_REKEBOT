import "./text-input.style.scss"

const TextInput=({...otherProps})=>{
    return (
<input type="text" className="input-field" {...otherProps} required/>

    )
}
export default TextInput;