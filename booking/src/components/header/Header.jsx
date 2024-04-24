import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBed,faPlane,faCar,faTaxi} from "@fortawesome/free-solid-svg-icons"
import "./header.css"

const Header = () => {
    return (
     <div className="header">
        <div className="headerContainer">

        <div className="headerList">    
         <div className="headerListitem">
         <FontAwesomeIcon icon={faBed} />  
         <span>Hotels</span>
          
         <div className="headerListitem">
         <FontAwesomeIcon icon={faPlane} />  
         <span>Stays</span>
         </div>
          
         <div className="headerListitem">
         <FontAwesomeIcon icon={faCar} />  
         <span>flights</span>
         </div>

          
         <div className="headerListitem">
         <FontAwesomeIcon icon={faBed} />  
         <span>Attractions </span>

          
         <div className="headerListitem">
         <FontAwesomeIcon icon={faTaxi} />  
         <span>Airport Hotel</span>
         </div>

         </div>









         </div>
        </div>                      
     </div>
     </div>
    )



}

export default Header
