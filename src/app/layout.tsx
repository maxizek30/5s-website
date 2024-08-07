import type { Metadata } from "next";
import Navigation from "./components/navigation/Navigation";
import styles from "./styles.module.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <div className={styles.grainOverlay}></div>
        <header style={{ width: "95%" }}>
          <Navigation />
        </header>
        <main className={styles.children}>{children}</main>
      </body>
    </html>
  );
}
