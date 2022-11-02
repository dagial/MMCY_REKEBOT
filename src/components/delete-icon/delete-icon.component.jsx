import {AiOutlineDelete} from 'react-icons/ai'
import "./delete-icon.style.scss"
import {useState} from 'react'
const DeleteIcon=()=>{
    const [deleteClicked,setDeleteClicked]=useState(false)
    const deleteHandler=()=>{

        setDeleteClicked(true)
    }
    const noHandler=()=>{
        setDeleteClicked(false)
    }
    return(
        <div className="delete-container">
        <div className="delete-icon-container" onClick={deleteHandler}>
            <AiOutlineDelete className="delete-icon"/>
        </div>
       {
        deleteClicked &&  <div className="confirm-delete">
        Are You Sure You Want to delete?
        <br></br>
        <div className='yes-no-container'>
        <span className='delete-yes'>Yes</span>
        <span className='delete-no' onClick={noHandler}>No</span>
        </div>
    </div>

       }
        </div>
    )
}
export default DeleteIcon;