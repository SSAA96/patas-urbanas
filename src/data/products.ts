import alimentoPremium from '../assets/products/alimento-premium.png'
import camaOrtopedica from '../assets/products/cama-ortopedica.png'
import cepilloMascota from '../assets/products/cepillo-mascota.png'
import collarReflectante from '../assets/products/collar-reflectante.png'
import fuenteAgua from '../assets/products/fuente-agua.png'
import mordedorPerro from '../assets/products/mordedor-perro.png'
import rascadorGato from '../assets/products/rascador-gato.png'
import transportadora from '../assets/products/transportadora.png'
import varitaGato from '../assets/products/varita-gato.png'

export type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Alimento premium para perro',
    price: 18990,
    category: 'Alimentación',
    image: alimentoPremium,
  },
  {
    id: 2,
    name: 'Rascador de cartón para gato',
    price: 12990,
    category: 'Gatos',
    image: rascadorGato,
  },
  {
    id: 3,
    name: 'Mordedor resistente para perro',
    price: 7990,
    category: 'Juguetes',
    image: mordedorPerro,
  },
  {
    id: 4,
    name: 'Cama acolchada para mascota',
    price: 24990,
    category: 'Descanso',
    image: camaOrtopedica,
  },
  {
    id: 5,
    name: 'Collar reflectante para perro',
    price: 9990,
    category: 'Paseo',
    image: collarReflectante,
  },
  {
    id: 6,
    name: 'Juguete interactivo para gato',
    price: 6490,
    category: 'Juguetes',
    image: varitaGato,
  },
  {
    id: 7,
    name: 'Fuente de agua automática',
    price: 21990,
    category: 'Hidratación',
    image: fuenteAgua,
  },
  {
    id: 8,
    name: 'Transportadora ventilada',
    price: 32990,
    category: 'Viaje',
    image: transportadora,
  },
  {
    id: 9,
    name: 'Cepillo de silicona para mascotas',
    price: 8490,
    category: 'Higiene',
    image: cepilloMascota,
  },
]
