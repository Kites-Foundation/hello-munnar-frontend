import React from "react";
import { useRoutes } from "hookrouter";
import RoutePage from "../components/RoutePage";

import routeImage from "../components/RoutePage/assets/images/route-default.png";

const routesDetails = [
    {
        name: "violet",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "indigo",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "blue",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "green",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "yellow",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "orange",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
    {
        name: "red",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: routeImage,
    },
];

// dynamically generate routes indtead of copying components
const routes = routesDetails.reduce(
    (acc, routeDetail, i) => ({
        ...acc,
        [`/${routeDetail.name}`]: () => (
            <RoutePage route={routeDetail} position={i} />
        ),
    }),
    {}
);

export default function RouteRouter() {
    const pages = useRoutes(routes);
    return (
        pages || (
            <div className="min-h-screen flex justify-center items-center text-3xl uppercase font-bold text-gray-500">
                Route not found
            </div>
        )
    );
}
