import './create-icon.style.scss'
import {AiOutlinePlus} from 'react-icons/ai'

const CreateIcon=({buttonType})=>{
    
    return(

        <div className={`${buttonType? buttonType: "fill"}`}>
          <AiOutlinePlus className={`plus-icon `}/>
        </div>
    )
}

export default CreateIcon;