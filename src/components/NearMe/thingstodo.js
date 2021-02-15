import React from "react";
import Star from "../Common/Star";
import VectorIcon from "../NearMe/icons/Vector.svg";

export default function Thingstodo(props) {
    return (
        <div class="bg-white border-2 border-blue-600 w-full p-1 mx-1 rounded-xl shadow border mt-3 border-blue">
            <div class="font-Poppins font-style:normal font-weight:600 font-bold text-black-600 text-xl">
                {props.name}
            </div>
            <div class="mt-3 flex">
                <div>
                    <Star num={4} />
                </div>
                <div>
                    <img src={VectorIcon} alt=""></img>
                </div>
                <div class="ml-4 text-indigo-400">Indigo</div>
            </div>
            <div className="mt-2 flex flex-wrap ">
                <div className="flex  justify-center mt-4">
                    <button className=" border-2 border-gray-200 bg-gray-200 rounded-xl my-auto whitespace-nowrap text-center text-xs font-bold text-black-500 px-4 py-1 hover:bg-gray-200 hover:text-black mr-2">
                        Family friendly
                    </button>
                    <button className="border-2 border-gray-200 bg-gray-200 rounded-xl my-auto whitespace-nowrap text-center text-xs font-bold text-black-500 px-2 py-1  hover:bg-gray-200 hover:text-black mr-2">
                        Disabled friendly
                    </button>
                    <button className="border-2 border-gray-200 bg-gray-200 rounded-xl my-auto whitespace-nowrap text-center text-xs font-bold text-black-500 px-2 py-1 hover:bg-gray-200 hover:text-black mr-2">
                        Moderate
                    </button>
                </div>
            </div>
        </div>
    );
}
