import EditorIcons from "../editor-icons/editor-icons.component";
import './job-item.style.scss'
import { Link } from "react-router-dom";

const JobItem=({step})=>{
    const {title,steps,status}=step
    return (
    <div className="job-item-container">
        <div className="job-icons">
        <EditorIcons step={step}/></div>
         <Link to={`${title}`} state={{step}}> <h2>{title}</h2></Link>
        <small>{steps.length-1} steps</small>
        <span className={`status ${status}`}>{status}</span>

    </div>)
}
export default JobItem;
