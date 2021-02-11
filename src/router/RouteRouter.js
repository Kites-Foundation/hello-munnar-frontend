import { useRoutes } from "hookrouter";
import React from "react";

import RoutePage from "../components/RoutePage";

const routesDetails = [
    { name: "violet", text: "text-violet-900", border: "border-violet-900" },
    { name: "indigo" },
    { name: "blue" },
    { name: "green" },
    { name: "yellow" },
    { name: "orange" },
    { name: "red" },
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
