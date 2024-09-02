     "use client"

import inputProps from "@/types/input"
import React from "react"

const Input = React.forwardRef<HTMLInputElement, inputProps>(({name, type, className, placeholder, label, htmlFor, onChange, required}, ref) =>{

    return(
        <>
           {
              label && (
                <label htmlFor={htmlFor} className={className?.labelClassName}>{label}</label>
              )
           }
          <input type={type} name={name} className={className?.inputClassName} placeholder={placeholder} ref={ref} onChange={onChange} required={required}/>
        </>
    )
 }
);
export default Input