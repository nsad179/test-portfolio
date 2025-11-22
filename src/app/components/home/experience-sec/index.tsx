import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2025+",
            title: "Senior SEO Executive",
            company: "Taazaa",
            type: "Hybrid",
            description: "Improved organic visibility by optimizing site architecture, fixing technical issues, and aligning content with search intent. Led audits, cross-team implementation, and data-driven SEO strategies to boost rankings and site performance."
        },
        {
            year: "2022",
            title: "Senior SEO Executive",
            company: "Appy Pie",
            type: "Fulltime",
            description: "Drove organic growth through technical audits, content optimization, and keyword strategy. Managed editorial workflows, improved crawlability, and delivered insights that shaped content, rankings, and acquisition performance across products."
        },
        {
            year: "2021",
            title: "Digital Marketing Executive",
            company: "Neuherbs",
            type: "Fulltime",
            description: "Scaled Organic SEO traffic from 2K to 15K/month using full-funnel content, CRO, and technical improvements. Managed PR links, paid ads, automation, and analytics while optimizing pages, funnels, and user journeys to drive leads and conversions."
        },
        {
            year: "2020",
            title: "Digital Marketing Executive",
            company: "OpenDG Noida",
            type: "Remote",
            description: "Executed international SEO strategies, optimized site templates, and improved technical health. Managed link-building, monitored KPIs, and enhanced content structure to drive organic growth and support multi-client performance goals."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;