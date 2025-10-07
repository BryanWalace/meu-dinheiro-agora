import React from 'react';
import styles from './Footer.module.css';

import logo from '../../assets/logo-branca.svg';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import whatsappIcon from '../../assets/icons/whatsapp-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import phoneIcon from '../../assets/icons/phone-icon.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <img src={logo} alt="Logo Meu Dinheiro Agora" />
          <h3>Nossas redes sociais:</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
          <a href="#" className={styles.whatsappButton}>
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>Fale no Whats</span>
          </a>
        </div>

        <div className={styles.rightColumn}>
          <p>
            O Meu Dinheiro Agora facilita o acesso a empréstimos e outros serviços
            financeiros de forma segura e transparente, em parceria com as
            principais instituições do Brasil. Não solicitamos o pagamento de taxas,
            boletos ou qualquer valor antecipado como condição para liberação de
            crédito. Atuamos em conformidade com a LGPD (Lei Geral de Proteção
            de Dados) e seguimos padrões rigorosos de segurança e privacidade.
          </p>
          <div className={styles.contactItem}>
            <img src={emailIcon} alt="Email" />
            <div>
              <span>Email</span>
              <p>falecom@meudinheiroagora.com.br</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <img src={phoneIcon} alt="Telefone" />
            <div>
              <span>Telefone</span>
              <p>0800 170 0101</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        Todos os direitos reservados © {currentYear}
      </div>
    </footer>
  );
}

export default Footer;