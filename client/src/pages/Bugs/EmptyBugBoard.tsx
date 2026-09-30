import { BugOff, Plus } from "lucide-react"
import "./BugBoard.css"

const EmptyBugBoard = () => {
  return (
    <main className="empty-state-container">
        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
        <BugOff className="empty-state-icon"
        size={80}/>
        <h2 className="empty-state-title">
            Looks like the bugs took a day off.
        </h2>
        <p className="empty-state-description">
            New bugs will crawl in here as they're reported.
        </p>
        </div>

        <button className="empty-state-CTA">
          <Plus size={18}/>
          Add Bug
        </button>
    </main>
  )
}

export default EmptyBugBoard