import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AZC store",
  description: "AZC store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <HeaderTop />
          <Navbar />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
