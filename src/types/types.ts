interface Project {
  id: number;
  name: string;
  role: string;
  email: string;
  orderDate: string;
  status: 'progress' | 'complete' | 'unconfirmed';
}
interface Categories {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
interface Materials {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface Product {
  id: number;
  // SKU: string; generate in backend
  name: string;
  description: string;
  category: Categories[];
  price: number;
  dimensions: {
    width: number; // Width in cm or inches
    height: number; // Height in cm or inches
    depth: number; // Depth in cm or inches
  };
  weight: number;
  material: Materials[];
  colors: Array<{
    name: string;
    hex: string;
    imageUrls: string[];
  }>;
  stockQuantity: number;
  isCustomizable: boolean;
  manufacturer: string; // Manufacturer or brand name
  warranty: {
    period: string; // e.g., "2 years"
    coverage: string; // e.g., "Manufacturer defects only"
  };
  // imageUrls: string[];
  modelUrls: string;
  videoUrls: string;
  createdDate: Date; // Date the product was added to the catalog
  updatedDate: Date; // Last update date for the product details
}
interface Reviews {
  id: number;
  productId: number; // ID Produk terkait
  userId: number;
  rating: number; // Nilai rating
  comment: string; // Isi komentar
  date: Date; // Tanggal ulasan
}
