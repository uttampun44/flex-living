import imageIcon from "@/app/data/icon"
import { cn } from "@/utils/cn";


type IconName = keyof typeof imageIcon;


interface iconProps{
   name: IconName
}

const ImageIcon:React.FC<iconProps> = ({name} ) =>{

    const current = imageIcon[name];

    if(!current) return

    return(
        <>
           <p className={cn("text-red-700")}>{name}</p>
        </>
    )
}
export default ImageIcon