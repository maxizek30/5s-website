"use client";

// app/layout.tsx
import Navigation from "./components/navigation/Navigation";
import styles from "./styles.module.css";
import "./global.css";
import Script from "next/script";
import { useRef } from "react";
declare var grained: any;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const grained_container = useRef();

  return (
    <html lang="en">
      <body
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
        }}
        className={styles.bodyContainer}
      >
        <div
          id="grain-container"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />
        <div className={styles.container}>
          <header
            style={{
              width: "92%",
              height: "8%",
              display: "flex",
            }}
          >
            <Navigation />
          </header>
          <main className={styles.children}>{children}</main>
        </div>
      </body>
      <Script
        src="/grained.js"
        onLoad={() => {
          var options = {
            animate: true,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.15,
            grainDensity: 2,
            grainWidth: 1.1,
            grainHeight: 1.1,
          };

          grained("#grain-container", options);
        }}
      />
    </html>
  );
}
