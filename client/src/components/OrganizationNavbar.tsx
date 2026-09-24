import {
  PanelLeftClose,
  PanelRightClose,
  Search, Bell,
  Menu
} from "lucide-react"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../@/components/ui/tooltip"


const OrganizationNavbar = ({isSidebarCollapsed, setIsSidebarCollapsed}) => {

  const [notifications, setNotifications] = useState(null)

  return (
    <div className="organization-navbar">

        <Tooltip>
          <TooltipTrigger>
            <button 
              onClick={() => setIsSidebarCollapsed(prev => !prev)}>
                
              {isSidebarCollapsed 
              ? <PanelRightClose className="navbar-icon" size={16}/> 
              : <PanelLeftClose className="navbar-icon" size={16}/>}
            </button>
          </TooltipTrigger>
          <TooltipContent className={`tooltip`}>
            {isSidebarCollapsed ? "Show Sidebar" : "Hide Sidebar"}
          </TooltipContent>
        </Tooltip>

        <div className="navbar-actions">
        
          <Tooltip>
            <TooltipTrigger>
              <button className="notification-icon">
                
                {notifications ?  (
                          <>
                          <Bell className="navbar-icon" size={16}/>
                          <div className="h-2 w-2 rounded-full bg-red-500  absolute -top-1 left-3"></div>
                          </>
                        ) : <Bell className="navbar-icon" size={16} /> }
              </button>
            </TooltipTrigger>
            <TooltipContent className="tooltip">
              Show Notifications
            </TooltipContent>

          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <button >
                  <Menu className="navbar-icon" size={16} />       
              </button>
            </TooltipTrigger>

            <TooltipContent className="tooltip">
              <p>Collapse Menu</p>
            </TooltipContent>
          </Tooltip>
    
        </div>
        
    </div>
  )
}

export default OrganizationNavbar