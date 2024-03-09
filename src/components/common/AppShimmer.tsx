import React from "react";
import AppButton from "./AppButton";

const AppShimmer = () => {
    return (
        <div>
            <div className="card w-72 bg-gradient-to-r from-black via-transparent to-slate-700">
                <div className="card-body">
                    <h2 className="card-title w-full bg-gradient-to-r h-14 rounded-2xl from-black via-transparent to-slate-700"></h2>
                    <p className="card-title w-full bg-gradient-to-r h-14 rounded-2xl from-black via-transparent to-slate-700"></p>
                    <p className="card-title w-[50%] bg-gradient-to-r h-14 rounded-2xl from-black via-transparent to-slate-700"></p>
                </div>
            </div>
        </div>
    );
};

export default AppShimmer;
