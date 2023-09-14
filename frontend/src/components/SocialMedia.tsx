import { BsGithub, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function SocialMedia() {
  const urlLinkedin = "https://www.linkedin.com/in/henrique-cunha-b767a7191/"; 
  const urlGithub = "https://github.com/rickcunha05";
  const curriculo = "https://drive.google.com/u/0/uc?id=1USi71ppfcgjioRQ9jpv3INKxe4EZONIv&export=download";
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
          rel="noopener noreferrer"
          download="Henrique Cunha"
        >
          <BsFileEarmarkPdfFill />
        </a>
      </div>
    </div>
  );
}
