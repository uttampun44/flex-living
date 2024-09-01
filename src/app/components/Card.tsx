import cardProps from "@/types/card"

const Card:React.FC<cardProps> = ({children, className}) =>{
    return(
        <>
        <div className={className}>
             {children}
        </div>
        </>
    )
}
export default Card