
import "./KPICard.css"
import type { KPICardProps } from "@/pages/types/kpi"

const KPICard = ({kpi}: KPICardProps): React.ReactNode => {
  return (
    <div  className="kpi-card">

      <header className="flex justify-between items-start">
        <h2 className="kpi-card-title">
          {kpi.title}
        </h2>

        <kpi.icon  size={18} className="text-[var(--text-tertiary)]"/>
      </header>

      <main>
        <h3 className="kpi-card-data">
          {kpi.data}
        </h3>
      </main>

      <footer>
        <p className="kpi-card-description">
          {kpi.description}
        </p>
      </footer>
    </div>
  )
}

export default KPICard