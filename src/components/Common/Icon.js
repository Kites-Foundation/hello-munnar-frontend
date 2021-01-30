import React from "react";
import { ReactComponent as LocationIcon } from "../../assets/images/location.svg";

const icons = {
    nearMe: LocationIcon,
    experiences: LocationIcon,
    explore: LocationIcon,
    myPlans: LocationIcon,
    profile: LocationIcon,
};

export default function Icon({ name, size = 10, color = "gray-800 " }) {
    const Icon = icons[name];
    return (
        <Icon className={`w-${size} h-${size} fill-current text-${color}`} />
    );
}
