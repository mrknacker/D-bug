import { FolderOpen, Plus } from "lucide-react"
import CreateProjectDialog from "./CreateProjectDialog"


const EmptyProject = () => {
  return (
    <main className="empty-state-container">

        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
          <FolderOpen className="empty-state-icon"
          size={80}/>
          <h2 className="empty-state-title">
            Nothing here yet.
          </h2>
          <p className="empty-state-description">
              Every great project starts with a blank slate.<br></br>
              Create your first one and let's get building.
          </p>
        </div>

        <CreateProjectDialog openTrigger={
        <button className="empty-state-CTA">
          <Plus size={18}/>
          Create Project
        </button>}/>
    </main>
  )
}

export default EmptyProject