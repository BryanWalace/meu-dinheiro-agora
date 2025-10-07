import React from 'react';
import styles from './ExploreSection.module.css';

import greenBlob from '../../assets/green-blob.svg';
import greenBlobRight from '../../assets/green-blob-right.svg';
import greenBlobLeft from '../../assets/green-blob-left.svg';

import motoPasseio from '../../assets/moto-passeio.png';
import motoUrbana from '../../assets/moto-urbana.png';
import motoAventura from '../../assets/moto-aventura.png';

import carroPopular from '../../assets/carro-compacto.png';
import carroSedan from '../../assets/carro-sedan.png';
import carroSUV from '../../assets/carro-suv.png';

import imovelCasa from '../../assets/imovel-casa.png';
import imovelApartamento from '../../assets/imovel-apartamento.png';
import imovelTerreno from '../../assets/imovel-terreno.png';

import servicoViagem from '../../assets/servico-viagem.png';
import servicoEducacao from '../../assets/servico-educacao.png';
import servicoSaude from '../../assets/servico-saude.png';

const motosData = [
  { image: motoPasseio, title: 'Passeio', description: 'Veja os estilos de veículos, imóveis e serviços que você pode combinar com você.' },
  { image: motoUrbana, title: 'Urbana', description: 'Veja os estilos de veículos, imóveis e serviços que você pode combinar com você.' },
  { image: motoAventura, title: 'Aventura', description: 'Veja os estilos de veículos, imóveis e serviços que você pode combinar com você.' },
];

const carrosData = [
    { image: carroPopular, title: 'Popular', description: 'Praticidade e economia para o dia a dia.' },
    { image: carroSedan, title: 'Sedan', description: 'Conforto e espaço para toda a família.' },
    { image: carroSUV, title: 'SUV', description: 'Versatilidade e estilo para todas as ocasiões.' },
];

const imoveisData = [
  { image: imovelCasa, title: 'Casa Residencial', description: 'Economia e praticidade para uso diário e trajetos urbanos.' },
  { image: imovelApartamento, title: 'Apartamento', description: 'Praticidade e localização estratégica em áreas urbanas.' },
  { image: imovelTerreno, title: 'Terreno', description: 'Invista no seu futuro construindo do seu jeito.' },
];

const servicosData = [
  { image: servicoViagem, title: 'Viagem dos Sonhos', description: 'Planeje férias inesquecíveis com toda a família.' },
  { image: servicoEducacao, title: 'Educação', description: 'Invista em conhecimento e conquiste novas oportunidades.' },
  { image: servicoSaude, title: 'Saúde', description: 'Tenha segurança e planejamento para cuidar da sua saúde.' },
];

function ExploreSection() {
  return (
    <section className={styles.section}>
        <img src={greenBlob} alt="" className={styles.greenBlob} />
        <img src={greenBlobLeft} alt="" className={styles.greenBlobLeft} />
        <img src={greenBlobRight} alt="" className={styles.greenBlobRight} />
      
      <div className={styles.header}>
        <h2>Explore o que você pode <br/> <span>conquistar</span> com o consórcio!</h2>
        <p>Veja os estilos de veículos, imóveis e serviços que você pode planejar e descubra qual combina com você.</p>
      </div>

      <h3 className={styles.categoryTitle}>Motos</h3>
      <div className={styles.grid}>
        {motosData.map((moto) => (
          <div key={moto.title} className={styles.card}>
            <img src={moto.image} alt={moto.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{moto.title}</h3>
            <p className={styles.cardDescription}>{moto.description}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.categoryTitle}>Carros</h3>
      <div className={styles.grid}>
        {carrosData.map((carro) => (
          <div key={carro.title} className={styles.card}>
            <img src={carro.image} alt={carro.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{carro.title}</h3>
            <p className={styles.cardDescription}>{carro.description}</p>
            </div>
        ))}
        
      </div>
      
      <img src={greenBlob} alt="" className={styles.greenBlob} />
      <h3 className={styles.categoryTitle}>Imóveis</h3>
      <div className={styles.grid}>
        {imoveisData.map((imovel) => (
          <div key={imovel.title} className={styles.card}>
            <img src={imovel.image} alt={imovel.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{imovel.title}</h3>
            <p className={styles.cardDescription}>{imovel.description}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.categoryTitle}>Serviços</h3>
      <div className={styles.grid}>
        {servicosData.map((servico) => (
          <div key={servico.title} className={styles.card}>
            <img src={servico.image} alt={servico.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{servico.title}</h3>
            <p className={styles.cardDescription}>{servico.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ExploreSection;