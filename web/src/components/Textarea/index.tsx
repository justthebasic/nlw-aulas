import {TextareaHTMLAttributes} from "react";
import './styles.css'

interface TextareaIo extends TextareaHTMLAttributes <HTMLTextAreaElement>{
    label: string;
    name: string;
}


export const Textarea = ({label, name, ...rest}: TextareaIo) =>{
    return(
        <>
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest}/>
            </div>


        </>
    )
}