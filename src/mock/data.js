import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agustin Diego Jaime || Dev 💻',
  lang: 'es',
  description: '¡Hola! Soy Agustin Jaime, y este es mi portfolio !',
};

// ME DATA
export const meData = {
  title: 'Hola, soy',
  name: 'Agustin Diego Jaime',
  subtitle: 'Desarrollador Fullstack en JavaScript',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  resume: 'https://www.linkedin.com/in/agustin-diego-jaime-4033041b7/',
  cv: 'https://drive.google.com/file/d/1d67Fcnu_fGYWfW2Zy49xLWYdQUWUWilR/view',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'E-Commerce Clotheny',
    info:
      'E-Commerce de venta de ropa en formato digital. Hecho con React, Redux, Express, PostgreSQL, Sequelize, Passport entre otros.',
    url: 'https://github.com/AgustinJaime99/E-Commece-SoyHenry',
    repo: 'https://github.com/AgustinJaime99/E-Commece-SoyHenry',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Henry-App',
    info:
      'Aplicacion Web y Mobile para administrar la academia virtual "Soy Henry". Hecho con React, React Native, MongoDB, entre otros.',
    url: 'https://github.com/sirifacu/HenryLabs',
    repo: 'https://github.com/sirifacu/HenryLabs',
  },
  {
    id: nanoid(),
    img: 'superhero.png',
    title: 'SuperHero App',
    info:
      'Aplicacion Web que consume datos de una API de super heroes, donde podes crear un equipo de hasta 6 personajes. Hecho con React.',
    url: 'https://github.com/AgustinJaime99/challenge-react',
    repo: 'https://github.com/AgustinJaime99/challenge-react',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '¿Te gustan mis trabajos?',
  btn: 'Contactame',
  email: 'agustindiegojaime@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agustin-diego-jaime-4033041b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AgustinJaime99',
    },
  ],
};
