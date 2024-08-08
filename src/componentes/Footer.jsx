
import '../css/footer.css'; // Archivo CSS para estilos del footer

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Información de contacto</h3>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: contacto@ejemplo.com</p>
          </div>
          <div className="col">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de nosotros</a></li>
              <li><a href="/services">Servicios</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Redes sociales</h3>
            <ul className="social-icons">
              <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nombre de tu empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}


