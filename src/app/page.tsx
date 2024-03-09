"use client";
import AppButton from "@/components/common/AppButton";
import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        console.log("formData", formData);
    };

    return (
        <div className="flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="w-[50%]  text-center">
                <input
                    type="text"
                    placeholder="What's your plan?"
                    name="plan"
                    className="input input-bordered w-full max-w-md text-sm my-2"
                />

                <textarea
                    placeholder="Can you describe it briefly?"
                    name="planDetails"
                    className="textarea textarea-bordered textarea-sm w-full max-w-md"
                ></textarea>

                <AppButton btnText={"Submit"} />
            </form>
        </div>
    );
}
