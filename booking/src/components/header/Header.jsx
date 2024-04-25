import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBed,faPlane,faCar,faTaxi} from "@fortawesome/free-solid-svg-icons"
import "./header.css"

const Header = () => {
    return (
     <div className="header">
        <div className="headerContainer">

        <div className="headerList">    
         <div className="headerListitem active">
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
        <h1 className="headerTitle">A lifetime of discounts? its a genius</h1>
        <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
        <button className="headerBtn">Sign In / Register</button>
         </div>









         </div>
        </div>                      
     </div>
     </div>
    )



}

export default Header
