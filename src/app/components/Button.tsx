 "use client"
import Buttonprops from "@/types/button"

const Button:React.FC<Buttonprops> = ({className, value, type, name}) =>{
    return(
        <>
        <div>
            <button value={value} type={type} className={className}>{name}</button>
        </div>
        </>
    )
}
export default Button