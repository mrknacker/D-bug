import "./Sidebar.css"
import DarkLogo from "../../assets/DarkLogo.png"
import { ChevronsUpDown, EllipsisVertical, Moon, Sun } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../@/components/ui/avatar"
import SidebarFooterMenu from "./SidebarFooterMenu"
import { Link } from "react-router-dom";
import { 
  sidebarOrganizationItemsList, 
  sidebarBugItemsList,
  sidebarWorkspaceItemsList
} from "./sidebarData.ts"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../@/components/ui/collapsible"
import { useState } from "react"


const Sidebar = ({isSidebarCollapsed, setIsSidebarCollapsed, selected, setSelected}) => {


  const user = {
  id: "usr_001",
  name: "Aarav Sharma",
  username: "aarav",
  email: "aarav@dbug.dev",

  teams: [
    {
      id: "team_001",
      name: "Frontend",
      role: "member",
    },
    {
      id: "team_004",
      name: "Core",
      role: "lead",
    },
  ],

  role: "Frontend Developer",
  status: "active",

  stats: {
    assignedBugs: 12,
    openBugs: 7,
    resolvedBugs: 34,
  },

  workload: {
    current: 7,
    capacity: 10,
  },

  lastActive: "2 minutes ago",
}

  const [openMenu, setOpenMenu] = useState<string | null>(null)


  return (
    <>
    {!isSidebarCollapsed && <div className="sidebar">
      
      {/* SIDEBAR HEADER */}
      <header className="sidebar-header">

        <Link to="/">
          <img 
          src={DarkLogo} 
          alt="logo" 
          className="logo"/>
        </Link>

        <button>
          <Sun className="navbar-icon" size={16}/>
        </button>
      </header>


      {/* SIDEBAR MAIN */}
      <main className="sidebar-main">

        <Collapsible 
        open={openMenu === "organization"} 
        onOpenChange={(open) => {
          setOpenMenu(open ? "organization" : null)

        }}>
        <div className="sidebar-links-container">

          <CollapsibleTrigger className={`collapsible-menu-trigger`}>
            <h3>
              ORGANIZATION
            </h3>
            
            <ChevronsUpDown className="" size={15}/>

          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <ul className="organization-links">
            {sidebarOrganizationItemsList.map((item) => {
              return (
                <li 
                className="organization-item"
                onClick={() => {
                  setSelected(item.link)
                }}
                >
                  <item.icon color="white" size={16}/>
                  {item.title}
                </li>
              )
            })}
            </ul>
          </CollapsibleContent>
        </div>
        </Collapsible>
          
        <Collapsible         
        open={openMenu === "bugs"} 
        onOpenChange={(open) => {
          setOpenMenu(open ? "bugs" : null)

        }}>
          <div className="sidebar-links-container">
          <CollapsibleTrigger className={`collapsible-menu-trigger`}>
            <h3>
              BUGS
            </h3>
            
            <ChevronsUpDown size={15}/>

          </CollapsibleTrigger>
            
          <CollapsibleContent>
            <ul className="organization-links">
            {sidebarBugItemsList.map((item) => {
              return (
                <li 
                className="organization-item"
                onClick={() => {

                  setSelected(item.link)
                }}
                >
                  <item.icon color="white" size={16}/>
                  {item.title}
                </li>
              )
            })}
            </ul>
          </CollapsibleContent>

          </div>

        </Collapsible>

        <Collapsible        
        open={openMenu === "workspace"} 
        onOpenChange={(open) => {
          setOpenMenu(open ? "workspace" : null)

        }}>
        <div className="sidebar-links-container">

          <CollapsibleTrigger className={`collapsible-menu-trigger`}>
            <h3>
              WORKSPACE
            </h3>
            
            <ChevronsUpDown size={15}/>

          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <ul className="organization-links">
            {sidebarWorkspaceItemsList.map((item) => {
              return (
                <li 
                className="organization-item"
                onClick={() => {

                  setSelected(item.link)
                }}
                >
                  <item.icon color="white" size={16}/>
                  {item.title}
                </li>
              )
            })}
            </ul>
          </CollapsibleContent>

        </div>
        </Collapsible>
        

      </main>


      {/* SIDEBAR FOOTER */}

      <footer className="sidebar-footer">

        <SidebarFooterMenu 
        openTrigger={
        <button 
        className="sidebar-footer-menu-trigger"
        onClick={() => console.log("Button clicked")}
        >
          <div className=" w-full flex gap-[var(--gap-sm)]">
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" className="rounded-sm"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col  justify-center items-start">
              <h3 >{user.name}</h3>
              <p className="text-[var(--text-secondary)]">{user.email}</p>
            </div>

          </div>

          <ChevronsUpDown color="white" size={18}/>
        </button>
        }/>

      </footer>

    </div>}
    </>
  )
}

export default Sidebar