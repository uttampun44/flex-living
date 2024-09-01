import Image from "next/image";
import { cn } from "@/utils/cn";
import Hero from "@/components/Hero";
import HeroImage from "@/image/homeHero.jpg"
import HeroMessageBox from "@/components/HeroMessageBox";

export default function Home() {
  return (
    <main className={cn("")}>
      <section className={cn("heroSection")}>
            <Hero>
                 <div className={cn("heroContainer")}>
                    <Image src={HeroImage} quality={100 } alt="heroImage" loading="lazy" className={cn("w-full")}/>
                 </div>
                
            </Hero>
            <HeroMessageBox
             title="We rent your property" 
             description="Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus." 
             className={cn("bg-white text-black absolute max-w-[493px] w-full top-[40%] left-0 py-14 px-20 rounded-r-3xl ")} />
      </section>
    </main>
  );
}
