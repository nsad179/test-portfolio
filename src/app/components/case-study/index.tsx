"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const CaseStudyDetail = ({ data }: { data: any }) => {
    if (!data) return null;

    return (
        <section className="py-24 md:py-32">
            <div className="container">
                {/* Header Section */}
                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        {data.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 md:gap-8 text-lg text-secondary">
                        <p><span className="font-semibold text-black">Client:</span> {data.client}</p>
                        <p><span className="font-semibold text-black">Role:</span> {data.role}</p>
                    </div>
                </div>

                {/* Main Image */}
                <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-2xl overflow-hidden">
                    <Image
                        src={getImgPath(data.image)}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        {/* Challenge */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Challenge</h3>
                            <p className="text-lg text-secondary leading-relaxed">
                                {data.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Solution</h3>
                            <ul className="flex flex-col gap-4">
                                {data.solution.map((item: string, index: number) => (
                                    <li key={index} className="flex gap-3 text-lg text-secondary leading-relaxed">
                                        <span className="mt-2 min-w-[8px] min-h-[8px] max-w-[8px] max-h-[8px] rounded-full bg-primary block" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Result */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Result</h3>
                            <p className="text-lg text-secondary leading-relaxed font-medium">
                                {data.result}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-4">
                        <div className="bg-softGray p-8 rounded-2xl sticky top-24">
                            <h4 className="text-xl font-bold mb-4">Ready to scale your organic growth?</h4>
                            <p className="text-secondary mb-6">
                                Let's discuss how we can achieve similar results for your business.
                            </p>
                            <Link
                                href="/#book-time"
                                className="w-full block text-center py-3 px-6 border border-primary rounded-full text-primary hover:text-white hover:bg-primary transition-all duration-300 font-medium"
                            >
                                Book a Strategy Session
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyDetail;
