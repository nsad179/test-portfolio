"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../logo";

const Footer = () => {
  const [socialItems, setSocialItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSocialItems(data?.contactBar?.socialItems || []);
      } catch (error) {
        console.error("Error fetching social items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-6 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          <div className="w-full text-center">
            <p className="text-secondary">
              Vibe coded with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/neeraj179/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Neeraj Kumar
              </a>{" "}
              • Designed by{" "}
              <a
                href="https://getnextjstemplates.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                getnextjstemplates
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
