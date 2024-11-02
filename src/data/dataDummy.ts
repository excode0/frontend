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
    name: "Modern Sofa",
    description: "Sofa yang nyaman dengan desain modern.",
    category: [
      { id: 1, name: "Furniture", description: "Perabotan rumah tangga", imageUrl: "https://example.com/image1.jpg" }
    ],
    price: 7500000,
    dimensions: { width: 200, height: 85, depth: 90 },
    weight: 60,
    material: [
      { id: 1, name: "Kulit", description: "Kulit asli berkualitas tinggi", imageUrl:'' }
    ],
    colors: [
      {
        name: "Hitam",
        hex: "#000000",
        imageUrls: [
          "https://example.com/sofa-black-1.jpg",
          "https://example.com/sofa-black-2.jpg"
        ]
      }
    ],
    stockQuantity: 10,
    isCustomizable: true,
    manufacturer: "SofaCorp",
    warranty: { period: "2 tahun", coverage: "Cacat pabrik" },
    modelUrls: "https://example.com/model/sofa-modern.glb",
    videoUrls: "https://example.com/video/sofa-review.mp4",
    createdDate: new Date("2023-01-15"),
    updatedDate: new Date("2024-01-20")
  },
  {
    id: 2,
    name: "Rak Buku Kayu",
    description: "Rak buku minimalis dengan bahan kayu berkualitas.",
    category: [
      { id: 2, name: "Dekorasi", description: "Barang untuk menghiasi rumah", imageUrl: "https://example.com/image2.jpg" }
    ],
    price: 1500000,
    dimensions: { width: 80, height: 180, depth: 30 },
    weight: 25,
    material: [
      { id: 2, name: "Kayu", description: "Kayu jati berkualitas", imageUrl:'' }
    ],
    colors: [
      {
        name: "Cokelat",
        hex: "#8B4513",
        imageUrls: [
          "https://example.com/bookcase-brown-1.jpg",
          "https://example.com/bookcase-brown-2.jpg"
        ]
      }
    ],
    stockQuantity: 5,
    isCustomizable: false,
    manufacturer: "WoodCraft",
    warranty: { period: "1 tahun", coverage: "Kerusakan struktural" },
    modelUrls: "https://example.com/model/bookcase.glb",
    videoUrls: "https://example.com/video/bookcase-review.mp4",
    createdDate: new Date("2023-05-10"),
    updatedDate: new Date("2024-02-18")
  }
];
