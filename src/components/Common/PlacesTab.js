import React from "react";
import InnerTab from "../Common/InnerTab";
import Description from "./Description";
import Reviews from "./Reviews";

export default function PlacesTab({ place, className }) {
    const { description, flauraFauna, challanges, id } = place;

    const arrangement = {
        description: (
            <Description
                description={description}
                flaura={flauraFauna}
                challanges={challanges}
            />
        ),
        reviews: <Reviews id={id} />,
    };

    return <InnerTab arrangement={arrangement} className={className} />;
}
