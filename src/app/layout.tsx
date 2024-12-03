"use client"
import "./globals.css";
import Navbar from "./component/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/> 
         {children}
      </body>
    </html>
  );
}
