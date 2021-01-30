import React from "react";
import { ReactComponent as NearMe } from "../../assets/images/nearme.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Earth } from "../../assets/images/earth.svg";
import { ReactComponent as Diary } from "../../assets/images/diary.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";

const icons = {
    nearMe: NearMe,
    ticket: Ticket,
    earth: Earth,
    diary: Diary,
    user: User,
};

export default function Icon({ name, size = 10, color = "gray-800" }) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={`w-${size} h-${size} duration-300 ease-in-out fill-current text-${color}`}
        />
    );
}
