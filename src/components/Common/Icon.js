import React from "react";
import { ReactComponent as NearMe } from "../../assets/images/nearme.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Earth } from "../../assets/images/earth.svg";
import { ReactComponent as Diary } from "../../assets/images/diary.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Bed } from "../../assets/images/bed.svg";
import { ReactComponent as Food } from "../../assets/images/fast-food.svg";
import { ReactComponent as House } from "../../assets/images/house.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import { ReactComponent as Trash } from "../../assets/images/trash.svg";

const icons = {
    nearMe: NearMe,
    ticket: Ticket,
    earth: Earth,
    diary: Diary,
    user: User,
    bed: Bed,
    food: Food,
    house: House,
    info: Info,
    trash: Trash,
};

export default function Icon({ name, size = 10, color = "gray-800" }) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={`w-${size} h-${size} duration-300 ease-in-out fill-current text-${color}`}
        />
    );
}
