import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './Button.module.css'
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonType = DefaultButtonPropsType & {
    name:string
    onClick:()=> void
    disabled:boolean


}
const Button:React.FC<ButtonType> =(
    {
        className,
    name,
    onClick,
    disabled,
    ...restProps
               }
               )=> {
    return  (
        <button  className={s.btn} type="button" onClick={onClick} disabled={disabled}>{name}</button>
    )
}

export{Button}