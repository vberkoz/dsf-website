import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';
import remarkBreaks from 'remark-breaks'

const postsDirectory = path.join(process.cwd(), "data/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory).slice(0, 5);
  const allPostsData: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
  }[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      image: matterResult.data.image,
      title: matterResult.data.title,
      author: matterResult.data.author,
      excerpt: matterResult.data.excerpt,
      date: matterResult.data.date,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(remarkBreaks)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    image: matterResult.data.image,
    title: matterResult.data.title,
    author: matterResult.data.author,
    excerpt: matterResult.data.excerpt,
    date: matterResult.data.date,
    contentHtml,
    prev: matterResult.data.prev,
    prevCap: matterResult.data.prevCap,
    next: matterResult.data.next,
    nextCap: matterResult.data.nextCap,
  };
}
