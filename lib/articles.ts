import fs from "node:fs"
import matter from "gray-matter"
import path from "node:path"
import { remark } from "remark"
import html from "remark-html"
import type { ArticleType } from "@/types"

const articlesDirectory = path.join(process.cwd(),"articles")

export function getSortedArticles():ArticleType[] {
  const filenames = fs.readdirSync(articlesDirectory);
  const allArticlesData = filenames.map(filename => {
    const id = filename.replace(/\.md$/,"");

    const order = Number(id.split("-")[0]);
    
    const fullPath = path.join(articlesDirectory,filename);
    const fileContents = fs.readFileSync(fullPath,"utf-8");

    const matterResults = matter(fileContents);

    return {
      id,
      order,
      title:matterResults.data.title,
      date:matterResults.data.date,
      category:matterResults.data.category,
      backgroundImage:matterResults.data.background_image,
      tags:matterResults.data.tags,
      data: fileContents,
      description:matterResults.data.description,
      readTime:matterResults.data.readTime,
    }
  })
  return allArticlesData.sort((a, b) => a.order - b.order);
}

export async function getArticleData(id:string) {
  const fullPath = path.join(articlesDirectory,`${id}.md`);

  const fileContents = fs.readFileSync(fullPath,"utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content)

  const htmlContent = processedContent.toString();

  return {
    id,
    htmlContent,
    title:matterResult.data.title,
    category:matterResult.data.category,
  }
}