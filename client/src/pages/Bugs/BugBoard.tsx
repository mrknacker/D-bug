
import { bugs } from '@/assets/assets'
import BugCard from './BugCard'
import "./../Dashboard/Dashboard.css" 
import EmptyBugBoard from "./EmptyBugBoard"
import "./BugBoard.css"
import { useRef, useState } from "react"
import { BugBoarColumnPropsData } from './bugBoardData'
import type { BugCardData } from '../../../../shared/types/bug/bug'

const BugBoard = () => {

  const [draggedCard, setDraggedCard] = useState<BugCardData | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  if(bugs.length === 0) return <EmptyBugBoard/>

  const filterBugs = (filter: string) => {
    const filteredBugs= bugs.filter((bug) => {
      return bug.status === filter
    })

    return filteredBugs;
  }


  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsHovering(true)

  }
  const handleonDrop = (e) => {
    e.preventDefault()  

  }

  console.log(draggedCard)
  return (
    <main  className="bug-board">

      <header className="dashboard-content-header">
        <h1 className="dashboard-content-title">BugBoard</h1>
      </header>

      <section className="bugboard-container">

             
        {BugBoarColumnPropsData.map((bugBoardColumn) => (

          <div 
          key={bugBoardColumn.id} 
          className={`bugboard-column ${isHovering ? "hover-over" : ""}`}
          onDragEnter={handleDragEnter}
          onDrop={handleonDrop}
          >
            <div className="bugboard-column-header">
              <div className='flex items-center gap-[var(--gap-sm)]'>
                <bugBoardColumn.icon size={16} className={`${bugBoardColumn.iconColor}`}/>
              <h3 className="bugboard-column-title">{bugBoardColumn.title}</h3>
              
              </div>
              <p className={`bugcount ${bugBoardColumn.className}`}>
                  {filterBugs(`${bugBoardColumn.filter}`).length}
                </p>
            </div>

            <div 
            className="bugcard-container"

            
            >
                {filterBugs(`${bugBoardColumn.filter}`).map((bug) => (
                  <BugCard 
                  key={bug.id}
                  setDraggedCard={setDraggedCard}
                  bug={bug
                    
                  }/>
                ))}
            </div>
        </div>
      ))}
      </section>

      
    </main>
  )
}

export default BugBoard





/*

*/