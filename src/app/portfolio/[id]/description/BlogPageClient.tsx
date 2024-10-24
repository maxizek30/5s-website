"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

interface BlogPageClientProps {
  content: string;
}

export default function BlogPageClient({ content }: BlogPageClientProps) {
  return (
    <div className={styles.markdownContainer}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
