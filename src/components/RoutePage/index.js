import React from "react";
import Icon from "../Common/Icon";
import PositionIndicator from "./PositionIndicator";
import StoryImage from "./StoryImage";

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

                <div className="px-8 md:px-10">
                    <div className="pt-6 pb-2 flex justify-between items-center">
                        <div
                            className={`px-1 ${color.text} ${color.border} border-2 rounded font-semibold border-solid uppercase`}>
                            {route.name} route
                        </div>

                        <Icon
                            name="information"
                            className="text-black stroke-2"
                            color="black"
                            stroke={true}
                            size={5}
                        />
                    </div>
                    <h1 className="uppercase text-xl font-semibold pt-3 pb-2">
                        {route.path}
                    </h1>
                    <span className="">{route.description}</span>
                </div>
            </div>
        </div>
    );
};

export default RoutePage;
