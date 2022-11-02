import "./button.style.scss"
const Button=({children,buttonType,...otheratters})=>{

    return(
        <button {...otheratters} className={`${buttonType? buttonType : "button"}`}>{children}</button>
    )
}
export default Button