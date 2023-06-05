import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../services/client";

import "./Footer.scss";
import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text"> Take A coffe & Chat Witch Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:henrique.cunha5@outlook.com"
            target="_blank"
            className="p-text"
          >
            henrique.cunha5@outlook.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a
            href="https://api.whatsapp.com/send/?phone=%2B5581986959925&text&type=phone_number&app_absent=0"
            target="_blank"
            className="p-text"
          >
            whatsapp
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form  app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "sending" : " Send Message..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you getting in touch! May JUNBA! be with you
          </h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
