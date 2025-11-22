"use client";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./index"), { ssr: false });

export default function LazyContact() {
    return <Contact />;
}
