import React from "react";
import InnerTab from "../Common/InnerTab";
import Description from "./Description";
import Reviews from "./Reviews";

export default function PlacesTab({ destinationData, className }) {
    const {
        description,
        floraAndFaunas,
        challenges,
        reviews,
    } = destinationData;
    const arrangement = {
        description: (
            <Description
                description={description}
                floraAndFaunas={floraAndFaunas}
                challanges={challenges}
            />
        ),
        reviews: <Reviews reviews={reviews} />,
    };

    return <InnerTab arrangement={arrangement} className={className} />;
}
