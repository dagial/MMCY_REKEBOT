
import './form.style.scss'

const FormInput=({children,label,icon,...otherprops})=>{
    return (
        <div className="group">
            
            <input className="form-input" {...otherprops}></input>
            {icon && <span className='icon'>{icon}</span>}
            <label className={`${otherprops.value ? 'shrink' : ''} form-input-label`}>{label}</label>
        </div>
    )

}
export default FormInput;