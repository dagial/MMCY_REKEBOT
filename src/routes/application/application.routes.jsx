import ApplicationItem from "../../components/application-item/application-item.component";
import Search from "../../components/search/search.component";
import "./application.style.scss"
import {APPLICATION_DATA} from '../../Data'
import {useState,useEffect} from "react"

const Application=()=>{
    const [applicationData,setApplicationData]=useState(APPLICATION_DATA)
    const [searchList,setSearchList]=useState(applicationData)
    const [searchValue,setSearchValue]=useState('')
    // useEffect(()=>{
    //    const set_application=async()=>{await setApplicationData(APPLICATION_DATA)}
    //    set_application()
    //    console.log("application-data")
    // },[])

    useEffect(()=>{
   
       
        let jobStartsWith=applicationData.filter((apps)=>{
            const search=`^${searchValue}`
            const regx=new RegExp(search,"gi")
            return regx.test(apps.job)|| regx.test(apps.name)
        })
        setSearchList(jobStartsWith)

    },[searchValue,applicationData])
    const searchHandler=(event)=>{
        const srhValue=event.target.value
        setSearchValue(srhValue);
    }

    return(
        <div className="scrollbar-maintain">
        <div className="application-container">
            
            <div className="application-header">Job Applications</div>
            <div className="application-search-container">
            <Search searchHandler={searchHandler} value={searchValue} /></div>
            <div className="application-items-container">
                {searchList.map((applicant)=>{

                return (
                <div className="application-item" key={applicant.id}>
                <ApplicationItem applicant={applicant}/>
                </div>)
                })}
           
            </div>
            </div>
        </div>
    )
}

export default Application;