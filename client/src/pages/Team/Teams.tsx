import KPICard from "@/components/KPICard/KPICard"
import EmptyTeam from "./EmptyTeam"
import { getAllTeams } from "@/api/team"
import { teamsKPI } from "./teamsData"
import {  Plus } from "lucide-react"
import { teamTableColumns } from "./teamsData"
import "../Dashboard/Dashboard.css"
import TeamDataTable from "./TeamDataTable"
import CreateTeamDialog from "./CreateTeamDialog"
import { useEffect, useState } from "react"

const Teams = () => {

  const [teams, setTeams] = useState([])





  if(teams.length === 0) return <EmptyTeam/>

  return (
    <div className="dashboard-content-container">

      <header className="dashboard-content-header">
        <h1 className="dashboard-content-title">
          Teams
        </h1>


        {/* CREATE TEAM DIALOG TRIGGER */}
        <CreateTeamDialog openTrigger={
          <button 
          className="dashboard-primary-CTA flex items-center"
          onClick={() => console.log("Create a new team")}>
            <Plus size={16}/>
            Create Team
          </button>
        }>

        </CreateTeamDialog> 

      </header>

      <main className="dashboard-main-content">
      
      <section className="kpi-card-container">

          {teamsKPI.map((kpi) => {
              return (
                  <div key={kpi.id}>
                  <KPICard kpi={kpi}></KPICard>
                  </div>
              )
          })}
      </section>

      <section className="data-table-container">
        <TeamDataTable data={teams} columns={teamTableColumns}/>
      </section>
          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Teams