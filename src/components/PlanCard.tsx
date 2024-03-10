import React from "react";
import AppButton from "./common/AppButton";
import axios from "axios";

interface IPlanItems {
    planItems: {
        planTitle: string;
        planDescription: string;
        _id: string;
    };

    setIdDelete: (id: string) => void;
}
const PlanCard = ({ planItems, setIdDelete }: IPlanItems) => {
    console.log({ planItems });
    const { planTitle, planDescription, _id } = planItems;

    const handleDelete = async (_id: string) => {
        console.log("clicked Plancard", _id);

        try {
            const response = await axios.delete(`/api/formsubmit?id=${_id}`);
            console.log("Delete response", response);
            if (response) {
                console.log("Delete Plan details :", response);
                setIdDelete(_id);
            }
        } catch (error) {
            console.error("Failed to delete resource:", error);
        }
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
                            onClick={() => handleDelete(_id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
