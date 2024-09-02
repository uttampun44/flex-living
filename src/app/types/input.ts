type inputType = "text" | "number" | "password" | "email"

interface inputProps{
    type: inputType,
    name?:string,
    className?:{
        inputClassName:string,
        labelClassName:string
    }
    placeholder?: string
    label:string,
    htmlFor:string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean
}

export default inputProps