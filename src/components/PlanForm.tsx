import AppButton from "@/components/common/AppButton";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
    planTitle: string;
    planDescription: string;
};

export default function PlanForm() {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
                />

                <textarea
                    placeholder="Can you describe it briefly?"
                    {...register("planDescription")}
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
