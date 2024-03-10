import axios from "axios";
import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import AppShimmer from "./common/AppShimmer";

interface IPlanProps {
    planUpdate: string;
}
const PlanBody = ({ planUpdate }: IPlanProps) => {
    const [planDetails, setPlanDetails] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [idDelete, setIdDelete] = useState("");

    const fetchData = async () => {
        setIsFetching(true);
        try {
            const response = await axios.get("/api/formsubmit");
            if (response && response.data) {
                setPlanDetails(response.data);

                console.log("Plan details:", response.data);
                setIsFetching(false);
            }
        } catch (error) {
            console.log(error);
            setIsFetching(false);
        }
    };

    useEffect(() => {
        const fetchDataApi = fetchData();
        return () => {};
    }, [planUpdate, idDelete]);

    if (isFetching) {
        return (
            <div className="flex items-center justify-between px-9 gap-9  flex-wrap my-5">
                {[1, 2, 3, 4].map((item) => (
                    <AppShimmer key={item} />
                ))}
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between px-9 gap-9  flex-wrap my-5">
                {planDetails.length > 0 ? (
                    planDetails.map((item) => (
                        <PlanCard
                            setIdDelete={setIdDelete}
                            planItems={item}
                            key={JSON.stringify(item)}
                        />
                    ))
                ) : (
                    <p> No Any Plan</p>
                )}
            </div>
        </div>
    );
};

export default PlanBody;
