import BugBoard from "../Bugs/BugBoard"
import Overview from "./Overview"
import Projects from "../Project/Projects";
import Teams from "../Team/Teams";
import Repositories from "../Project/Repositories";
import Inbox from "./Inbox/Inbox";


const DashboardContent = ({selected, setSelected}) => {

let current: React.ReactNode;

  switch (selected){

    
    case "/teams":
      current = <Teams/>
      break;

    case "/dashboard/inbox":
      current = <Inbox/>
      break;

    case "/repositories": 
      current =  <Repositories/>
      break;

    case "/bug-board": 
      current =  <BugBoard/>
      break;

    case "/projects":
      current = <Projects/>
      break;

    default:
      current =  <Overview/>
  }


  return (
    <div className="dashboard-content">
        {current}
    </div>
  )
}

export default DashboardContent