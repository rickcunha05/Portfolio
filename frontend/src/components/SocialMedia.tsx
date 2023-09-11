import { BsInstagram, BsGithub, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function SocialMedia() {
  const urlLinkedin = "https://www.linkedin.com/in/henrique-cunha-b767a7191/"; 
  const urlGithub = "https://github.com/rickcunha05";
  const curriculo = "/src/assets/Henrique Cunha (1).pdf";
  return (
    <div className="app__social">
      <div>
        <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>    
      <div>
        <a href={urlGithub} target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href={curriculo}
          target="_blank"
          rel="noopener noreferrer"
          download="Henrique Cunha"
        >
          <BsFileEarmarkPdfFill />
        </a>
      </div>
    </div>
  );
}
