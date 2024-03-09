import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
    const body = await request.text();
    console.log("REquest", body);

    try {
        const res = await new Promise((resolve, reject) => {
            // Perform some asynchronous operation here
            // For example, fetch data from an API
            // If the operation is successful, call resolve with the result
            // If there's an error, call reject with the error
            resolve("Resolve");
        });

        return NextResponse.json({
            message: "Your plans have been successfully created.",
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
    const { searchParams } = new URL(request.url);

    const arr = [
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
        { planDescription: "Gym is going on", planTitle: "Gym" },
    ];

    try {
        const res = await new Promise((resolve, reject) => {
            resolve(arr);
        });

        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Failed to retrieve plan details. Please try again later.",
        });
    }
}