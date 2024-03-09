import React from "react";
import AppButton from "./common/AppButton";

interface IPlanItems {
    planItems: {
        planTitle: string;
        planDescription: string;
    };
}
const PlanCard = ({ planItems }: IPlanItems) => {
    console.log({ planItems });
    const { planTitle, planDescription } = planItems;
    const handleDelete = () => {
        console.log("clicked Plancard");
    };
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{planTitle}</h2>
                    <p>{planDescription}</p>
                    <div className="card-actions justify-end">
                        <AppButton btnText="Edit" className="btn-outline " />
                        <AppButton
                            btnText="Delete"
                            className="btn-outline  btn-error"
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
