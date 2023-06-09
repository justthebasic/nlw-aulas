import React, {InputHTMLAttributes} from "react";
import './styles.css'

interface InputIo extends InputHTMLAttributes <HTMLInputElement>{
    label: string;
    name: string;
}


export const Input = ({label, name, ...rest}: InputIo) =>{
    return(
        <>
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input type="text" id={name} {...rest}/>
            </div>


        </>
    )
}