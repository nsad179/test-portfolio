"use client";
import dynamic from "next/dynamic";

const BookingSection = dynamic(() => import("./index"), { ssr: false });

export default function LazyBookingSection() {
    return <BookingSection />;
}
