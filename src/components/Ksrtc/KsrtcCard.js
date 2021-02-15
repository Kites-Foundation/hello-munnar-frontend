import React from "react";
import clockicon from "./assets/img/alarm-clock.svg";

function KsrtcCard(props) {
    return (
        <div className="flex flex-col border-2 border-black w-11/12 bg-white px-7 py-7 p-1 max-w-sm mx-auto m-5 rounded-lg ">
            <div className="mt-0.1">
                <a className="text-xl text-black font-black font-xl" href="/#">
                    {props.from}-{props.to}
                </a>
            </div>
            <div className="flex justify-between items-center my-3 py-0.5">
                <div className="flex items-center">
                    <img
                        src={clockicon}
                        className="w-5 h-5 object-cover rounded-full"
                        alt="clock"></img>
                    <span className="text-black whitespace-nowrap font-medium text-sm mx-3">
                        {props.time}
                    </span>
                    <span className="font-medium px-5 text-sm text-black">
                        {props.type}
                    </span>
                </div>
            </div>
            <div className="flex text-center py-2 mt-0.5 space-x-2">
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("mon")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    M
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("tue")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    T
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("wed")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    W
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("thu")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    Th
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("fri")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    F
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("sat")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    Sa
                </div>
                <div
                    className={`flex-1 border-2 border-black ${
                        props.availableDays === "allDay" ||
                        props.availableDays.toLowerCase().includes("sun")
                            ? "bg-black text-white"
                            : "text-black"
                    } font-normal text-sm rounded-sm h-6.5 w-6.5`}>
                    S
                </div>
            </div>
        </div>
    );
}
export default KsrtcCard;
