import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
const RSS = () => {
  return (
    <div className="socials">
      <a
        target={"_blank"}
        rel="noreferrer"
        href="https://www.linkedin.com/in/milton-dw/"
      >
        <BsLinkedin />
      </a>
      <a target={"_blank"} rel="noreferrer" href="https://github.com/miltondw">
        <BsGithub />
      </a>
      <a
        target={"_blank"}
        rel="noreferrer"
        href="https://api.whatsapp.com/send/?phone=573002321421&text&app_absent=0"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default RSS;
