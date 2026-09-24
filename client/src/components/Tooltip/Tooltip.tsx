import "./Tooltip.css"

export const Tooltip = ({children}) => {
  return (
      <div className="tooltip">
        {children}
      </div>
  )
}

export const TooltipTrigger = ({children}) => {
  return (
    <div className="tooltip-trigger">
      {children}
    </div>
  )
}

export const TooltipContent= ({children}) => {
  return (
    <div className="tooltip-content">
      {children}
    </div>
  )
}