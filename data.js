import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'Hasan',
      email: 'hajih.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Max',
      email: 'hettlerm.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      
      name: 'Gucci Vase',
      bild: '/images/p1.jpg',
      startpreis: 100,
      beschreibung: 'sehr schöne luxus Vase',
      kategorie: 'Haushalt',
      rating: 3.5,
    },
    {
      
      name: 'Merkels Hammer',
      bild: '/images/p2.jpg',
      startpreis: 1500,
      beschreibung: 'machtvolles politisches Instrument',
      kategorie: 'Werkzeug',
      rating: 4.5,
    },
    {
      
      name: 'Gaming PC',
      bild: '/images/p3.jpg',
      startpreis: 100,
      beschreibung: 'geeignet für Spiele der neusten generation',
      kategorie: 'Technik',
      rating: 4.0,
    },
    {
      
      name: 'VW Polo Felgen R14',
      bild: '/images/p4.jpg',
      startpreis: 100,
      beschreibung: 'Kaum genutzte Felgen für VW Polo',
      kategorie: 'Auto',
      rating: 2.5,
    },
  ],
};
export default data;