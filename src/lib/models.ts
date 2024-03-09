import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        planTitle: {
            type: String,
            required: true,
        },
        planDescription: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Plan = mongoose.models?.plan || mongoose.model("plan", planSchema);
