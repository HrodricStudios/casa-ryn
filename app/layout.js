import { Inter, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import FloatingSocial from "@/components/FloatingSocial";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["700", "800", "900"] // para negritas
});
const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Casa RyN - Grifería y Sanitarios de calidad",
  description: "Te esperamos con los mejores productos en grifería, sanitarios y accesorios.",
  icons: {
    icon: "/logo.png",      // favicon principal
    shortcut: "/logo.png",  // atajo
    apple: "/logo.png",     // ícono para dispositivos Apple
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${oswald.variable} scroll-smooth`}>
      <body className={inter.className}>
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}