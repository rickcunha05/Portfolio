import { ServiceCard } from '../../@types/ServiceCard'
import './ServiceCard.scss'
export default function ServiceCard(serviceCard: ServiceCard) {
  const { title, subTitle, listItem1, listItem02, listItem03, listItem04 } = serviceCard
  return (
    <>
      <div className='card-container'>
        <div className="card">
          <div className="heading">{title}
            <span>{subTitle}</span>
          </div>
          <div>
            {serviceCard.listItem04 ? (
              <ul className='list-container'>
                <li> {listItem1} </li>
                <li> {listItem02} </li>
                <li> {listItem03} </li>
                <li> {listItem04} </li>
              </ul>
            ) :
              <ul className='list-container'>
                <li>{listItem1}</li>
                <li> {listItem02}</li>
                <li>{listItem03}</li>
              </ul>}
          </div>
          <button className='orcamentoButton'><a href='#contato'>Solicite um Orçamento</a></button>
        </div>


      </div>
    </>
  )
}