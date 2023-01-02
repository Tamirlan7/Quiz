import React from "react";
import './Button.module.css';

export default function Button ({children, className, ...props}) {

    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};