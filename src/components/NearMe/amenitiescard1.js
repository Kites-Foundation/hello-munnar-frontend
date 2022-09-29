import React from "react";
import VectorIcon from "../NearMe/icons/Vector.svg";
import DirectionIcon from "../NearMe/icons/direction.svg";

export default function Amenities(props) {
    const borderColors = {
        violet: "border-violet-900",
        indigo: "border-indigo-900",
        blue: "border-cyan-600",
        green: "border-green-500",
        yellow: "border-yellow-500",
        orange: "border-amber-600",
        red: "border-red-500",
    };

    const textColors = {
        violet: "text-violet-900",
        indigo: "text-indigo-900",
        blue: "text-cyan-600",
        green: "text-green-500",
        yellow: "text-yellow-500",
        orange: "text-amber-600",
        red: "text-red-500",
    };
    return (
        <div
            className={`bg-white border-2 ${borderColors[props.color]} w-full p-5 rounded-xl shadow`}>
            <div className="flex items-center">
                <div className="font-Poppins font-style:normal font-weight:600 font-bold text-black-600 text-xl">
                    {props.title}
                </div>
            </div>
            <div className="mt-3 flex">
                <div className="mr-5">{props.place}</div>
                <div className="flex">
                    <img src={VectorIcon} alt=""></img>
                    <div className={`ml-2 ${textColors[props.color]}`}>
                        {props.color}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button
                    onClick={() =>
                        window.open(
                            `https://maps.google.com/?q=${props.lat},${props.long}`
                        )
                    }
                    className="items-center	justify-center flex w-full border-2 border-gray-700 bg-white-200 rounded-xl my-auto whitespace-nowrap text-xs font-semibold text-black-500 px-2 py-1 hover:bg-white-200 hover:text-black mr-2">
                    <div>Get Direction</div>
                    <div className="ml-3">
                        <img src={DirectionIcon} alt=""></img>
                    </div>
                </button>
            </div>
        </div>
    );
}
