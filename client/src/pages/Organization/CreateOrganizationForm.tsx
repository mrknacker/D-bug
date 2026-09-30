import { ChevronDown, ChevronRight, ChevronsUpDown, ChevronUp, Eye, EyeClosed, EyeOff, Home, ImagePlus, Info, LoaderCircle, MoveRight, Package, PackageOpen, Plus, RotateCcw, Trash, X } from "lucide-react"
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
import api from "../../config/axios"
import type { FormStatus } from "../types/form"
import {toast} from "sonner"
import {createTeam} from "../../api/team"
import React from "react"
import { icons } from "../common/iconList"
import IconCard from "../../components/IconCard/IconCard"
import type {CreateOrganizationForm, Organization} from "../../../../shared/types/organization/organization"
import { TooltipTrigger } from "../../../@/components/ui/tooltip"
import { TooltipContent } from "../../../@/components/ui/tooltip"
import { Tooltip } from "../../../@/components/ui/tooltip"
import { createOrganization } from "@/api/organization"
import { Separator } from "../../../@/components/ui/separator"

const CreateOrganizationForm = ({openTrigger}) => {
    
    /* UI state */

    let organizationNameMaxLength = 50;
    let organizationDescriptionMaxLength = 300;

    const [error, setError] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [preview, setPreview] = useState<string | null>(null)
    const [showPreview, setShowPreview] = useState<boolean>(false)

    const [formData, setFormData] = useState<CreateOrganizationForm>({
        name: "",
        description : "",
        logo: null
    })


    const [formStatus, setFormStatus] = useState<FormStatus>("idle")

    /* VALIDATION */
     
    const validateFormData = (formData: CreateOrganizationForm) : boolean => {

        if(formData.name.length === 0){
            setError("Team name is required")
            return false;
        }

        return true;
    }

    
    const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>): Promise<Organization | undefined> => {
        e.preventDefault(); 
    
       try{ 
        setFormStatus("submitted");
        console.log(formData)
        if(!validateFormData(formData)){
            setFormStatus("error")
            setError("Organization name is required.")
            return;
        }

        const team = await createOrganization(formData)
        
        setFormStatus("success");
        
        return team;

    }catch(error: any){
        setFormStatus("error")
        console.log(error)
        toast.error(error.response?.data?.message || "Something went wrong" )

    } }
  

    const handleLogoChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]

        if(selectedFile){

            /* Adding image to preview */   

            setPreview(URL.createObjectURL(selectedFile))

            /* Adding selected image to formdata */
            setFormData(prev => ({
            ...prev,
            logo: selectedFile ?? null
        }))

        }
    }

 
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
                    Create your organization
                </DialogTitle>

                <DialogClose/>
                
            </DialogHeader>

            <h3 className="form-title">
                Create an organization to bring your people, projects and bugs together.
            </h3>
        </div>
                
        <div className="h-full flex  flex-col">

            <form 
            className="create-form"
            onSubmit={handleFormSubmit}
  
            >

                <section className="form-input-group">

                    {/* Organization Name INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Name
                            <span className="text-red-500 font-bold"> *</span>
                        </label>
                        <Input 
                        placeholder="D-bug" 
                        className="form-input" 
                        value={formData.name}
                        maxLength={organizationNameMaxLength}      
                        onChange={(e) => {
                            setError("")
                            setFormData(prev => (
                            {   ...prev,
                            name: e.target.value.trim()
                            }
                            ))
                        }}
                 
                        />
                        {error && <p className="input-error">
                            {error}
                        </p>}
                        {formData.name && 
                        (
                        <p className="input-info">
                            { organizationNameMaxLength - (formData.name?.length)} characters remaining
                        </p>
                        )
                        }
                    </div>
                
                        {/* Organization Description INPUT */}
                    <div className="label-input-group">
                        <label className="form-input-label">
                            Description <span className="text-gray-500"> (Optional)</span>
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
                        maxLength={organizationDescriptionMaxLength}
                        />
                        {formData.description && 
                        (
                        <p className="input-info">
                            { organizationDescriptionMaxLength - (formData.description?.length)} characters remaining
                        </p>
                        )
                        }
                    </div>

                        {/* Organization Logo */}
                    <div className="label-input-group">
                        <div className="flex justify-between w-full relative">
                            <p className="form-input-label">
                                Organization Logo <span className="text-gray-500"> (Optional)</span>
                            </p>
                            {formData.logo &&( 
                        <div className="flex bg-black items-end justify-end gap-[var(--gap-xs)]">
                            
                            <Tooltip>
                                <TooltipTrigger>
    
                                {preview && (
                                    <p className=" preview-image-btn flex items-center gap-[var(--gap-xs)]">
                                        Preview Image
                             
                                    </p>)
                                    }
                                   
                                </TooltipTrigger>
                                <TooltipContent>
                            {
                            (preview) && (
                                
                                <div className="border border-[var(--border-subtle)] bg-zinc-900 flex-col flex p-1 max-w-sm items-center justify-center rounded-xl" >
                            
                                    <img src={preview} alt="preview" style={{maxWidth: "200px", maxHeight: "200px" , borderRadius: "10px"}}/>
                                </div>)
                            }
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                            <TooltipTrigger >
                            <button 
                            className="text-red-800 hover:text-red-600 top-7.5 text-nowrap right-2 absolute"
                            onClick={(e) => {
                                e.preventDefault()
                                setFormData((prev) => (
                                    {
                                        ...prev,
                                        logo: null
                                    }
                                ) )
                                setPreview(null)
                                
                            }}
                            >

                                <Trash size={18}/>
                            </button>
                            </TooltipTrigger>
                            <TooltipContent className={"text-white border-[var(--border-strong)] border"}>
                                Delete
                            </TooltipContent>
                            </Tooltip>
                        </div>
                                
                          )}
                         
            
                        </div>
                        
                        <label 
                        className="file-input"
                        htmlFor="organization-logo"
                        >
                            <div className="h-full flex items-center justify-start">
                                <p 
                                className={`left rounded-l-xs  ${formData.logo ? "bg-green-800" : "bg-zinc-700"}`}>
                                    {formData.logo ?  "Image Received": <ImagePlus size={18}/>}
                                </p>
                                {formData.logo && <p className="right">
                                    {formData.logo?.name}
                                </p>}
                            </div>

                        </label>
                        
                        <input
                        type="file"
                        id= "organization-logo"
                        accept="image/*"
                        onChange={handleLogoChange}
                        
                        />

                       
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
                                description: "",
                                logo: null
                            }
                        ))
                    
                    }
                      }>
                        Cancel
                    </button>

                    
                    <button 
                    type="submit"
                    className="submit-btn flex gap-[var(--gap-sm)] items-center justify-center"
                    >
                        {formStatus === "submitted" ? (
                            <>
                            <p>Creating your organization</p>
                            <LoaderCircle size={18} className="animate-spin"/>
                            </>
                        ) :
                        "Create my organization"}

                    </button>

                </div>
            </form>

        </div>
    </DialogContent>
    </Dialog>
  )
}

export default CreateOrganizationForm