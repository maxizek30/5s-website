// src/app/projects/[id]/ProjectPageClient.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "../../types/project";
import styles from "./styles.module.css";
import { useMouseTracking } from "@/app/hooks/useMouseTracking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectPageClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const techContainerRef = useRef<HTMLDivElement>(null);
  const githubContainerRef = useRef<HTMLAnchorElement>(null);
  const descriptionContainerRef = useRef<HTMLDivElement>(null);
  const linkContainerRef = useRef<HTMLAnchorElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);

  useMouseTracking(githubContainerRef, "#97F294"); // Green
  useMouseTracking(descriptionContainerRef, "#8D41BF"); // Red
  useMouseTracking(linkContainerRef, "#592EF2"); // Blue
  useMouseTracking(headerContainerRef, "#F2622E"); // Yellow

  useEffect(() => {
    function setGap() {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const gapSize = (containerHeight * 2) / 100; // 2% of the container's height
        containerRef.current.style.gap = `${gapSize}px`;
        if (techContainerRef.current) {
          techContainerRef.current.style.gap = `${gapSize}px`;
        }
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
        <div
          className={`${styles.headerContainer} ${styles.bentoContainer}`}
          ref={headerContainerRef}
        >
          <h1 style={{ fontSize: "7vw", fontWeight: 1000 }}>{project.title}</h1>
        </div>
        <div className={styles.imageContainer}>
          <img src={project.thumbnail} alt={project.thumbnailAlt} />
        </div>
        <div className={styles.techContainer} ref={techContainerRef}>
          {project.technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <img src={`/logos/${tech}.png`} alt={`${tech} logo`} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div
          className={`${styles.descriptionContainer} ${styles.bentoContainer}`}
          ref={descriptionContainerRef}
        >
          <p>{project.longDescription}</p>
        </div>
        <a
          className={`${styles.githubContainer} ${styles.bentoContainer}`}
          href={project.githubLink}
          ref={githubContainerRef}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
        </a>
        <a
          className={`${styles.linkContainer} ${styles.bentoContainer}`}
          href={project.liveLink}
          ref={linkContainerRef}
        >
          <FontAwesomeIcon icon={faGlobe} className={styles.linkIcon} />
        </a>
      </div>
    </div>
  );
}
