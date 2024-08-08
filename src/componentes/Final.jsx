
import '../css/final.css';
import linkedinIcon from '../recursos/iconos/—Pngtree—white linkedin icon png_3562068.png';
import whatsappIcon from '../recursos/iconos/—Pngtree—white whatsapp icon png_3562063.png';



export const Final = () => {
  return (
    <div className='contact-section'>
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

    
    </div>
  );
};

