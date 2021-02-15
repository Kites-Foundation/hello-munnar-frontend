import React from "react";
import { useRoutes } from "hookrouter";
import RoutePage from "../components/RoutePage";
import NotFound from "../components/Common/NotFound";
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
    return pages || <NotFound name="route" />;
}
