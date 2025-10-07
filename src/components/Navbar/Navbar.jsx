import React from 'react';

import styles from './Navbar.module.css';

import logo from '../../assets/logo-preta.svg';
import whatsappIcon from '../../assets/icons/whatsapp-icon.svg';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <img src={logo} alt="Logo Meu Dinheiro Agora" className={styles.logo} />
        
        <button className={styles.ctaButton}>
          <img src={whatsappIcon} alt="Ícone do WhatsApp" />
          <span>Fale conosco</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;