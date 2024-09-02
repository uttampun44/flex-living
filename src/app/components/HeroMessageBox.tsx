   "use client"
   
import HeroMessage from "@/types/heroMessage";
import { cn } from "@/utils/cn";

const HeroMessageBox: React.FC<HeroMessage> = ({
  title,
  description,
  className,
}) => {
 
  return (
    <>
      <div className={cn(className)}>
        <div className="title"><h1 className={cn("text-[52px] font-bold leading-normal")}>{title}</h1></div>
        <div className="description"><p className={cn("text-lg font-normal mt-6")}>{description}</p></div>
      </div>
    </>
  );
};
export default HeroMessageBox;
