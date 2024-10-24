import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import BlogPageClient from "./BlogPageClient";

async function getBlogContent(id: string): Promise<string> {
  const blogsDirectory = path.join(
    process.cwd(),
    "src",
    "app",
    "portfolio",
    "blogs"
  );
  const filePath = path.join(blogsDirectory, `${id}.md`);

  try {
    console.log(id);
    const fileContents = await fs.readFile(filePath, "utf8");
    return fileContents;
  } catch (error) {
    console.error("Error reading markdown file:", error);
    notFound();
  }
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  console.log("params:", params);
  const content = await getBlogContent(params.id);

  if (!content) {
    return <div>Blog not found</div>;
  }

  return <BlogPageClient content={content} />;
}
