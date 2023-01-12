import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";

export const Form = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(formData);
    emailjs.send(
      "service_kiqiwud",
      "template_ucfkk9l",
      formData,
      "hM8H8dajyQ-DXOi5F"
    );
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='Nombre completo'
        required
      />
      <input
        className={styles.input}
        type='email'
        name='email'
        placeholder='Tu Correo'
        required
      />
      <textarea
        className={styles.textarea}
        name='message'
        id='message'
        rows={7}
        placeholder='Tu mensaje'
        required></textarea>
      <button type='submit' className='btn btn-secondary'>
        Enviar Mensaje
      </button>
    </form>
  );
};
