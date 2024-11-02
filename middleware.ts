// BUATKAN DISINI UNTUK CHECK AUTHENTIKASI

// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Periksa URL yang diminta
//   const { pathname } = request.nextUrl;

//   // Misalnya, kita ingin memproteksi halaman dashboard
//   if (pathname.startsWith('/')) {
//     // Cek token autentikasi dari cookie
//     const token = request.cookies.get('auth-token');

//     // Jika token tidak ada, redirect ke halaman login
//     if (!token) {
//       const loginUrl = new URL('/login', request.url);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   // Jika semua kondisi terpenuhi, lanjutkan request
//   return NextResponse.next();
// }
