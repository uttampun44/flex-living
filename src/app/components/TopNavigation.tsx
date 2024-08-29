"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import HeaderLogo from "@/image/Logo.png";
import Link from "next/link";

const TopNavigation: React.FC = () => {
  return (
    <>
      <div
        className={cn(
          "topNavigation flex justify-between items-center py-3 px-[60px]"
        )}
      >
        <div className="logo">
          <Link href="/">
          
            <Image
              src={HeaderLogo}
              alt="headerLogo"
              className={cn("")}
              quality={100}
              loading="lazy"
            />
          </Link>
        </div>
        <div className={cn("navLink")}>
          <nav className={cn("flex gap-x-10")}>
            <div className={cn("home")}>
              <Link
                href="/"
                className={cn("text-[18px] font-normal font-lato")}
              >
                Home
              </Link>
            </div>
            <div className="landLords">
              <Link
                href="/landlords"
                aria-label="landlords"
                className={cn("text-[18px] font-normal font-lato")}
              >
                Landlords
              </Link>
            </div>
            <div className="blog">
              <Link
                href="/blog"
                aria-label="blog"
                className={cn("text-[18px] font-normal font-lato")}
              >
                Blog
              </Link>
            </div>
            <div className="contact">
              <Link
                href="/contact"
                aria-label="contact"
                className={cn("text-[18px] font-normal font-lato")}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
