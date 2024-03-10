import { Plan } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
    const body = await request.text();
    const { planDescription, planTitle } = JSON.parse(body);

    try {
        await connectToDb();
        const newPlan = new Plan({ planDescription, planTitle });

        const res = await newPlan.save();
        console.log("Save to DB");
        return NextResponse.json({
            message: "Your plans have been successfully created.",
            data: res,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:
                "An error occurred while creating your plans. Please try again later.",
            status: 500,
        });
    }
}

export async function GET(request: Request, response: Response) {
    try {
        await connectToDb();
        const allPlans = await Plan.find();

        // console.log("All Plans", allPlans);

        return NextResponse.json(allPlans);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Failed to retrieve plan details. Please try again later.",
        });
    }
}

export async function DELETE(request: NextApiRequest, response: Response) {
    const id = request.query.id;

    console.log("Delete id", id);
    try {
        await connectToDb();
        const deletePlanById = await Plan.findByIdAndDelete(id);

        console.log("DEletePlanbyId", deletePlanById);
        return NextResponse.json(deletePlanById);
    } catch (error) {
        console.log("DELETE ERRor", error);
        return NextResponse.json({
            status: 500,
            message:
                "Failed to retrieve delete plan details. Please try again later.",
        });
    }
}
