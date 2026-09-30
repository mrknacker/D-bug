import { useState } from "react"
import EmptyOrganization from "../Organization/EmptyOrganization"

const Overview = () => {

  const [organization, setOrganization] = useState(null)

  if(!organization){
      return <EmptyOrganization/>
    }

  return (
    <div>

    </div>
  )
}

export default Overview