import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const BookingSection = () => {
    return (
        <section className="w-full py-20 bg-gray-50" id="book-time">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Number & Title - Matching your site's style */}
                <div className="mb-12">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
                        ( 05 )
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        Book a Strategy Session
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* LEFT COLUMN: The Pitch */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Ready to double your organic traffic?
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            SEO isn't just about keywords; it's about revenue. In this call,
                            we will look directly at your data, identify low-hanging fruit,
                            and map out a strategy that works for <strong>SaaS, E-commerce, or Product-led</strong> brands.
                        </p>

                        {/* Value Bullets */}
                        <ul className="space-y-4 mt-6">
                            {[
                                "30-Minute Live Website Audit",
                                "Competitor Gap Analysis",
                                "Actionable Growth Roadmap (PDF)",
                                "Zero Fluff, 100% Strategy"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <CheckCircleIcon className="h-6 w-6 text-emerald-500" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Optional: Testimonial Snippet */}
                        <div className="mt-8 p-4 bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-lg">
                            <p className="italic text-gray-600">"Neeraj's strategy helped us scale from 2k to 15k traffic in record time."</p>
                            <p className="text-sm font-bold text-gray-900 mt-2">- Previous Client</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Calendar Embed */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[600px]">
                            {/* Replace the iframe src with your actual Calendly/Cal.com link */}
                            <iframe
                                src="https://calendly.com/YOUR_LINK_HERE"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                title="Select a Date and Time"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingSection;
