import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import ToTopButton from "@/components/ToTopButton/ToTopButton";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Arch Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToTopButton />
        <Footer />
      </body>
    </html>
  );
}
