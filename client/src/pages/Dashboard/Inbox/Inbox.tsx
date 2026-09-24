import { inboxMessages } from "../../..//assets/assets"
import EmptyInbox from "./EmptyInbox"

const Inbox = () => {


  if(inboxMessages.length === 0) return <EmptyInbox/>

  return (
    <main>

      <header className="dashboard-content-header">
        <h1 className="dashboard-content-title">Inbox</h1>
      </header>

      <div className="bug-container" >

          {inboxMessages.map((message) => {
              return (
                <div key={message.id}>
                    {message.message}
                </div>
              )
          })}

          
      </div>
    </main>
  )
}

export default Inbox