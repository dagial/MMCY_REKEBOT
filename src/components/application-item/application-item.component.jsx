import {CgSoftwareDownload} from 'react-icons/cg'
import "./application-item.component.scss"
import { capitalize } from '../../utils'

const ApplicationItem=({applicant})=>{
    const {name,job}=applicant
    return (
    <div className="application-item-container">

        <div className="applicant">
        {capitalize(name)} | {capitalize(job)}
        </div>
        <CgSoftwareDownload className='applicant-icon'/>


    </div>)
}
export default ApplicationItem;