import CardContact from "../../molecules/CardContact";
import Form from "../../atoms/Form";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const options = [
    {
      title: "Email",
      option: "estradamilton2001@gmail.com",
      link: " mailto:estradamilton2001@gmail.com",
      icon: <MdOutlineMail className="contact__option-icon" />,
      id: 1,
    },
    {
      title: "Messenger",
      option: "MiltonWebDeveloper",
      link: "https://m.me/miltonwebdeveloper",
      icon: <RiMessengerLine className="contact__option-icon" />,
      id: 2,
    },
    {
      title: "WhatsApp",
      option: "+573002321421",
      link: "https://api.whatsapp.com/send/?phone=573002321421",
      icon: <BsWhatsapp className="contact__option-icon" />,
      id: 3,
    },
  ];
  return (
    <section id="contact">
      <h2>Contácteme</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {options &&
            options.map((option) => (
              <CardContact
                icon={option.icon}
                link={option.link}
                option={option.option}
                title={option.title}
                key={option.id}
              />
            ))}
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
