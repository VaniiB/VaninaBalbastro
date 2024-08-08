import React, { useEffect, useState } from 'react';
import '../css/index.css'; // Asegúrate de que este archivo CSS exista y contenga los estilos necesarios
import { GUI } from 'https://cdn.skypack.dev/dat.gui';
import { MDBFooter } from 'mdb-react-ui-kit';

// Importación de imágenes
import bretaImage from '../recursos/img-index/breta.png';
import auroraImage from '../recursos/img-index/aurora.png';
import rinconGourmetImage from '../recursos/img-index/Rincon gourmet.png';
import victoriaImage from '../recursos/img-index/Victoria.png';
import eternalImage from '../recursos/img-index/Eternal.png';
import electroshopImage from '../recursos/img-index/Electroshop.png';
import unggaImage from '../recursos/img-index/ungga.png';
import webPortfolioImage from '../recursos/img-index/Leo.png';
import javapetImage from '../recursos/img-index/Javapet.png';
import phGalleryImage from '../recursos/img-index/PhGallery.png';
import vaniImage from '../recursos/img-index/vani.png';
import adoptameImage from '../recursos/img-index/adoptame.png';

import figmaLogo from '../recursos/iconos/figma.png';
import bootstrapLogo from '../recursos/iconos/Bootstrap_logo.svg.png';
import reactLogo from '../recursos/iconos/React.png';
import nodejsLogo from '../recursos/iconos/NodeJS.png';
import mongodbLogo from '../recursos/iconos/mongodb.png';
import htmlLogo from '../recursos/iconos/html.png';
import cssLogo from '../recursos/iconos/css-3.png';
import jsLogo from '../recursos/iconos/js.png';
import angularLogo from '../recursos/iconos/Angular_gradient.png';

import gradientFondo from '../recursos/img-index/Gradient.png';
import gradientFondo2 from '../recursos/img-index/gradiantes 2.png';
import gradientFondo3 from '../recursos/img-index/Gradient.png';
import gradientFondo4 from '../recursos/img-index/Gradient.png';

import linkedinIcon from '../recursos/iconos/—Pngtree—white linkedin icon png_3562068.png';
import whatsappIcon from '../recursos/iconos/—Pngtree—white whatsapp icon png_3562063.png';

const projects = [
  { id: 2, title: "Breta", subtitle: "Breta", image: bretaImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto2" },
  { id: 13, title: "Aurora", subtitle: "Aurora", image: auroraImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto2" },
  { id: 3, title: "Rincón Gourmet", subtitle: "Rincón Gourmet", image: rinconGourmetImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto3" },
  { id: 4, title: "Victoria Villarruel", subtitle: "Victoria Villarruel", image: victoriaImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto4" },
  { id: 5, title: "Eternal", subtitle: "Eterna", image: eternalImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto5" },
  { id: 6, title: "Electroshop", subtitle: "Electroshop", image: electroshopImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto6" },
  { id: 7, title: "Ungga", subtitle: "Ungga", image: unggaImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto7" },
  { id: 8, title: "Web Portfolio", subtitle: "Web Portfolio", image: webPortfolioImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto8" },
  { id: 9, title: "Javapet", subtitle: "Javapet", image: javapetImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto9" },
  { id: 10, title: "PhGallery", subtitle: "Descripción del Proyecto 10PhGallery", image: phGalleryImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto10" },
  { id: 11, title: "Web Portfolio", subtitle: "Web Portfolio", image: vaniImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto11" },
  { id: 12, title: "AdoptAME", subtitle: "AdoptAME", image: adoptameImage, languages: ["react", "nodejs", "mongodb"], link: "/proyecto12" }
];

const techData = [
  { name: "Figma", logo: figmaLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Angular", logo: angularLogo }
];

// El resto del código permanece igual


const MarqueeRectangle = () => {
  const words = [
    "FRONT-END    JAVASCRIPT     REACT 17    TYPESCRIPT     ANGULAR    BOOTSTRAP    NODEJS    MONGODB     FIGMA     BACK-END    CSS     ADOBE CREATIVE SUITE    UX/UI    FLUTTERFLOW      ",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="marquee-rectangle">
      <p className="marquee-text">{words[currentWordIndex]}</p>
    </div>
  );
};

export const Index = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isFullStack, setIsFullStack] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const subtitles = ["UX UI Designer", "FullStack Web Developer"];
  const textToAnimate = "“El único modo de hacer un gran trabajo es AMAR lo que HACES.”";

  useEffect(() => {
    const CONTAINER = document.querySelector('.container');
    const CARDS = document.querySelectorAll('.card-animated');

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }
        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];
        let ANGLE = (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
    };

    const CTRL = new GUI({ width: 340 });
    CTRL.add(CONFIG, 'spread', 10, 180, 1).name('Spread (deg)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'proximity', 10, 180, 1).name('Active Proximity (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'gap', 10, 100, 1).name('Gap (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'blur', 0, 50, 1).name('Blur (px)').onChange(RESTYLE);
    CTRL.add(CONFIG, 'opacity', 0, 1, 0.01).name('Inactive Opacity').onChange(RESTYLE);
    CTRL.add(CONFIG, 'vertical').name('Vertical Layout').onChange(RESTYLE);

    RESTYLE();
    UPDATE();

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex(prevIndex => (prevIndex + 1) % subtitles.length);
      setIsFullStack(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % (textToAnimate.length + 1));
    }, 100); // Ajusta la velocidad aquí (en milisegundos)

    return () => clearInterval(textInterval);
  }, [textToAnimate.length]);

  return (
    <div className="index">
      <div className="title">
        <h1 className="main-title">Un Increíble Portafolio de una</h1>
        <h2 className={`sub-title ${isFullStack ? 'fullstack' : ''}`}>{subtitles[subtitleIndex]}</h2>
        <p className="subtitle-text">
          Hola, soy Vanina Rosario Balbastro, una Diseñadora UX/UI y Desarrolladora Full Stack con base en Buenos Aires. Tengo experiencia en diseño utilizando herramientas como Figma y Adobe XD, y en el desarrollo de aplicaciones utilizando tecnologías como React, Node.js, MongoDB, HTML, CSS y JavaScript, entre otras. Me apasiona crear experiencias digitales innovadoras y funcionales, y disfruto trabajando tanto de manera individual como en equipos colaborativos. Te invito a explorar mi portfolio para descubrir más sobre mis habilidades y proyectos realizados.
        </p>
      </div>

      {/* Rectángulos verticales amarillos */}
      <div className="rectangle-vertical yellow-rectangle" style={{ left: '30%' }}></div>
      <div className="rectangle-vertical yellow-rectangle" style={{ left: '40%' }}></div>
      <div className="rectangle-vertical yellow-rectangle" style={{ left: '50%' }}></div>
      <div className="rectangle-vertical yellow-rectangle" style={{ left: '60%' }}></div>
      <div className="rectangle-vertical yellow-rectangle" style={{ left: '70%' }}></div>

      {/* Rectángulos horizontales azul y verde */}
      <div className="rectangle blue-rectangle"></div>
      <div className="rectangle green-rectangle"></div>

      {/* Botón */}
      <button className="cta-button" onClick={() => window.location.href = '/proyectos'}>
        Ir a mis proyectos
      </button>

      <div><img className='Gradient-fondo' src={gradientFondo} alt="gradiante-fondo" /></div>

      {/* Container for Interactive Cards */}
      <div className="container">
        {projects.map(project => (
          <article key={project.id} className="card-animated">
            <a href={project.link} className="card-link">
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Nueva sección de texto animado */}
      <section className="animated-text-section">
        <div className="animated-text-container">
          <p className="animated-text">
            {textToAnimate.substring(0, textIndex)}
            <span className="cursor">|</span>
          </p>
        </div>
      </section>

      {/* Nueva sección de tecnologías */}
      <section className="tech-section">
        <div className="tech-grid">
          {techData.map(tech => (
            <div key={tech.name} className="tech-item">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        <div><img className='Gradient-fondo4' src={gradientFondo4} alt="gradiante-fondo" /></div>
        <div><img className='Gradient-fondo2' src={gradientFondo2} alt="gradiante-fondo" /></div>
        <div><img className='Gradient-fondo3' src={gradientFondo3} alt="gradiante-fondo" /></div>
      </section>

      {/* Rectángulo de texto en movimiento */}
      <MarqueeRectangle />

      <div className='ultimo-titulo'>
        <div className='contactame'><p>Contactame</p></div>
        <div className='lista-para'><p>Lista para diseñar y desarrollar tu próxima gran idea</p></div>
      </div>

      <div className='link1'>
        <div className='linkedin'><p>Linkedin</p></div>
        <div className='nombre'><p>Vanina Balbastro</p></div>
        <a href="https://www.linkedin.com/in/vaninabalbastro/" target="_blank" className='linkedin-button' rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className='linkedin-logo' />
          Conectar
        </a>
      </div>

      <div className='link2'>
        <div className='whatsapp'><p>Whatsapp</p></div>
        <div className='numero'><p>+54 11 5485 3629</p></div>
        <a href="https://wa.me/541154853629" target="_blank" className='whatsapp-button' rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className='whatsapp-logo' />
          Conectar
        </a>
      </div>

      {/* Repetición de la grilla de rectángulos de colores */}
      <div className="rectangle-vertical yellow-rectangle2" style={{ left: '30%' }}></div>
      <div className="rectangle-vertical yellow-rectangle2" style={{ left: '40%' }}></div>
      <div className="rectangle-vertical yellow-rectangle2" style={{ left: '50%' }}></div>
      <div className="rectangle-vertical yellow-rectangle2" style={{ left: '60%' }}></div>
      <div className="rectangle green-rectangle2"></div>
      <div className="rectangle green-rectangle2"></div>
    </div>
  );
};