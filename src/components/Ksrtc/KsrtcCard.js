import React from "react";
import clockicon from "./assets/img/alarm-clock.svg";

function KsrtcCard(props) {
    return (
        <div class="flex flex-col border-2 border-black w-11/12 bg-white px-7 py-1 p-1 max-w-sm mx-auto m-5 rounded-lg ">
            <div class="mt-0.1">
                <a class="text-xl text-black font-black font-xl" href="/#">
                    {props.from}-{props.to}
                </a>
            </div>
            <div class="flex justify-between items-center mt-1 py-0.5">
                <div class="flex items-center">
                    <img
                        src={clockicon}
                        class="w-5 h-5 object-cover rounded-full"
                        alt="clock"></img>
                    <span class="text-black font-medium text-sm mx-3">
                        {props.time} {props.amorpm}
                    </span>
                    <span class="font-medium px-5 text-sm text-black">
                        {props.type}
                    </span>
                </div>
            </div>
            <div class="flex text-center py-2 mt-0.5 space-x-2">
                <div class="flex-1 border-2 border-black bg-black text-white font-normal text-sm text-center rounded-sm h-6.5 w-6.5">
                    M
                </div>
                <div class="flex-1 border-2 border-black bg-black text-white font-normal text-sm rounded-sm h-6.5 w-6.5">
                    T
                </div>
                <div class="flex-1 border-2 border-black bg-black text-white font-normal text-sm rounded-sm h-6.5 w-6.5">
                    W
                </div>
                <div class="flex-1 border-2 border-black bg-black text-white font-normal text-sm rounded-sm h-6.5 w-6.5">
                    Th
                </div>
                <div class="flex-1 border-2 border-black text-black  font-normal text-sm rounded-sm h-6.5 w-6.5">
                    F
                </div>
                <div class="flex-1 border-2 border-black text-black font-normal text-sm rounded-sm h-6.5 w-6.5">
                    Sa
                </div>
                <div class="flex-1 border-2 border-black text-black font-normal text-sm rounded-sm h-6.5 w-6.5">
                    S
                </div>
            </div>
        </div>
    );
}
export default KsrtcCard;
