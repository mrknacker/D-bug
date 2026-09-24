import { repositories } from "../../assets/assets"
import EmptyRepository from "./EmptyRepository"

const Repositories = () => {

  if(repositories.length !== 0) return <EmptyRepository/>

  return (
    <main>

      <header className="dashboard-content-header">
        <h1 className="dashboard-content-title">Repositories</h1>
      </header>

      <div className="bug-container" >

          {repositories.map((repo) => {
              return (
                  <div key={repo.id}>
                    {repo.name}
                    </div>
              )
          })}

          
      </div>
    </main>
  )
}

export default Repositories