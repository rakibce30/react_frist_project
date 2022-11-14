import Classes from "../styles/Button.module.css";

export default function Button({className, children}) {
    return (
        <button className={`${Classes.button} ${className}`}>
            {children}
        </button>
    );
}