import React, { useState } from 'react'
import "./Auth.css"
import BasicNavbar from '@/components/Navbar/BasicNavbar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card"
import { Input } from '../../../@/components/ui/input'
import { Separator } from '../../../@/components/ui/separator'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import type { LoginUser } from '../../../../shared/types/user/user'
import type { FormStatus } from '../types/form'
import { loginUser } from '../../api/user'
import {toast} from "sonner";

const Login = () => {

  const navigate = useNavigate()
  const [error, setError] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const [formData, setFormData] = useState<LoginUser>({
    emailAddress: "",
    password: ""
  })

  const validateForm = ( formData: LoginUser) => {

    if(!formData.emailAddress){
      setError("Email address is required.")
      return false;
    }

    if(!formData.password){
      setError("Password is required.")
      return false;
    }

    if(formData.password.length < 8){
      setError("Minimum length must be 8 characters.")
      return false;
    }

    return true;
  }   

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("")

    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    try{
      setFormStatus("submitted")

      console.log("Validating data")

      /* Validating data */

      if(!validateForm(formData)){
        return;
      }

      const user = await loginUser(formData)
      setFormStatus("success")
      navigate("/dashboard")

      return user;

    }catch(error: any){
      setFormStatus("error")
      toast.error(error.response?.data?.message || "Something went wrong")
    }

  }

  return (
    <div className='auth-main-container'>
      <BasicNavbar/>

      <div className='form-container'>
        <Card  className="auth-form  max-w-md min-w-0">
          <CardHeader className='auth-form-header'>

              <div className='flex flex-col gap-[var(--gap-sm)]'>
                <CardTitle className='auth-form-title'>
                  Log in
                </CardTitle>
                <CardDescription className='auth-form-description'>
                Login to join your team, collaborate and resolve bugs together.
                </CardDescription>
              </div>

              <div className='oauth-btn-container'>
                <button className='oauth-btn '>
                  <svg xmlns="http://www.w3.org/2000/svg" height={16} width={16} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                  </svg>
                  Continue with Google
                </button>

                <button className='oauth-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="Github-Logo-2--Streamline-Logos" 
              height={18} width={18} ><desc>{"\n    Github Logo 2 Streamline Icon: https://streamlinehq.com\n  "}</desc><path 
              fill="currentColor" d="M11.996 1.284a10.986 10.986 0 0 0 -3.472 21.412c0.548 0.095 0.722 -0.227 0.722 -0.517 0 -0.263 0.006 -0.991 0 -1.91 -3.057 0.662 -3.688 -1.448 -3.688 -1.448a2.907 2.907 0 0 0 -1.22 -1.607c-0.997 -0.682 0.075 -0.669 0.075 -0.669a2.307 2.307 0 0 1 1.683 1.131 2.34 2.34 0 0 0 3.197 0.914 2.34 2.34 0 0 1 0.697 -1.464c-2.439 -0.279 -5.004 -1.22 -5.004 -5.432a4.248 4.248 0 0 1 1.132 -2.948 3.942 3.942 0 0 1 0.107 -2.907s0.924 -0.295 3.02 1.128a10.402 10.402 0 0 1 5.503 0c2.102 -1.422 3.018 -1.128 3.018 -1.128 0.405 0.92 0.444 1.96 0.109 2.907a4.243 4.243 0 0 1 1.13 2.95c0 4.223 -2.569 5.15 -5.016 5.42a2.604 2.604 0 0 1 0.752 2.026v3.041c0 0.294 0.177 0.619 0.735 0.512a10.986 10.986 0 0 0 -3.48 -21.411Z" strokeWidth={1} /></svg>
                  Continue with Github
                </button>

              </div>
          </CardHeader>

            <div className='justify-center flex relative p-4'>
              <Separator className={`separator`} />
              <p className='flex justify-center rounded-full bg-[var(--background)] text-[var(--text-secondary)] absolute p-2 w-8 h-8 top-0'>or</p>
            </div>

            <p className='form-input-label self-center'>Login with email</p>

            <form onSubmit={handleFormSubmit} >
              <CardContent  className='auth-form-input-group'>

                  {/* User Name INPUT */}
                  <div className="label-input-group">
                      <label className="auth-form-input-label">
                          Work Email
                          <span className="text-red-500 font-bold"> *</span>
                      </label>
                      <Input 
                      placeholder="you@company.com" 
                      className="form-input" 
                      value={formData.emailAddress}
                      required
                      ></Input>
                  </div>

                  {/* Password INPUT */}
                  <div className="label-input-group">
                      <label className="auth-form-input-label">
                          Password
                          <span className="text-red-500 font-bold"> *</span>
                      </label>
                      <Input 
                      placeholder="*********" 
                      className="form-input" 
                      type="password"
                      value={formData.password}
                      minLength={8}
                      required
                      ></Input>
                  </div>   

                                {/* Terms and Conditions Checkbox INPUT */}
              <div className='flex flex-col  gap-[var(--gap-xs)] '>
                <div className="flex gap-[var(--gap-sm)] items-center">
                    <input 
                    type="checkbox" 
                    className='self-center'
                    checked={rememberMe}
                    onChange={(e) => {
                      setError("")
                      setRememberMe(e.target.checked)
                    }}
                    />
                    <p className='form-input-label'>Remember Me</p>

                </div>

                {error && (
                  <p className='input-error '>{error}</p>
                )}
              </div>           
              </CardContent>
       

          <div className='auth-form-footer'>
            <button 
            type="submit"
            className='auth-submit-btn flex items-center gap-[var(--gap-sm)]'>
              <LogIn size={18}/> Log in
            </button>

            <div className='auth-form-footer-nav'>
              <p className='auth-form-description'>Don't have an account?</p>
              <Link to="/auth/sign-up" className='form-navlink'>
                Sign up
              </Link>
            </div>
          </div>
        </form>
        </Card>
      </div>
    </div>
  )
}

export default Login