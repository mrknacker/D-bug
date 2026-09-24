import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import SmoothScroll from "./components/SmoothScroll/SmoothScroll"
import {Toaster} from "sonner"
import Teams from "./pages/Team/Teams"

const App = () => {
  return (
    <SmoothScroll>
      <Toaster richColors theme="dark" />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/teams" element={<Teams/>}/>
      </Routes>
    </SmoothScroll>
  )
}

export default App