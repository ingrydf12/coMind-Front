import React from 'react'
import "../../styles/Button.css";

const CustomButton = ({ buttonText, className, isOutlined, onClick}) => {
    const baseClass = isOutlined ? "classBtn-out-prim" : "classBtn-prim";
    const combinedClass = `${baseClass} ${className || ""}`.trim();
    return (
        <button className={`btn ${combinedClass}`} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default CustomButton