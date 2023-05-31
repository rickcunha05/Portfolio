import { BsInstagram, BsGithub, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsFileEarmarkPdfFill />
      </div>
    </div>
  );
}
