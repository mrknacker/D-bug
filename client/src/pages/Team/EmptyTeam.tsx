import { FolderOpen, Plus, UserRoundGroup } from "lucide-react"
import CreateTeamDialog from "./CreateTeamDialog"

const EmptyTeam= () => {
  return (
    <main className="empty-state-container">

        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
          <UserRoundGroup className="empty-state-icon"
          size={80}/>
          <h2 className="empty-state-title">
            It's just you and the bugs.
          </h2>
          <p className="empty-state-description">
            Create a team to bring some backup.<br></br>
          </p>
        </div>

        <CreateTeamDialog 
        openTrigger={
          <button className="empty-state-CTA">
            <Plus size={18}/>
            Create Team
          </button>}>

        </CreateTeamDialog>
    </main>
  )
}

export default EmptyTeam