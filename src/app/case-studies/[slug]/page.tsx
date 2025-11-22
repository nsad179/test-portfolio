import CaseStudyDetail from "@/app/components/case-study";
import { getDataPath } from "@/utils/image";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

// Generate static params for all case studies
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), "public/data/work-data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return data.workData.map((work: any) => ({
        slug: work.slug,
    }));
}

async function getCaseStudy(slug: string) {
    // In a real app with API, we'd fetch. Here we read the file directly for server component
    // or fetch from the public URL if client-side. Since this is a server component, we can read file.
    // However, for simplicity and consistency with client components, let's read the file.
    const filePath = path.join(process.cwd(), "public/data/work-data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    const caseStudy = data.workData.find((work: any) => work.slug === slug);
    return caseStudy;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getCaseStudy(slug);

    if (!data) {
        notFound();
    }

    return <CaseStudyDetail data={data} />;
}
