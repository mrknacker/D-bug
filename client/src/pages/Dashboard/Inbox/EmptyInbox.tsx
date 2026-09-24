import {  Inbox, Plus } from "lucide-react"


const EmptyInbox = () => {
  return (
    <main className="empty-state-container">

        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
        <Inbox className="empty-state-icon"
        size={80}/>
        <h2 className="empty-state-title">
            Inbox is clear.
        </h2>
        <p className="empty-state-description">
            Nothing has made it into the inbox yet.
        </p>
        </div>
    </main>
  )
}

export default EmptyInbox