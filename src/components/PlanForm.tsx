import AppButton from "@/components/common/AppButton";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
    planTitle: string;
    planDescription: string;
};

interface IPlanProps {
    planAddedCheck: (data: string) => void;
}

export default function PlanForm({ planAddedCheck }: IPlanProps) {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);

        try {
            const response = await axios.post("/api/formsubmit", data);

            console.log({ response });

            if (response && response.status === 200) {
                planAddedCheck(JSON.stringify(response.data));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center overflow-hidden sticky top-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[50%]  text-center"
            >
                <input
                    type="text"
                    placeholder="What's your plan?"
                    className="input input-bordered w-full max-w-3xl text-sm my-2"
                    {...register("planTitle")}
                    required
                />

                <textarea
                    placeholder="Can you describe it briefly?"
                    {...register("planDescription")}
                    required
                    className="textarea textarea-bordered textarea-sm w-full max-w-3xl"
                ></textarea>

                <AppButton
                    btnText={"Submit"}
                    className="max-w-3xl btn-primary "
                />
            </form>
        </div>
    );
}
