import { LoaderCircle, MoveRight, Plus, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../../@/components/ui/dialog"
import "../common/CreateDialog.css"
import { Input } from "../../../@/components/ui/input"
import { Textarea } from "../../../@/components/ui/textarea"
import { useEffect, useState } from "react"
import type { CreateTeamProps, Team } from "../../../../shared/types/team/team"
import api from "../../config/axios"
import type { FormStatus } from "../types/form"
import {toast} from "sonner"
import {createTeam} from "../../api/team"
import React from "react"


const CreateTeamDialog = ({openTrigger}) => {

    
    let teamNameMaxLength = 50;
    let teamDescriptionMaxLength = 300;
    const [error, setError] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [formData, setFormData] = useState<CreateTeamProps>({
        name: "",
        description : ""
    })

    const [formStatus, setFormStatus] = useState<FormStatus>("idle")

    /* VALIDATION */
     
    const validateFormData = (formData: CreateTeamProps) : boolean => {

        if(!formData.name.trim()){
            setFormStatus("idle")
            setError("Team name is required")
            return false;
        }

        return true;
    }

    const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>): Promise<Team | undefined> => {
        e.preventDefault(); 
    
       try{ 
        setFormStatus("submitted");
        console.log("Setting isCreating to true")


        /* VALIDATING  */
     
        if(!validateFormData(formData)) return;

        console.log("Creating the team")
        const team = await createTeam(formData)
        console.log("Created the team")
        console.log(team);
        
        console.log("Set formstatus -> submitted")
        setFormStatus("success");
        
        return team;

    }catch(error: any){
        setFormStatus("error")
        console.log(error)
        toast.error(error.response?.data?.message || "Something went wrong" )

    }finally{
        setError("")
        setFormStatus("idle")
        setFormData(prev => (
            {...prev, 
                name: "",
                description: ""
            }
        ))
    }
        
    }

    console.log(error)

    console.log(formData)
 
  return (
    <Dialog >
    <DialogTrigger >
        {openTrigger}
    </DialogTrigger>

    <DialogContent className={`sm:max-w-xl  dialog-box  `}>
        
       <div className="
       flex flex-col">

            <DialogHeader className="dialog-header">
                <DialogTitle className="dialog-title">
                    Create a new team
                </DialogTitle>

                <DialogClose/>
                
            </DialogHeader>

            <h3 className="form-title">
                Create a dedicated space for your team to manage its projects, bugs, and members in one place.
            </h3>
        </div>
                
        <div className="h-full flex  flex-col">

            <form 
            className="create-form"
            onSubmit={handleFormSubmit}
            >

                <section className="form-input-group">

                    {/* TEAM Name INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Name
                            <span className="text-red-500 font-bold"> *</span>
                        </label>
                        <Input 
                        placeholder="Frontend" 
                        className="form-input" 
                        value={formData.name}
                        required
                        onChange={(e) => {
                            setError("")
                            setFormData(prev => (
                            {   ...prev,
                            name: e.target.value
                            }
                            ))
                        }}
                        maxLength={teamNameMaxLength}
                        />
                        {error && <p className="input-error">
                            {error}
                        </p>}
                        {formData.name && 
                        (
                        <p className="input-info">
                            { teamNameMaxLength - (formData.name?.length)} characters remaining
                        </p>
                        )
                        }
                    </div>

                        {/* TEAM Description INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Description (Optional)
                        </label>
                        <Textarea 
                        value={formData.description}
                        onChange={(e) => {
                            setFormData(prev => (
                            {   ...prev,
                            description: e.target.value
                            }
                            ))
                        }}
                        className="form-input"
                        maxLength={teamDescriptionMaxLength}
                        />
                        {formData.description && 
                        (
                        <p className="input-info">
                            { teamDescriptionMaxLength - (formData.description?.length)} characters remaining
                        </p>
                        )
                        }
                    </div>

                          {/* TEAM Description INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Description (Optional)
                        </label>
                        <Textarea 
                        value={formData.description}
                        onChange={(e) => {
                            setFormData(prev => (
                            {   ...prev,
                            description: e.target.value
                            }
                            ))
                        }}
                        className="form-input"
                        maxLength={teamDescriptionMaxLength}
                        />
                        {formData.description && 
                        (
                        <p className="input-info">
                            { teamDescriptionMaxLength - (formData.description?.length)} characters remaining
                        </p>
                        )
                        }
                    </div>

                </section>
                
                <div className="btn-container">

                      <button 
                      className="cancel-btn" 
                      onClick={(e) => 
                      {
                        e.preventDefault();
                        setFormStatus("idle")
                        setError("")
                        setFormData(prev => (
                            {...prev, 
                                name: "",
                                description: ""
                            }
                        ))
                    
                    }
                      }>
                        Cancel
                    </button>

                    <button 
                    type="submit"
                    className="submit-btn flex gap-[var(--gap-sm)] items-center justify-center"
                    disabled={formStatus === "submitted"}

                    >
                        {formStatus === "submitted" ? (
                            <>
                            <p>Creating your team</p>
                            <LoaderCircle size={18} className="animate-spin"/>
                            </>
                        ) :
                        "Create my team"}

                    </button>

                </div>
            </form>

        </div>
    </DialogContent>
    </Dialog>
  )
}

export default CreateTeamDialog