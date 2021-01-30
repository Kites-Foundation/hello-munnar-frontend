import React from "react";
import Icon from "./Icon";
import { usePath, A } from "hookrouter";

const routes = [
    {
        name: "nearMe",
        icon: "nearMe",
        label: "Near Me",
        route: "/nearme",
    },
    {
        name: "experiences",
        icon: "ticket",
        label: "Experiences",
        route: "/experiences",
    },
    {
        name: "explore",
        icon: "earth",
        label: "Explore",
        route: "/",
    },
    {
        name: "myPlans",
        icon: "diary",
        label: "My Plans",
        route: "/myplans",
    },
    {
        name: "profile",
        icon: "user",
        label: "Profile",
        route: "/profile",
    },
];

export default function NavBar() {
    const path = usePath();
    return (
        <div className="flex fixed items-stretch bottom-0 w-full bg-gray-100">
            {routes.map((route) => (
                <A
                    href={route.route}
                    key={route.route}
                    className="flex flex-1 flex-col items-center justify-center py-2">
                    <Icon
                        name={route.icon}
                        color={`${route.route === path ? "black" : "gray-400"}`}
                        size={9}
                    />
                    <span
                        className={`text-xs mt-1 ${
                            route.route === path
                                ? "text-black"
                                : "text-gray-400"
                        }`}>
                        {route.label}
                    </span>
                </A>
            ))}
        </div>
    );
}
