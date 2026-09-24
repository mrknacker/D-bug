import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import OrganizationNavbar from "@/components/OrganizationNavbar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("overview")

    return (

    (<div className={`dashboard-container ${isSidebarCollapsed ? "collapsed" : ""}`}>

        {/* LEFT SIDEBAR */}
        <Sidebar 
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
        selected={selected}
        setSelected = {setSelected}
        />

        {/* RIGHT CONTENT */}
        <main className="main-content">
            <OrganizationNavbar
            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}/>

            <DashboardContent
            selected={selected}
            setSelected = {setSelected}
            />

        </main>

    </div>)

  )
}

export default Dashboard