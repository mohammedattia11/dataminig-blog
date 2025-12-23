import fs from "node:fs"
import matter from "gray-matter"
import path from "node:path"
import { remark } from "remark"
import html from "remark-html"
import moment from "moment"
import type { ArticleType } from "@/types"

const articlesDirectory = path.join(process.cwd(),"articles")

function getSortedArticles():ArticleType[] {
  const filenames = fs.readdirSync(articlesDirectory);
  const allArticlesData = filenames.map(filename => {
    const id = filename.replace(/\.md$/,"");
    
    const fullPath = path.join(articlesDirectory,filename);
    const fileContents = fs.readFileSync(fullPath,"utf-8");

    const matterResults = matter(fileContents);

    return {
      id,
      title:matterResults.data.title,
      date:matterResults.data.date,
      category:matterResults.data.category,
      data: fileContents,
    }
  })
  return allArticlesData.sort((a,b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date,format);
    const dateTwo = moment(b.date,format);
    if (dateOne.isBefore(dateTwo)) return -1;
    else if(dateTwo.isAfter(dateOne)) return 1;
    else return 0;
  })
}

export function getCategorizedArticles() : Record<string,ArticleType[]> {
  const sortedArticles = getSortedArticles();
  const categorizedArticles:Record<string,ArticleType[]> = {};

  sortedArticles.forEach(article => {
    if (!categorizedArticles[article.category]) {
      categorizedArticles[article.category] = [];
    }
    categorizedArticles[article.category].push(article);
  })
  return categorizedArticles;
}
