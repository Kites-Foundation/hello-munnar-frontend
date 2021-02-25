import React from "react";
import PositionIndicator from "./PositionIndicator";
import StoryImage from "./StoryImage";
import Heading from "./Heading";
import AmenitiesContainer from "./AmenitiesContainer";
import DestinationContainer from "../Common/DestinationContainer";
import TodoContainer from "../Common/TodoContainer";
import destinationData from "../../data/destinationData.json";
import activityData from "../../data/activityData.json";

const RoutePage = ({ route, position }) => {
    let destinations = destinationData.filter(
        (destination) => destination.destinationRouteId === route.routeId
    );
    let activities = activityData.filter(
        (activity) => activity.activityRouteId === route.routeId
    );
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

    const color = routes[route.routeColorName.toLowerCase()];

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <PositionIndicator
                    position={position}
                    routes={Object.keys(routes)}
                />
                <StoryImage image={route.routeIllustrationUrl} />

                <Heading
                    route={route}
                    color={color}
                    className="px-8 md:px-10"
                />

                <AmenitiesContainer
                    routeName={route.routeColorName}
                    className="py-8 px-8 md:px-10"
                />

                <DestinationContainer
                    destinations={destinations}
                    className="py-8 pb-4 md:pd-8"
                />

                <TodoContainer
                    activities={activities}
                    className="py-6 pt-4 md:pt-6"
                />
            </div>
        </div>
    );
};

export default RoutePage;
