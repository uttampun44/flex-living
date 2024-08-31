import HeroMessage from "@/types/heroMessage";
import { cn } from "@/utils/cn";

const HeroMessageBox: React.FC<HeroMessage> = ({
  title,
  description,
  messageContainer,
}) => {
  const container = messageContainer.className || 0;
  return (
    <>
      <div className={cn({ container })}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};
export default HeroMessageBox;
