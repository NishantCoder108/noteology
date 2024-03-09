import React from "react";

interface IProps {
    btnText: string;
    className?: string;
}
const AppButton = ({ btnText, className }: IProps) => {
    return (
        <div>
            <button type="submit" className={`btn  w-full  ${className}`}>
                {btnText}
            </button>
        </div>
    );
};

export default AppButton;
