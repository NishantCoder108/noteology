"use client";
import PlanCard from "@/components/PlanCard";
import PlanForm from "@/components/PlanForm";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <PlanForm />
            <span className="border border-gray-600 w-[100vw] inline-block"></span>

            <div className="flex items-center justify-between px-9 gap-9  flex-wrap my-5">
                {[1, 2, 3, 4, 5, 3, 4, 5, 7].map((item) => (
                    <PlanCard key={item} />
                ))}
            </div>
        </div>
    );
}
