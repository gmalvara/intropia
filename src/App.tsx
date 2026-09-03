import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Conviccion } from './sections/Conviccion';
import { Enfoque } from './sections/Enfoque';
import { Servicios } from './sections/Servicios';
import { GestionCambio } from './sections/GestionCambio';
import { Valor } from './sections/Valor';
import { Metodologias } from './sections/Metodologias';
import { Experiencia } from './sections/Experiencia';
import { Galeria } from './sections/Galeria';
import { Nosotros } from './sections/Nosotros';
import { Contacto } from './sections/Contacto';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a href="#contenido" className="visually-hidden">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Conviccion />
        <Enfoque />
        <Servicios />
        <GestionCambio />
        <Valor />
        <Metodologias />
        <Experiencia />
        <Galeria />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
