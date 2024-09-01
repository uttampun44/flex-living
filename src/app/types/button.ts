type buttonType = "submit" | "button" | "reset"

interface buttonProps{
    className:string,
    type:buttonType,
    value:string,
    name:string
}

export default buttonProps