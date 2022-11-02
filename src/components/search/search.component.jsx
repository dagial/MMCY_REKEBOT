import {CiSearch} from "react-icons/ci"
import {useState} from "react"
import "./search.style.scss"
const Search=({searchHandler , value})=>{
    const [searchIcon,setSearchIcon]=useState(false)
    const searchClickHandler=()=>{
        setSearchIcon(true)
    }
    
    
    return(
        <div className="search-container">
              
            <input type='text' placeholder="Search" value={value} className={searchIcon ? "search-input-animation":"search-input"} onChange={searchHandler}/>
            <CiSearch className={searchIcon?"search-icon-animation":"search-icon"} onClick={searchClickHandler} />
          
            
        </div>
    )
}
export default Search