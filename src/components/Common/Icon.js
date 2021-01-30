import React from "react";
import { ReactComponent as NearMe } from "../../assets/images/nearme.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Earth } from "../../assets/images/earth.svg";
import { ReactComponent as Diary } from "../../assets/images/diary.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as Filter } from "../../assets/images/filter.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Run } from "../../assets/images/run.svg";
import { ReactComponent as Clock } from "../../assets/images/clock.svg";

const icons = {
    nearMe: NearMe,
    ticket: Ticket,
    earth: Earth,
    diary: Diary,
    user: User,
    plus: Plus,
    filter: Filter,
    location: Location,
    run: Run,
    clock: Clock,
};

export default function Icon({
    name,
    size = 10,
    color = "gray-800",
    className = null,
}) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={`w-${size} h-${size} duration-300 ease-in-out  text-${color} ${
                className ? className : `fill-current`
            }`}
        />
    );
}
