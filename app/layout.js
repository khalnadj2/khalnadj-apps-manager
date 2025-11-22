import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Android App Manager",
  description: "Manage your Android applications with ease.",
  icons: {
    icon: '/khalnadj-apps-manager/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container" style={{ paddingBottom: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
