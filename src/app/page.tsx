"use client";
import PlanBody from "@/components/PlanBody";
import PlanForm from "@/components/PlanForm";
import { useState } from "react";

export default function Home() {
    const [planUpdate, setPlanUpdate] = useState("");
    const planAdded = (data: string) => {
        setPlanUpdate(data);
    };

    return (
        <div className="overflow-hidden">
            <PlanForm planAddedCheck={planAdded} />
            <span className="border border-gray-600 w-[100vw] inline-block"></span>
            <PlanBody planUpdate={planUpdate} />
        </div>
    );
}
