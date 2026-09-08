import alimentoPerro from '../assets/products/alimento-perro.jpg'
import camaMascota from '../assets/products/cama-mascota.jpg'
import collarPerro from '../assets/products/collar-perro.jpg'
import jugueteGato from '../assets/products/juguete-gato.jpg'
import juguetePerro from '../assets/products/juguete-perro.jpg'
import rascadorGato from '../assets/products/rascador-gato.jpg'

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
    image: alimentoPerro,
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
    image: juguetePerro,
  },
  {
    id: 4,
    name: 'Cama acolchada para mascota',
    price: 24990,
    category: 'Descanso',
    image: camaMascota,
  },
  {
    id: 5,
    name: 'Collar reflectante para perro',
    price: 9990,
    category: 'Paseo',
    image: collarPerro,
  },
  {
    id: 6,
    name: 'Juguete interactivo para gato',
    price: 6490,
    category: 'Juguetes',
    image: jugueteGato,
  },
]
