import { ServiceCard } from '../../@types/ServiceCard'
import './ServiceCard.scss'
export default function ServiceCard(serviceCard: ServiceCard) {
  const { title, subTitle, listItem1: info01, listItem02: info02, listItem03: info03, listItem04: info04 } = serviceCard
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
                <li> {info01} </li>
                <li> {info02} </li>
                <li> {info03} </li>
                <li> {info04} </li>
              </ul>
            ) :
              <ul className='list-container'>
                <li>{info01}</li>
                <li> {info02}</li>
                <li>{info03}</li>
              </ul>}
          </div>
          <button className='orcamentoButton'><a href='#contato'>Solicite um Orçamento</a></button>
        </div>


      </div>
    </>
  )
}