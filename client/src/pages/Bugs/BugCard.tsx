
import type { BugCardProps } from "../../../../shared/types/bug/bug";
import { Separator } from "../../../@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "../../../@/components/ui/avatar"
import { Link } from "react-router-dom"
import { CircleAlert, Flag, Info, MessageCircleMore, OctagonAlert, Paperclip,  TriangleAlert } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../@/components/ui/tooltip"

const BugCard = ({bug}: BugCardProps): React.ReactNode => {

  const generateAvatarFallback = (name: string): string => {

    const char = name.split(".").at(0).slice(0,1) + name.split(".").at(-1).slice(0,1) 

    return char.toUpperCase()
  }

  const convertName = (name: string): string => {
    const firstName = name.split(".").at(0).slice(0,1).toUpperCase() + name.split(".").at(0).slice(1,);
    const lastName = name.split(".").at(-1).slice(0,1).toUpperCase() + name.split(".").at(-1).slice(1,);

    return firstName + " " + lastName
  }

  return (
    <div className="bug-card">

        {/** CARD HEADER **/}
        <header className="card-header">

          <div className="card-header-top">

          <Tooltip>
            <TooltipTrigger>
              <p 
              className={`cursor-pointer flex items-center gap-[var(--gap-xs)] ${
                  bug.severity === "critical" ? "critical-severity" : 
                  bug.severity === "high" ? "high-severity" :
                  bug.severity === "medium" ? "medium-severity" :
                  bug.severity === "low" ? "low-severity" : ""}`}>
                
                <Flag size={12}/>
                {bug.severity.toUpperCase()}
              </p>
            </TooltipTrigger>
            <TooltipContent 
              className={`flex items-center gap-[var(--gap-xs)] ${
                  bug.severity === "critical" ? "critical-severity-tooltip" : 
                  bug.severity === "high" ? "high-severity-tooltip" :
                  bug.severity === "medium" ? "medium-severity-tooltip" :
                  bug.severity === "low" ? "low-severity-tooltip" : ""}`}>

              <p className="flex items-center  gap-[var(--gap-xs)]">
                {
                  bug.severity === "critical" ? <OctagonAlert size={14}/> : 
                  bug.severity === "high" ? <TriangleAlert size={14}/> :
                  bug.severity === "medium" ? <CircleAlert size={14}/> :
                  bug.severity === "low" ? <Info size={14}/> : ""}

                { bug.severity === "critical" ? "Requires Immediate Attention" : 
                  bug.severity === "high" ? "Needs Urgent Attention" : 
                  bug.severity === "medium" ? "Should Be Addressed ASAP" :
                  bug.severity === "low" ? "Can Be Addressed Later" : ""}
              </p>
            </TooltipContent>
          </Tooltip>

            <p 
            className={`${
                bug.status === "open" ? "open-bug-status" : 
                bug.status === "in progress" ? "in-progress-bug-status" :
                bug.status === "in review" ? "in-review-bug-status" :
                bug.status === "resolved" ? "resolved-bug-status" :
                bug.status === "reopened" ? "reopened-bug-status" : ""}`}>

              {bug.status.toUpperCase()}
            </p>


          </div>


          <h2 className="bug-title">
            {bug.title}
          </h2>
        </header>

        <main>

          <div className="flex justify-between items-center">
            <p>

              <span 
                className={`${
                  bug.priority === "P1" ? "highest-bug-priority" : 
                  bug.priority === "P2" ? "high-bug-priority" :
                  bug.priority === "P3" ? "medium-bug-priority" :
                  bug.priority === "P4" ? "low-bug-priority" : ""}`}>

                {bug.priority}
              </span>
            </p> 

            <div className="items-center flex gap-[var(--gap-md)]">

              {bug.attachments.length > 1 && (
            
              
              <Tooltip>
                <TooltipTrigger>
                  <Link 
                  to="/bug/attachments"
                  className="comments-link"
                  > <Paperclip className="attachments-link" size={14}/>
                    {bug.attachments.length} 
                  </Link>
                </TooltipTrigger>
                <TooltipContent className={`link-tooltip`}>
                    {bug.attachments.length} <span>Attachments</span>
                </TooltipContent>
              </Tooltip>
            )}
              <Tooltip>
                <TooltipTrigger>
                  <Link 
                  to="/bug/comments"
                  className="comments-link"
                  > <MessageCircleMore size={14}/>
                    {bug.comments.length} 
                  </Link>
              </TooltipTrigger>
                <TooltipContent className={`link-tooltip`}>
                    {bug.comments.length} 
                    <span>{bug.comments.length > 1 ? "Comments" : "Comment" }</span>
                </TooltipContent>
              </Tooltip>
            </div>

          </div>

        </main>

      
      <Separator className={`bug-card-separator`}/>
        <footer className="card-footer">
          <div className="card-label-container">
            {bug.labels.map((label) => (
              <p className="card-label">
                {label}
              </p>
            ))}
          </div>

            <Tooltip>
              <TooltipTrigger>
                <Avatar size="sm">
                  <AvatarImage src="https://github.com/shadcn.png" className="rounded-full"/>
                  <AvatarFallback>
                    {generateAvatarFallback(bug.assignee)}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent className={`link-tooltip`}>
                {convertName(bug.assignee)}
              </TooltipContent>
            </Tooltip>
        </footer>

    </div>
  )
}

export default BugCard