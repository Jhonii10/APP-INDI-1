import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------
const POST_TITLES = [
  'Plantillas de Pizarra por Líderes de la Industria',
  '¡Remolque Camper inspirado en Tesla Cybertruck para fanáticos de Tesla que no pueden esperar por el camión!',
  'Diseño de la Página de Destino de la Agencia Designify',
  '✨Lo Hecho, Hecho Está ✨',
  'Príncipe del Rap',
  'Six Socks Studio',
  'vincenzo de cotiis’ cruzando exhibe una investigación sobre la contaminación',
  'Animaciones Sencillas y Atractivas en Tu Proyecto | Video Tutorial',
  '40 Fuentes Serif Gratis para Diseñadores Digitales',
  'Examinando la Evolución del Cliente Típico de Diseño Web',
  'A Katie Griffin le encanta hacer ese arte hogareño',
  'El Sueño Americano Recontado a través de Gráficos Ferroviarios de Mediados de Siglo',
  'Diseño de Sistema de Ilustración',
  'CarZio-App de Inicio de Sesión/Registro del Conductor de Entrega',
  'Cómo crear una aplicación Jamstack sin servidor de cliente usando Netlify, Gatsby y Fauna',
  'Tylko Ordena sin esfuerzo - Diseño 3D y en Movimiento',
  'RAYO ?? Identidad del festival de artes visuales expandida',
  'Anthony Burrill y Andrew Diprose de la revista Wired discuten cómo hicieron la portada de enero de Change Everything',
  'Dentro de la Mente de Samuel Day',
  'Revisión de Portafolio: ¿Es Este Portafolio Demasiado Creativo?',
  'Akkers van Margraten',
  'Ícono de boleto degradado',
  '¡Aquí hay un concepto de motocicleta Dyson que no apesta!',
  'Cómo animar un SVG con border-image',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int({ max: 99999 }),
  comment:faker.number.int({ max: 99999 }),
  share: faker.number.int({ max: 99999 }),
  favorite: faker.number.int({ max: 99999 }),
  author: {
    name: faker.person.firstName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));


export default posts;


