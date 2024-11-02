import Navbar from './component/navbar';
import Sidebar from './component/side-bar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen bg-background text-text'>
      <Sidebar />
      <Navbar />
      <main className='flex-1 px-10 py-20 '>{children}</main>
    </div>
  );
}
