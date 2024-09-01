import Buttonprops from "@/types/button"

const Button:React.FC<Buttonprops> = ({className, value, type, name}) =>{
    return(
        <>
        <div className={className}>
            <button value={value} type={type}>{name}</button>
        </div>
        </>
    )
}
export default Button