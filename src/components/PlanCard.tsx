import React from "react";
import AppButton from "./common/AppButton";

const PlanCard = () => {
    return (
        <div>
            <div className="card w-72 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Going to Gym</h2>
                    <p>
                        I will go to gym and then do Pushup , Squat 20 - 20 sets
                    </p>
                    <div className="card-actions justify-end">
                        <AppButton btnText="Edit" />
                        <AppButton btnText="Delete" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
