import React from 'react';
import styles from './AdvantagesSection.module.css';

import iconTaxa from '../../assets/icons/icon-taxa.svg';
import iconParcelas from '../../assets/icons/icon-parcelas.svg';
import iconPoderCompra from '../../assets/icons/icon-poder-compra.svg';
import iconAntecipar from '../../assets/icons/icon-antecipar.svg';

const advantagesData = [
  { icon: iconTaxa, text: 'Apenas taxa administrativa' },
  { icon: iconParcelas, text: 'Parcelas acessíveis e flexíveis' },
  { icon: iconPoderCompra, text: 'Poder de compra à vista com a carta de crédito' },
  { icon: iconAntecipar, text: 'Possibilidade de antecipar a conquista com lances' },
];

function AdvantagesSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Conheça nossas <span>vantagens:</span></h2>
      <div className={styles.grid}>
        {advantagesData.map((advantage) => (
          <div key={advantage.text} className={styles.advantageItem}>
            <img src={advantage.icon} alt="" />
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
      <button className={styles.ctaButton}>Avançar rumo ao meu sonho</button>
    </section>
  );
}

export default AdvantagesSection;