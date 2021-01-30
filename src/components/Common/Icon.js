import React from "react";
import { ReactComponent as NearMe } from "../../assets/images/nearme.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Earth } from "../../assets/images/earth.svg";
import { ReactComponent as Diary } from "../../assets/images/diary.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Plus } from "../../assets/images/plus.svg";
import { ReactComponent as AddUser } from "../../assets/images/add-user.svg";
import { ReactComponent as EditUser } from "../../assets/images/edit-user.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as UserFilled } from "../../assets/images/user-filled.svg";
import { ReactComponent as CarSide } from "../../assets/images/carside.svg";

const icons = {
    nearMe: NearMe,
    ticket: Ticket,
    earth: Earth,
    diary: Diary,
    user: User,
    addUser: AddUser,
    editUser: EditUser,
    lock: Lock,
    star: Star,
    userFilled: UserFilled,
    search: Search,
    plus: Plus,
    carSide: CarSide,
};

export default function Icon({ name, size = 10, color = "gray-800" }) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={` w-${size} h-${size} duration-300 ease-in-out text-${color}`}
        />
    );
}
