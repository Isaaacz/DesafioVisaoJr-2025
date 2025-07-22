import styles from './forms.module.css';
import logoImage from './assets/W&Jlogo.png';
import instagram from './assets/instagram.svg';
import whatsapp from './assets/whatsapp.svg';
import envelope from './assets/envelope.svg';



export function Forms() {
  return (
        <menu className={styles.formContainer}>
            <div className={styles.logoSection}>
                <img src={logoImage} alt="Logo W&J Group" className={styles.logoImage} />
                
                <footer className={styles.footerContainer}>
                <a href="https://www.instagram.com/visaojrufop/">
                 <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.instagram.com/visaojrufop/">
                <img src={whatsapp} alt="WhatsApp" />
                </a>
                 <a href="https://ufop.br/noticias/empresas-juniores/visao-jr-proporciona-aprendizado-em-tecnologia">
                <img src={envelope} alt="E-mail" />
                </a>
                </footer>
            </div>

            <form className={styles.form}>
                <h2>Entre em contato</h2>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Mensagem" />
                <button type="submit">Enviar</button>
            </form>
             <footer className={styles.footerContainerMobile}>
                <a href="https://www.instagram.com/visaojrufop/">
                 <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.instagram.com/visaojrufop/">
                <img src={whatsapp} alt="WhatsApp" />
                </a>
                 <a href="https://ufop.br/noticias/empresas-juniores/visao-jr-proporciona-aprendizado-em-tecnologia">
                <img src={envelope} alt="E-mail" />
                </a>
                </footer>
        </menu>


  );
}