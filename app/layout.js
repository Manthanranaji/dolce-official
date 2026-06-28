import { Cormorant_Garamond, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","200","400","500","600"]
});

export const metadata = {
  title: "Dolce",
  description: "A premium patisserie, fine dining.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        {children}
      </body>

    </html>
  );
}