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
    // const body = await request.text();
    const id = request.query.id;

    // console.log("Delete Body", _id);
    // const { _id } = JSON.parse(body);
    console.log("Delete id", id);
    try {
        await connectToDb();
        const deletePlanById = await Plan.findByIdAndDelete(
            "65ecf8a976e03fa7963c1f44"
        );

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

// export async function GET(request: Request, response: Response) {
//     try {
//         await connectToDb();
//         const allPlans = await Plan.find();

//         // console.log("All Plans", allPlans);

//         return NextResponse.json(allPlans);
//     } catch (error) {
//         return NextResponse.json({
//             status: 500,
//             message: "Failed to retrieve plan details. Please try again later.",
//         });
//     }
// }

// async function getAllResources() {
//     try {
//         await connectToDb();
//         const allPlans = await Plan.find();

//         // console.log("All Plans", allPlans);

//         return NextResponse.json(allPlans);
//     } catch (error) {
//         return NextResponse.json({
//             status: 500,
//             message: "Failed to retrieve plan details. Please try again later.",
//         });
//     }
// }

// type IdType = string | string[] | undefined;
// async function deleteResource(_id: IdType) {
//     // const body = await request.text();

//     console.log("Delete Body");
//     // const { _id } = JSON.parse(body);
//     console.log("Delete id", _id);
//     try {
//         await connectToDb();
//         const deletePlanById = await Plan.findByIdAndDelete(_id);

//         console.log("DEletePlanbyId", deletePlanById);
//         return NextResponse.json(deletePlanById);
//     } catch (error) {
//         return NextResponse.json({
//             status: 500,
//             message:
//                 "Failed to retrieve delete plan details. Please try again later.",
//         });
//     }
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const { method, query, body } = req;

//     switch (method) {
//         case "GET":
//             const resources = await getAllResources();
//             res.status(200).json(resources);
//             break;
//         // case 'POST':
//         //     const newResource = await createResource(body);
//         //     res.status(201).json(newResource);
//         //     break;
//         // case 'PUT':
//         //     const updatedResource = await updateResource(query.id, body);
//         //     res.status(200).json(updatedResource);
//         //     break;
//         case "DELETE":
//             const deletedResource = await deleteResource(query?.id);
//             res.status(200).json(deletedResource);
//             break;
//         default:
//             res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
//             res.status(405).end(`Method ${method} Not Allowed`);
//     }
// }
