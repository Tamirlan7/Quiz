import React from "react";
import './Button.module.css';

interface ButtonProps extends React.PropsWithChildren {
    className?: string;
    onClick: (e: any) => void
};

const Button: React.FC<ButtonProps> = ({children, className, onClick}) => {

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;