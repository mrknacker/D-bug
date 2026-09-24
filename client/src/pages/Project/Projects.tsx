import EmptyProject from "./EmptyProject"
import {projects} from "../../assets/assets"
import { Plus } from "lucide-react"
import KPICard from "@/components/KPICard/KPICard"
import { projectsKPI, projectTableColumns } from "./projectsData"
import ProjectDataTable from "./ProjectDataTable"
import CreateProjectDialog from "./CreateProjectDialog"

const Projects = () => {

  if(projects.length !== 0) return <EmptyProject/>

  return (
    <div className="dashboard-content-container">

      <header className="dashboard-content-header">
        <h2 className="dashboard-content-title">
          Projects
        </h2>

        <CreateProjectDialog openTrigger={
          <button 
          className="dashboard-primary-CTA flex items-center"
         >
            <Plus size={16}/>
            Create Project
          </button>
        }/>

      

      </header>

      <main className="dashboard-main-content">
      
        <section className="kpi-card-container">
          {projectsKPI.map((kpi) => {
            return <KPICard kpi={kpi}></KPICard>
          })}

        </section>

        <section className="data-table-container">
          <ProjectDataTable data={projects} columns={projectTableColumns}/>
        </section>
          
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Projects