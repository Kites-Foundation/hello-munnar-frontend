import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
export default function BookGuide(props) {
    return (
        <div class="p-3">
            <div class="bg-white flex items-center p-2 border-2 border-gray-300 ">
                <div class="flex-grow p-2">
                    <div class="flex justify-between">
                        <div class="flex items-center space-x-2">
                            <img
                                src="https://joshuaallenshaw.com/wp-content/uploads/2019/04/blank-profile-picture-973460_1280-702x526.png"
                                alt="My profile"
                                class="w-8 h-8 rounded-full"></img>
                            <div
                                class="font-semibold text-gray-700"
                                font-quicksand>
                                {props.name}
                            </div>
                        </div>
                        <div class="flex justify-between m-0">
                            <div class="text-sm text-gray-500 m-1.5 font-quicksand">
                                {props.rate}
                            </div>
                            <div class="m-1.5">
                                <FaStar />
                            </div>
                            <div class="text-sm text-gray-500 m-1.5 font-quicksand">
                                {props.trips}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center">
                            <div class="m-1.5">
                                <MdDateRange />
                            </div>
                        </div>
                        <div class="text-sm text-gray-500">{props.age}</div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center">
                            <div class="m-1.5">
                                <TiMessages />
                            </div>
                        </div>
                        <div class="text-sm text-gray-500 font-quicksand">
                            {props.lan}
                        </div>
                    </div>
                    <br></br>
                    <div class="flex justify-between items-center space-x-2 font-quicksand">
                        <div class="font-semibold text-gray-700">
                            INR 1000/trip
                        </div>
                        <div class="flex items-center">
                            <div class="m-1.5">
                                <MdCall />
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}
