import React from "react";
import { ReactComponent as NearMe } from "../../assets/images/nearme.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Earth } from "../../assets/images/earth.svg";
import { ReactComponent as Diary } from "../../assets/images/diary.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";
<<<<<<< HEAD
import { ReactComponent as Search } from "../../assets/images/search.svg";

=======
import { ReactComponent as CarSide } from "../../assets/images/carside.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
>>>>>>> e1f330c62331d64d362ea0cfe20227f5134106ed
const icons = {
    nearMe: NearMe,
    ticket: Ticket,
    earth: Earth,
    diary: Diary,
    user: User,
    search: Search,
    plus: Plus,
    carSide: CarSide,
    star: Star,
};

export default function Icon({ name, size = 10, color = "gray-800" }) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={` w-${size} h-${size} duration-300 ease-in-out text-${color}`}
        />
    );
}
