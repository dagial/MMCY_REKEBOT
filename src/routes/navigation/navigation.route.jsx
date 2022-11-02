import "./navigation.style.scss"
import { Outlet,useLocation ,Link} from "react-router-dom";



const Navigation=()=>{
    const {pathname}=useLocation();
    const switchLinks=(pathname)=>{
        switch(pathname){                
            case "/":
                return (<ul>
                    <Link  to="application"> <li className="link-animate">Application</li></Link>
                </ul>)
             case "/application":
                return (<ul>
                    <Link to=''><li className="link-animate">Job</li></Link>
                </ul>)
            default :
                    return (<ul>
                        <Link  to="application"> <li className="link-animate">Application</li></Link><br></br>
                        <Link to=''><li className="link-animate">Job</li></Link>
                     </ul>)
        }
    }
    return (
        <div className="nav">
        <div className="navigation-container">
                <div className="nav-header">
        <span className="mmcy-nav">MMCY|</span><span className="tech-nav">Tech </span>
        </div>
        <div className="nav-links-container">
        {
            switchLinks(pathname)
        }
        <div className="logout">
            <a>Logout</a>
        </div>
        </div>
        </div>
        <div className="outlet">
        <Outlet/></div>
        </div>
    )
}
export default Navigation;