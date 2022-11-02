import CreateIcon from "../../components/create-icon/create-icon.component";
import JobItem from "../../components/job-item/job-item.component";
import "./job.style.scss"
import { Link } from "react-router-dom";
import {DATA} from "../../Data";

const Jobs=()=>{
    return (
        <div className="jobs-container">
            <h1 className='jobs-title'>Jobs</h1>
            <div className="create-job">
                <span>Create Job </span> <Link to="createjob"> <CreateIcon/> </Link>
            </div>
            <div className="jobs-list">
           { DATA.map((step,i)=>{

            return (
            
            
            <div className="jobs-item" key={i}><JobItem step={step}/></div>
            
            )
           })}</div>
        </div>
    )
}
export default Jobs;