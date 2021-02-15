import React from "react";
import { useRoutes } from "hookrouter";
import RoutePage from "../components/RoutePage";
import routeData from "../data/routeData.json";

// dynamically generate routes indtead of copying components
const routes = routeData.reduce(
    (acc, routeDetail, i) => ({
        ...acc,
        [`/${routeDetail.routeColorName.toLowerCase()}`]: () => (
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
