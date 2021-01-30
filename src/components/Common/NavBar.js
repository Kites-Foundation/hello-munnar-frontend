import React from "react";
import Icon from "./Icon";
import { usePath, A } from "hookrouter";

const routes = [
    {
        name: "nearMe",
        label: "Near Me",
        route: "/nearme",
    },
    {
        name: "experiences",
        label: "Experiences",
        route: "/experiences",
    },
    {
        name: "explore",
        label: "Explore",
        route: "/",
    },
    {
        name: "myPlans",
        label: "My Plans",
        route: "/myplans",
    },
    {
        name: "profile",
        label: "Profile",
        route: "/profile",
    },
];

export default function NavBar() {
    const path = usePath();
    return (
        <div className="flex fixed items-stretch bottom-0 w-full bg-gray-200">
            {routes.map((route) => (
                <A
                    href={route.route}
                    key={route.route}
                    className="flex flex-1 flex-col items-center justify-center py-2">
                    <Icon
                        name={route.name}
                        color={`${
                            route.route === path ? "indigo-700" : "gray-600"
                        }`}
                        size={9}
                    />
                    <span
                        className={`text-gray-700 text-xs mt-1 text-${
                            route.route === path ? "indigo-700" : "gray-600"
                        }`}>
                        {route.label}
                    </span>
                </A>
            ))}
        </div>
    );
}
