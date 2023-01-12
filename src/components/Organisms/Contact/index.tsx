import { CardContact } from "../../Molecules/CardContact";
import { Form } from "../../Atoms/Form";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./styles.module.scss";
export const Contact = () => {
  const options = [
    {
      title: "Email",
      option: "estradamilton2001@gmail.com",
      link: " mailto:estradamilton2001@gmail.com",
      icon: () => <MdOutlineMail />,
      id: 1,
    },
    {
      title: "Messenger",
      option: "MiltonWebDeveloper",
      link: "https://m.me/miltonwebdeveloper",
      icon: () => <RiMessengerLine />,
      id: 2,
    },
    {
      title: "WhatsApp",
      option: "+573002321421",
      link: "https://api.whatsapp.com/send/?phone=573002321421",
      icon: () => <BsWhatsapp />,
      id: 3,
    },
  ];
  return (
    <section className={styles.contact}>
      <h2 className='title-header'>Contácteme</h2>
      <div className={styles.container}>
        <div className={styles.contacts}>
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
