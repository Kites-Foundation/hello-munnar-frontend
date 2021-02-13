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
import { ReactComponent as AddUser } from "../../assets/images/add-user.svg";
import { ReactComponent as EditUser } from "../../assets/images/edit-user.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as Back } from "../../assets/images/back.svg";
import { ReactComponent as UserFilled } from "../../assets/images/user-filled.svg";
import { ReactComponent as CarSide } from "../../assets/images/carside.svg";
import { ReactComponent as Bed } from "../../assets/images/bed.svg";
import { ReactComponent as Food } from "../../assets/images/fast-food.svg";
import { ReactComponent as House } from "../../assets/images/house.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";
import { ReactComponent as Trash } from "../../assets/images/trash.svg";
import { ReactComponent as Chat } from "../../assets/images/chat.svg";
import { ReactComponent as Logout } from "../../assets/images/logout.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as KSRTC } from "../../assets/images/ksrtc.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { ReactComponent as Information } from "../../assets/images/information.svg";
import { ReactComponent as Todo } from "../../assets/images/todo.svg";
import { ReactComponent as FoodDrinks } from "../../assets/images/food.svg";
import { ReactComponent as Amenities } from "../../assets/images/amenities.svg";
import { ReactComponent as Route } from "../../assets/images/route.svg";
import { ReactComponent as CaretLeft } from "../../assets/images/caret-left.svg";
import { ReactComponent as Rupee } from "../../assets/images/rupee.svg";
import { ReactComponent as Alarm } from "../../assets/images/alarm.svg";
import { ReactComponent as Available } from "../../assets/images/available.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";
import { ReactComponent as Edit } from "../../assets/images/edit.svg";
import { ReactComponent as UpRight } from "../../assets/images/up-right.svg";

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
    filter: Filter,
    location: Location,
    run: Run,
    clock: Clock,
    carSide: CarSide,
    bed: Bed,
    food: Food,
    house: House,
    info: Info,
    trash: Trash,
    chat: Chat,
    logout: Logout,
    settings: Settings,
    back: Back,
    ksrtc: KSRTC,
    heart: Heart,
    close: Close,
    information: Information,
    todo: Todo,
    foodDrinks: FoodDrinks,
    amenities: Amenities,
    route: Route,
    caretLeft: CaretLeft,
    rupee: Rupee,
    alarm: Alarm,
    available: Available,
    avatar: Avatar,
    edit: Edit,
    upRight: UpRight,
};

export default function Icon({
    name,
    size = 10,
    color = "gray-800",
    stroke = false,
    className = null,
}) {
    const IconSvg = icons[name];
    return (
        <IconSvg
            className={`w-${size} h-${size} duration-300 ease-in-out  text-${color} ${
                stroke ? "stroke-current" : "fill-current"
            } ${className}`}
        />
    );
}
