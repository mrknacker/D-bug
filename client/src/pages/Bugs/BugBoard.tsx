import "./Bugs.css"
import { bugs } from '@/assets/assets'
import BugCard from './BugCard'
import "./../Dashboard/Dashboard.css" 
import EmptyBugBoard from "./EmptyBugBoard"

const BugBoard = () => {

  if(bugs.length === 0) return <EmptyBugBoard/>

  return (
    <main>

      <header className="dashboard-content-header">
        <h1 className="dashboard-content-title">Bugs</h1>
      </header>

      <div className="bug-container" >

          {bugs.map((bug) => {
              return (
                  <BugCard key={bug.id} bug={bug}/>
              )
          })}

          
      </div>
    </main>
  )
}

export default BugBoard