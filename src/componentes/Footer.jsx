import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Importa los estilos de MDBootstrap

export const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center'>
      <div className='text-center p-3' style={{ backgroundColor: '#232323', color:'#ffffff' }}>
        &copy; {new Date().getFullYear()} Diseñado y desarrollado por Vanina Balbastro. Todos los derechos reservados.
      </div>
    </MDBFooter>
  );
}
