import "./ProcessCard.scss"
import { ProcessCard } from '../../@types/ProcessCard'

export default function ProcessCard(processCard: ProcessCard) {
  const {title, description} = processCard
  return (
    <>    
      <div className="process-card">
        <div className="card-content">
          <p className="card-title">{title}
          </p><p className="card-para">{description}</p>
        </div>
      </div>      
    </>
  )
}