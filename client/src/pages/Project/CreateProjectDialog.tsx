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
import { useState } from "react"
import "./Project.css"


const CreateProjectDialog = ({openTrigger}) => {

    let projectNameMaxLength = 50;
    let projectDescriptionMaxLength = 300;
    const [error, setError] = useState<string>("")
    const [isCreating, setIsCreating] = useState(false)

    const [formData, setFormData] = useState()

 
  return (
    <Dialog >
    <DialogTrigger >
        {openTrigger}
    </DialogTrigger>

    <DialogContent className={`sm:max-w-xl  dialog-box  `}>
        
       <div className="gap-[var(--gap-md)] flex flex-col">

            <DialogHeader className="dialog-header">
                <DialogTitle className="dialog-title">
                    Create a new project
                </DialogTitle>

                <DialogClose className="dialog-close-btn"/>
            </DialogHeader>

            <h3 className="form-title">
                Set up a project from scratch and start adding bugs, details, and team members.
            </h3>


        </div>
                
        <div>
        <DialogDescription>
            <form 
            className="create-form">
                <section className="form-input-group">

                    {/* TEAM Name INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Name
                            <span className="text-red-500 font-bold"> *</span>
                        </label>
                        <Input 
                        placeholder="Bug Tracker Dashboard" 
                        className="form-input" 
                        required
                        maxLength={projectNameMaxLength}
                        />
                        {error && <p className="input-error">
                            {error}
                        </p>}
                    </div>

                        {/* TEAM Description INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Description (Optional)
                        </label>
                        <Textarea 
                        className="form-input"
                        placeholder="A project to track and manage bugs"
                        maxLength={projectDescriptionMaxLength}
                        />
                    </div>

                </section>
                
                <div className="flex justify-between">

                    <button 
                    type="submit"
                    className="submit-btn flex gap-[var(--gap-sm)] items-center justify-center"
             

                    >
                        {isCreating ? (
                            <>
                            <p>Creating your project</p>
                            <LoaderCircle size={18} className="animate-spin"/>
                            </>
                        ) :
                        "Create my project"}

                    </button>

                      <button 
                      className="cancel-btn" >
                        Cancel
                    </button>

                </div>
            </form>
        </DialogDescription>
        </div>
    </DialogContent>
    </Dialog>
  )
}

export default CreateProjectDialog