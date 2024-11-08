export const ColorsData = [
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Olive', hex: '#808000' },
  { name: 'Green', hex: '#008000' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Mint', hex: '#98FF98' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Ivory', hex: '#FFFFF0' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Aqua', hex: '#00FFFF' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Periwinkle', hex: '#CCCCFF' },
  { name: 'Chartreuse', hex: '#7FFF00' },
];
export const categories: Categories[] = [
  { id: 1, name: 'furniture', description: '-', imageUrl: '-' },
  { id: 2, name: 'living room', description: '-', imageUrl: '-' },
];
export const materials: Materials[] = [
  { id: 1, name: 'leather', description: '-', imageUrl: '-' },
  { id: 2, name: 'wood', description: '-', imageUrl: '-' },
];
export const projects: Project[] = [
  {
    id: 1,
    name: 'Neil Sims',
    role: 'React Developer',
    email: 'neil.sims@flowbite.com',
    orderDate: '27-October-2024',
    status: 'progress',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Backend Developer',
    email: 'john.doe@flowbite.com',
    orderDate: '27-October-2024',
    status: 'complete',
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Frontend Developer',
    email: 'jane.smith@flowbite.com',
    orderDate: '27-October-2024',
    status: 'unconfirmed',
  },
];
export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Sofa',
    description:
      'Sofa yang nyaman dengan desain modern. dfaisugblkjhoilksjhda klojasdlkjasldkj saiojdalksjd asdjkasldjas dlkj ',
    category: [
      {
        id: 1,
        name: 'Furniture',
        description: 'Perabotan rumah tangga',
        imageUrl: 'http://localhost:3000/images/living_room.jpg',
      },
    ],
    price: 7500000,
    dimensions: { width: 200, height: 85, depth: 90 },
    weight: 60,
    material: [
      {
        id: 1,
        name: 'Kulit',
        description: 'Kulit asli berkualitas tinggi',
        imageUrl: '',
      },
    ],
    colors: [
      {
        name: 'Hitam',
        hex: '#000000',
        imageUrls: [
          'http://localhost:3000/images/living_room.jpg',
          'http://localhost:3000/images/living_room.jpg',
        ],
      },
    ],
    stockQuantity: 10,
    isCustomizable: true,
    manufacturer: 'SofaCorp',
    warranty: { period: '2 tahun', coverage: 'Cacat pabrik' },
    modelUrls: 'https://example.com/model/sofa-modern.glb',
    videoUrls: 'https://example.com/video/sofa-review.mp4',
    createdDate: new Date('2023-01-15'),
    updatedDate: new Date('2024-01-20'),
  },
  {
    id: 2,
    name: 'Rak Buku Kayu',
    description: 'Rak buku minimalis dengan bahan kayu berkualitas.',
    category: [
      {
        id: 2,
        name: 'Dekorasi',
        description: 'Barang untuk menghiasi rumah',
        imageUrl: 'http://localhost:3000/images/living_room.jpg',
      },
    ],
    price: 1500000,
    dimensions: { width: 80, height: 180, depth: 30 },
    weight: 25,
    material: [
      {
        id: 2,
        name: 'Kayu',
        description: 'Kayu jati berkualitas',
        imageUrl: '',
      },
    ],
    colors: [
      {
        name: 'Cokelat',
        hex: '#8B4513',
        imageUrls: [
          'http://localhost:3000/images/living_room.jpg',
          'http://localhost:3000/images/living_room.jpg',
        ],
      },
    ],
    stockQuantity: 5,
    isCustomizable: false,
    manufacturer: 'WoodCraft',
    warranty: { period: '1 tahun', coverage: 'Kerusakan struktural' },
    modelUrls: 'https://example.com/model/bookcase.glb',
    videoUrls: 'https://example.com/video/bookcase-review.mp4',
    createdDate: new Date('2023-05-10'),
    updatedDate: new Date('2024-02-18'),
  },
];
export const rooms: Rooms[] = [
  {
    id: 1,
    name: 'Living Room',
    description:
      'A cozy living room with a modern design and comfortable seating.',
    imageUrl: [
      'http://localhost:3000/images/living_room.jpg',
      'http://localhost:3000/images/living_room.jpg',
    ],
    modelUrl: 'https://example.com/living-room-model.glb',
    videoUrl: 'https://example.com/living-room-tour.mp4',
    style: [
      {
        id: 1,
        name: 'Modern',
        description: 'A clean and minimalistic modern style.',
        imageUrl: 'https://example.com/modern-style.jpg',
      },
      {
        id: 2,
        name: 'Scandinavian',
        description: 'A style that emphasizes simplicity and functionality.',
        imageUrl: 'https://example.com/scandinavian-style.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Bedroom',
    description: 'A relaxing bedroom designed with a calm color palette.',
    imageUrl: [
      'http://localhost:3000/images/living_room.jpg',
      'http://localhost:3000/images/living_room.jpg',
    ],
    modelUrl: 'https://example.com/bedroom-model.glb',
    videoUrl: 'https://example.com/bedroom-tour.mp4',
    style: [
      {
        id: 3,
        name: 'Minimalist',
        description:
          'A minimalist style with a focus on clean lines and simplicity.',
        imageUrl: 'https://example.com/minimalist-style.jpg',
      },
      {
        id: 4,
        name: 'Industrial',
        description:
          'An industrial style with exposed materials and neutral tones.',
        imageUrl: 'https://example.com/industrial-style.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Kitchen',
    description: 'A functional kitchen with ample space and modern appliances.',
    imageUrl: [
      'http://localhost:3000/images/living_room.jpg',
      'http://localhost:3000/images/living_room.jpg',
    ],
    modelUrl: 'https://example.com/kitchen-model.glb',
    videoUrl: 'https://example.com/kitchen-tour.mp4',
    style: [
      {
        id: 5,
        name: 'Contemporary',
        description:
          'A contemporary style with sleek finishes and modern elements.',
        imageUrl: 'https://example.com/contemporary-style.jpg',
      },
      {
        id: 6,
        name: 'Rustic',
        description: 'A rustic style with natural materials and warm tones.',
        imageUrl: 'https://example.com/rustic-style.jpg',
      },
    ],
  },
];
export const roomsProduct: RoomsProduct[] = [
  {
    id: 1,
    rooms: 1,
    product: [1, 2],
  },
  {
    id: 2,
    rooms: 2,
    product: [2, 3],
  },
  {
    id: 3,
    rooms: 3,
    product: [1],
  },
];

export const styleRooms: StyleRoom[] = [
  {
    id: 1,
    name: 'Modern',
    description: 'A clean and minimalistic modern style.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
  {
    id: 2,
    name: 'Scandinavian',
    description: 'A style that emphasizes simplicity and functionality.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
  {
    id: 3,
    name: 'Minimalist',
    description:
      'A minimalist style with a focus on clean lines and simplicity.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
  {
    id: 4,
    name: 'Industrial',
    description:
      'An industrial style with exposed materials and neutral tones.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
  {
    id: 5,
    name: 'Contemporary',
    description:
      'A contemporary style with sleek finishes and modern elements.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
  {
    id: 6,
    name: 'Rustic',
    description: 'A rustic style with natural materials and warm tones.',
    imageUrl: 'http://localhost:3000/images/living_room.jpg',
  },
];

export const customers: Customers[]=[
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    registrationDate: '2024-01-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    registrationDate: '2024-02-15',
  },
]