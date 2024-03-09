import React from "react";

interface IProps {
    btnText: string;
    className?: string;
    onClick?: () => void;
}
const AppButton = ({ btnText, className, onClick }: IProps) => {
    return (
        <div>
            <button
                type="submit"
                className={`btn  w-full  ${className}`}
                onClick={onClick}
            >
                {btnText}
            </button>
        </div>
    );
};

export default AppButton;
