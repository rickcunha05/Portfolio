import Card from "../../components/processCard/ProcessCard";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Freelancer.scss";

function Freelancer() {  
 return(
  <>
  <h1 className="head-text" >Serviços</h1>   
    
  <div className="card-container">
  <ServiceCard 
    title="Desenvolvimento de"
    subTitle="sistemas WEB"
    listItem1="Sistemas escaláveis que crescem com o seu negocio;"    
    listItem02="As melhores tecnologias;"
    listItem03="Aplicações acessíveis;"  
    listItem04="Aplicações de alta qualidade e desempenho;"
  />  
   <ServiceCard 
    title="Desenvolvimento Mobile"
    subTitle="Android e IOS"
    listItem1="Tecnologias multiplataformas com alta performance;"    
    listItem02="Desenvolvimento de aplicativos corporativos;"    
    listItem03="Aplicativos personalizados com a cara do seu negocio;"  
  />  
   <ServiceCard 
    title="Desenvolvimento de"
    subTitle=" APIs"
    listItem1="Integração com outras APIs;"
    listItem02="Web services para aplicações robustas e alto desempenho;" 
    listItem03="Micro services para auxiliar e descentralizar grandes cargas da aplicação;"
  />    
  </div>
</>
 )
}
export default AppWrap(
  MotionWrap(Freelancer, "app__skills"),
  "serviços",
  "app__primarybg"
);
