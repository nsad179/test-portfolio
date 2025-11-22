import { MetadataRoute } from 'next'
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
    const filePath = path.join(process.cwd(), "public/data/work-data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    const caseStudies = data.workData.map((work: any) => ({
        url: `https://www.neerajkumarseo.com/case-studies/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }));

    return [
        {
            url: 'https://www.neerajkumarseo.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...caseStudies,
    ]
}
