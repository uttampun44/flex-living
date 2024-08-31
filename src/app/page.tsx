import Image from "next/image";
import { cn } from "@/utils/cn";
import Hero from "@/components/Hero";
import HeroImage from "@/image/homeHero.jpg"

export default function Home() {
  return (
    <main className={cn("")}>
      <section className={cn("heroSection")}>
            <Hero>
                 <div className={cn("heroContainer")}>
                    <Image src={HeroImage} quality={100 } alt="heroImage" loading="lazy" className={cn("w-full")}/>
                 </div>
            </Hero>
      </section>
    </main>
  );
}
