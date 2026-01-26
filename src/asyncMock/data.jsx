const products = [
  {
    id: '001',
    name: 'Casco Dark',
    category: 'cascos',
    price: 89990,
    stock: 15,
    size: ['S', 'M', 'L'],
    description: 'Casco dark de microfibra',
    imageUrl: 'https://i.postimg.cc/pTqk3F8d/casco1.png'
  },
  {
    id: '002',
    name: 'Casco Abatible Street',
    category: 'cascos',
    price: 250000,
    stock: 25,
    size: ['S', 'M', 'XL'],
    description: 'Casco abatible color negro',
    imageUrl: 'https://i.postimg.cc/XJVQ28ZF/casco2.png'
  },
  {
    id: '003',
    name: 'Casco Street Beige',
    category: 'cascos',
    price: 125000,
    stock: 12,
    size: ['S', 'M', 'L'],
    description: 'Casco street color beige claro - No abatible',
    imageUrl: 'https://i.postimg.cc/RFXG2HfF/casco3.png'
  },
  {
    id: '004',
    name: 'Airoh Casco Offroad',
    category: 'cascos',
    price: 280000,
    stock: 19,
    size: ['M', 'XL', 'L'],
    description: 'Casco para enduro 2 colores - Talla L',
    imageUrl: 'https://i.postimg.cc/FRDGwLcH/casco4.png'
  },
  {
    id: '005',
    name: 'Casco Black',
    category: 'cascos',
    price: 95000,
    stock: 13,
    size: ['S', 'XS', 'L'],
    description: 'Casco para calle color negro - No abatible, sencillo',
    imageUrl: 'https://i.postimg.cc/XJQxtCFZ/casco5.png'
  },
  {
    id: '006',
    name: 'Alpinestars Impermeable',
    category: 'chaqueta',
    price: 185000,
    stock: 25,
    size: ['M', 'L', 'XL'],
    description: 'Chaqueta Alpinestars impermeable para moto con protecciones integradas',
    imageUrl: 'https://i.postimg.cc/63YzFvRG/chaqueta1.png'
  },
  {
    id: '007',
    name: 'Chaqueta Alpinestars Negra',
    category: 'chaqueta',
    price: 195000,
    stock: 25,
    size: ['M', 'L', 'XL'],
    description: 'Chaqueta Alpinestars impermeable Negra para moto con protecciones integradas',
    imageUrl: 'https://i.postimg.cc/LXNvG1fg/chaqueta2.png'
  },
  {
    id: '008',
    name: 'Chaqueta Naranja',
    category: 'chaqueta',
    price: 125000,
    stock: 28,
    size: ['S', 'M', 'L'],
    description: 'Chaqueta Naranja doble capa - solo con protecciones a los codos',
    imageUrl: 'https://i.postimg.cc/KzJQCMLk/chaqueta3.png'
  },
  {
    id: '009',
    name: 'Chaqueta Fox Negra',
    category: 'chaqueta',
    price: 195000,
    stock: 19,
    size: ['M', 'L', 'XL'],
    description: 'Chaqueta Fox Negra para moto con protecciones integradas',
    imageUrl: 'https://i.postimg.cc/vB3XCV95/chaqueta4.png'
  },
  {
    id: '010',
    name: 'Chaqueta Spidi Negra',
    category: 'chaqueta',
    price: 78000,
    stock: 30,
    size: ['M', 'L', 'XL'],
    description: 'Chaqueta Spidi Negra para moto con protecciones integradas',
    imageUrl: 'https://i.postimg.cc/vB3XCV9r/chaqueta5.png'
  },
  {
    id: '011',
    name: 'Botas Gaerne Naranjas',
    category: 'protectores',
    price: 380000,
    stock: 30,
    size: ['M', 'L', 'XL'],
    description: 'Botas Gaerne Naranjas Offroad, con tres seguros y proteccion de tobillo',
    imageUrl: 'https://i.postimg.cc/sgCjMQQG/botas_naranja.png'
  },
  {
    id: '012',
    name: 'Guantes Azules Gaerne',
    category: 'protectores',
    price: 159000,
    stock: 45,
    size: ['XS', 'S', 'M'],
    description: 'Guantes Azules Gaerne para moto con protecciones en nudillos e impermeables',
    imageUrl: 'https://i.postimg.cc/W1cNdFFK/guantes_azul.png'
  },
  {
    id: '013',
    name: 'Botas Negras Genericas',
    category: 'protectores',
    price: 78000,
    stock: 30,
    size: ['M', 'L', 'XL'],
    description: 'Botas negras para calle en ciudad',
    imageUrl: 'https://i.postimg.cc/jS6sPxPh/botas_negras.png'
  },
  {
    id: '014',
    name: 'Guantes Black Protector',
    category: 'protectores',
    price: 48990,
    stock: 8,
    size: ['XS', 'S', 'M'],
    description: 'Guantes Black Protector para moto con protecciones en nudillos e impermeables',
    imageUrl: 'https://i.postimg.cc/dVcshkkp/guantes_negros.png'
  },
  {
    id: '015',
    name: 'Protector Espalda Offroad',
    category: 'protectores',
    price: 98990,
    stock: 30,
    size: ['M', 'L', 'XL'],
    description: 'Protector Espalda Offroad, adaptable a diferentes chaquetas de calle o offroad',
    imageUrl: 'https://i.postimg.cc/pTSxRpMz/protector_espalda.png'
  },
  {
    id: '016',
    name: 'Rodilleras Green',
    category: 'protectores',
    price: 58900,
    stock: 15,
    size: ['S', 'M', 'L'],
    description: 'Rodillera para offroad / calle o city, adaptable a tamaños',
    imageUrl: 'https://i.postimg.cc/Y0m79Mtf/rodilleras_g.png'
  },
  {
    id: '017',
    name: 'Rodilleras Negras',
    category: 'protectores',
    price: 28900,
    stock: 21,
    size: ['XS', 'M', 'S'],
    description: 'Rodilleras Negras para moto con protecciones integradas',
    imageUrl: 'https://i.postimg.cc/PJ8HxTd2/rodilleras_negras.png'
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};


export const getOneProduct = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((item) => item.id === itemId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Producto no encontrado"));
            }
        }, 2000);
    })
}