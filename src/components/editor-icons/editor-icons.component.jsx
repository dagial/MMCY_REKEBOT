import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import "./editor-icons.style.scss"
import {Link} from 'react-router-dom'

const EditorIcons=({step})=>{

    return(
        <div className="editor-icons-container">
             <Link to={`/EditJob/${step.title}`} state={step}><AiOutlineEdit className='edit-icon scale-transform'/></Link>
            {/* <AiOutlineDelete className='delete-icon scale-transform'/> */}
            
        </div>
     
    )
}

export default EditorIcons;