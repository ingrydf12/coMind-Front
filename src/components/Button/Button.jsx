import React from 'react'
import "../../styles/Button.css";

const Button = ({ buttonText, className, isOutlined }) => {

    const baseClass = isOutlined ? "classBtn-prim" : "classBtn-out-prim";
    const combinedClass = `${baseClass} ${className || ""}`.trim();
    return (
        <button className={`btn ${combinedClass}`}>
            {buttonText}
        </button>
    )
}

export default Button