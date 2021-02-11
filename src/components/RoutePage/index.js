import React from "react";
import PositionIndicator from "./PositionIndicator";
import StoryImage from "./StoryImage";
import Heading from "./Heading";
import AmenitiesContainer from "./AmenitiesContainer";
import DestinationContainer from "../Common/DestinationContainer";
import TodoContainer from "../Common/TodoContainer";

import destinationDefault from "../../assets/images/destination-default.png";
import todoDefault1 from "../../assets/images/package-1-default.png";
import todoDefault2 from "../../assets/images/package-2-default.png";

const destinations = [
    {
        name: "Consectetur adipiscing elit.",
        description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
        image: destinationDefault,
    },
    {
        name: "Consectetur adipiscing elit 2.",
        description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
        image: destinationDefault,
    },
    {
        name: "Consectetur adipiscing elit 3.",
        description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
        image: destinationDefault,
    },
];
const todos = [
    {
        name: "Meeshapulimala Trekking",
        image: todoDefault1,
    },
    {
        name: "DTPC Boating",
        image: todoDefault2,
    },
    {
        name: "Meeshapulimala Trekking",
        image: todoDefault1,
    },
    {
        name: "DTPC Boating",
        image: todoDefault2,
    },
];

const RoutePage = ({ route, position }) => {
    const routes = {
        violet: {
            text: "text-violet-900",
            border: "border-violet-900",
        },
        indigo: {
            text: "text-indigo-900",
            border: "border-indigo-900",
        },
        blue: {
            text: "text-cyan-600",
            border: "border-cyan-600",
        },
        green: {
            text: "text-green-500",
            border: "border-green-500",
        },
        yellow: {
            text: "text-yellow-500",
            border: "border-yellow-500",
        },
        orange: {
            text: "text-amber-600",
            border: "border-amber-600",
        },
        red: {
            text: "text-red-500",
            border: "border-red-500",
        },
    };

    const color = routes[route.name];

    return (
        <div className="w-full bg-black">
            <div className="max-w-5xl mx-auto bg-white">
                <PositionIndicator
                    position={position}
                    routes={Object.keys(routes)}
                />
                <StoryImage image={route.image} />

                <Heading
                    route={route}
                    color={color}
                    className="px-8 md:px-10"
                />

                <AmenitiesContainer
                    routeName={route.name}
                    className="py-8 px-8 md:px-10"
                />

                <DestinationContainer
                    destinations={destinations}
                    className="py-8 pb-4 md:pd-8"
                />

                <TodoContainer todos={todos} className="py-6 pt-4 md:pt-6" />
            </div>
        </div>
    );
};

export default RoutePage;
