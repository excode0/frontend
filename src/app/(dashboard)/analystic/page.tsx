'use client';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement, // Tambahkan PointElement
} from 'chart.js';
import {
  categories,
  products,
  projects,
  rooms,
  roomsProduct,
  styleRooms,
} from '@/data/dataDummy';

// Daftarkan elemen yang dibutuhkan
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement, // Pastikan PointElement didaftarkan
);

const AnalysticPage = () => {
  const [productData, setProductData] = useState<Product[] | undefined>();
  const [roomData, setRoomData] = useState<Rooms[] | undefined>();
  const [orderData, setOrderData] = useState<Project[] | undefined>();

  useEffect(() => {
    setProductData(products);
    setRoomData(rooms);
    setOrderData(projects);
  }, []);

  if (!productData || !roomData || !orderData) {
    return <div className='text-center py-10'>Loading...</div>;
  }

  // Chart: Produk berdasarkan kategori
  const categoryDataConfig = {
    labels: categories.map((cat) => cat.name),
    datasets: [
      {
        label: 'Products by Category',
        data: categories.map(
          (cat) =>
            productData?.filter((p) => p.category.some((c) => c.id === cat.id))
              .length || 0,
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Chart: Produk berdasarkan warna
  const colorDataConfig = {
    labels: ['Red', 'Blue', 'Green', 'Yellow'],
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: ['#FF5733', '#3498DB', '#2ECC71', '#F1C40F'],
      },
    ],
  };

  // Chart: Jumlah produk per ruangan
  const roomProductCount = styleRooms.map((room) => {
    const relatedRoom = roomsProduct.find((rp) => rp.rooms === room.id);
    return {
      ...room,
      productCount: relatedRoom ? relatedRoom.product.length : 0,
    };
  });
  const roomDataConfig = {
    labels: roomProductCount.map((room) => room.name),
    datasets: [
      {
        label: 'Number of Products',
        data: roomProductCount.map((room) => room.productCount || 0),
        backgroundColor: [
          '#8E44AD',
          '#2980B9',
          '#27AE60',
          '#E67E22',
          '#FF5733',
          '#3498DB',
        ],
      },
    ],
  };

  // Chart: Pesanan per bulan
  const orderByMonthConfig = {
    labels: ['August', 'September', 'October'],
    datasets: [
      {
        label: 'Orders',
        data: [2, 3, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart: Status pesanan
  const orderStatusConfig = {
    labels: ['Complete', 'Progress', 'Unconfirmed'],
    datasets: [
      {
        data: [
          orderData?.filter((order) => order.status === 'complete').length || 0,
          orderData?.filter((order) => order.status === 'progress').length || 0,
          orderData?.filter((order) => order.status === 'unconfirmed').length ||
            0,
        ],
        backgroundColor: ['#28A745', '#FFC107', '#DC3545'],
      },
    ],
  };

  return (
    <div className='p-6 text-text'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Analytics Dashboard
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Grafik Produk Berdasarkan Kategori */}
        <div className='p-4 shadow-lg rounded-lg bg-backgroundSecond'>
          <h2 className='text-lg font-semibold mb-4'>Products by Category</h2>
          <Pie data={categoryDataConfig} options={{ responsive: true }} />
        </div>

        {/* Grafik Produk Berdasarkan Warna */}
        <div className='p-4 shadow-lg rounded-lg bg-backgroundSecond'>
          <h2 className='text-lg font-semibold mb-4'>Products by Color</h2>
          <Doughnut data={colorDataConfig} options={{ responsive: true }} />
        </div>

        {/* Grafik Produk per Ruangan */}
        <div className='p-4 shadow-lg rounded-lg bg-backgroundSecond'>
          <h2 className='text-lg font-semibold mb-4'>Products per Room</h2>
          <Bar data={roomDataConfig} options={{ responsive: true }} />
        </div>

        {/* Grafik Pesanan per Bulan */}
        <div className='p-4 shadow-lg rounded-lg bg-backgroundSecond'>
          <h2 className='text-lg font-semibold mb-4'>Orders per Month</h2>
          <Line data={orderByMonthConfig} options={{ responsive: true }} />
        </div>

        {/* Grafik Status Pesanan */}
        <div className='p-4 shadow-lg rounded-lg bg-backgroundSecond'>
          <h2 className='text-lg font-semibold mb-4'>
            Order Status Distribution
          </h2>
          <Doughnut data={orderStatusConfig} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default AnalysticPage;
