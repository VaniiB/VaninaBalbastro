import React from 'react';
import './Card.css'; // Asegúrate de tener este archivo para los estilos de las cartas

export const Card = ({ title, content }) => {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};


