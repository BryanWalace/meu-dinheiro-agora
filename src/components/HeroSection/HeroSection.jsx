import React from 'react';
import styles from './HeroSection.module.css';
import heroImage from '../../assets/hero-image.png';

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="Homem feliz usando notebook" className={styles.image} />
        </div>

        <div className={styles.textWrapper}>
          <h1>
            Avançar em direção <br/> ao seu sonho está <br />
            cada vez <span> mais fácil!</span>
          </h1>
          <p>
            Com o <strong>consórcio,</strong>  você conquista o que deseja de forma planejada.
            Sem juros abusivos e com parcelas que cabem no seu bolso.
          </p>
          <button className={styles.ctaButton}>
            <span className={styles.desktopText}>Simule agora!</span>
            <span className={styles.mobileText}>Faça sua simulação de consórcio agora!</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;