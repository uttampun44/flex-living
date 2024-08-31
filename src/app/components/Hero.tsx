import heroProps from "@/types/hero"

const Hero:React.FC<heroProps> = ({children}) => {
    return(
        <>
          {children}
        </>
    )
}
export default Hero