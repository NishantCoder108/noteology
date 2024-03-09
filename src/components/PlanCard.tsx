import React from "react";
import AppButton from "./common/AppButton";

const PlanCard = () => {
    const handleDelete = () => {};
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Going to Gym</h2>
                    <p>
                        I will go to gym and then do Pushup , Squat 20 - 20 sets
                    </p>
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
