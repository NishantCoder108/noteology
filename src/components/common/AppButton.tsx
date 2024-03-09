import React from "react";

interface IProps {
    btnText: String;
}
const AppButton = ({ btnText }: IProps) => {
    return (
        <div>
            <button className="btn btn-active btn-primary">{btnText}</button>
        </div>
    );
};

export default AppButton;
