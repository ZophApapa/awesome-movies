import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome movies",
  description: "Awesome movie APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          id="main-content"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
