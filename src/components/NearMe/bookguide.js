import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
export default function BookGuide(props) {
    return (
        <div className="p-3">
            <div className="bg-white flex items-center p-2 border-2 border-gray-300 ">
                <div className="flex-grow p-2">
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://joshuaallenshaw.com/wp-content/uploads/2019/04/blank-profile-picture-973460_1280-702x526.png"
                                alt="My profile"
                                className="w-8 h-8 rounded-full"></img>
                            <div
                                className="font-semibold text-gray-700"
                                font-quicksand>
                                {props.name}
                            </div>
                        </div>
                        <div className="flex justify-between m-0">
                            <div className="text-sm text-gray-500 m-1.5 font-quicksand">
                                {props.rate}
                            </div>
                            <div className="m-1.5">
                                <FaStar />
                            </div>
                            <div className="text-sm text-gray-500 m-1.5 font-quicksand">
                                {props.trips}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                            <div className="m-1.5">
                                <MdDateRange />
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">{props.age}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                            <div className="m-1.5">
                                <TiMessages />
                            </div>
                        </div>
                        <div className="text-sm text-gray-500 font-quicksand">
                            {props.lan}
                        </div>
                    </div>
                    <br></br>
                    <div className="flex justify-between items-center space-x-2 font-quicksand">
                        <div className="font-semibold text-gray-700">
                            INR 1000/trip
                        </div>
                        <div className="flex items-center">
                            <div className="m-1.5">
                                <MdCall />
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}
