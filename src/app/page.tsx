"use client";
import PlanBody from "@/components/PlanBody";
import PlanForm from "@/components/PlanForm";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <PlanForm />
            <span className="border border-gray-600 w-[100vw] inline-block"></span>
            <PlanBody />
        </div>
    );
}
