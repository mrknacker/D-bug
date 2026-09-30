import { useState } from "react"
import { icons } from "../../pages/common/iconList"
import "./IconCard.css"

const IconCard = ({selectedIcon, setSelectedIcon}) => {
        
    return (
    <div className="icon-container">
        
        {icons.map((icon) => (
    
            <icon.icon 
            key={icon.id}
            size={24} 
            className="team-icon"
            onClick={() => setSelectedIcon(icon)}
            />
        ))}
    </div>
    )


}

export default IconCard