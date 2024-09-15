// src/app/projects/[id]/ProjectPageClient.tsx
"use client";

import { useEffect, useRef } from "react";
import { Project } from "../../types/project";
import styles from "./styles.module.css";
import Image from "next/image";

export default function ProjectPageClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const techContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function setGap() {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const gapSize = (containerHeight * 2) / 100; // 2% of the container's height
        containerRef.current.style.gap = `${gapSize}px`;
        techContainerRef.current.style.gap = `${gapSize}px`;
      }
    }

    setGap();
    window.addEventListener("resize", setGap);

    return () => {
      window.removeEventListener("resize", setGap);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.leftSide}>
        <div className={styles.headerContainer}>
          <h1 style={{ fontSize: "7vw" }}>{project.title}</h1>
        </div>
        <div className={styles.imageContainer}>
          <img src={project.thumbnail} alt={project.thumbnailAlt} />
        </div>
        <div className={styles.techContainer} ref={techContainerRef}>
          {project.technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <img
                src={`/logos/${tech}.png`}
                alt={`${tech} logo`}
                style={{ width: "50%", maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.descriptionContainer}>
          <p>{project.longDescription}</p>
        </div>
        <a className={styles.githubContainer} href={project.githubLink}>
          <img
            src="/logos/githubLogo.png"
            alt="GitHub Logo"
            className={styles.githubImage}
          />
        </a>
        <a className={styles.linkContainer} href={project.liveLink}>
          <img
            src="/logos/globe.svg"
            alt="GitHub Logo"
            className={styles.linkImage}
          />
        </a>
      </div>
    </div>
  );
}
