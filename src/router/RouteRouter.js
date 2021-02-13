import React from "react";
import { useRoutes } from "hookrouter";
import RoutePage from "../components/RoutePage";

import routeImage from "../components/RoutePage/assets/images/route-default.png";

const routesDetails = [
    {
        name: "violet",
        path: "Munnar-Marayoor-Kanthalloor-Chinnar",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan. Sit amet porttitor eget dolor. Varius quam quisque id diam vel quam. Lorem donec massa sapien faucibus et molestie ac feugiat. Habitant morbi tristique senectus et netus et. Sagittis purus sit amet volutpat consequat mauris nunc. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. In dictum non consectetur a. Adipiscing diam donec adipiscing tristique risus nec. Nisl condimentum id venenatis a condimentum vitae sapien. Quam quisque id diam vel.",
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
