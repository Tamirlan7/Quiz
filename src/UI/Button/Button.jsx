import React from "react";
import './Button.css';

export default function Button ({children, className, ...props}) {

    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};