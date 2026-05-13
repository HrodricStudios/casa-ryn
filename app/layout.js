import { Inter } from "next/font/google";
import "./globals.css";
import FloatingSocial from "../components/FloatingSocial";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Casa RyN - Grifería y Sanitarios de calidad",
  description: "Te esperamos con los mejores productos en grifería, sanitarios y accesorios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}