import React from 'react'
import { Building2, Plus } from 'lucide-react'
import CreateOrganizationForm from './CreateOrganizationForm'

const EmptyOrganization = () => {
  return (
    <main className="empty-state-container">
        <div className="items-center flex flex-col justify-end w-full gap-[var(--gap-md)]">
        <Building2 className="empty-state-icon"
        size={80}/>
        <h2 className="empty-state-title">
            Looks like nobody's started a club yet.
        </h2>
        <p className="empty-state-description">
            Create an organization and give your team a place to call home.
        </p>
        </div>

        <CreateOrganizationForm openTrigger={
        <button className="empty-state-CTA">
          <Plus size={18}/>
          Create Organization
        </button>
        }>

        </CreateOrganizationForm>
    </main>
  )
}

export default EmptyOrganization