import React from "react";
import Icon from "../Common/Icon";
import ProgressBar from "./Common/Progressbar";

const UserHome = () => {
    const name = "John Doe";
    const placeholder =
        "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg";
    return (
        <div className="user">
            <div className="Navbar flex justify-between content-center pt-8 pb-12 pl-8 pr-8">
                <div className="flex content-center">
                    <Icon
                        name="userFilled"
                        className="text-gray-900"
                        size="7"
                    />
                    <h1 className="ml-4 text-2xl font-bold text-gray-900">
                        {name}
                    </h1>
                </div>
                <div className="flex">
                    <Icon
                        name="editUser"
                        className="text-gray-900 slider "
                        size="7"
                    />
                    <div className="ml-3">
                        <Icon
                            name="settings"
                            className="text-gray-900 "
                            size="7"
                        />
                    </div>
                </div>
            </div>

            {/* Grid Images */}
            <div className="flex justify-center">
                <div className="container w-11/12">
                    <div className="flex w-full h-20">
                        <div
                            className="w-4/12 border"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                        <div
                            className="w-8/12 border"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                    </div>
                    <div className="flex  w-full h-40 border">
                        <div
                            className="border w-8/12 h-full"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                        <div
                            className="h-full w-4/12 border"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                    </div>
                    <div className="flex w-full h-20">
                        <div
                            className="w-8/12 border"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                        <div
                            className="w-4/12 border"
                            style={{
                                backgroundImage: `url(${placeholder})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}></div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-center w-full h-30 justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="60px"
                    width="60px"
                    stroke="#52BA81">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                </svg>
                <div className="p-2 w-8/12">
                    <ProgressBar progress="20%" color="green" />
                    <h3>20 of 256 badges completed</h3>
                </div>
            </div>
            <div className="flex flex-center w-full h-30 justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="60px"
                    width="60px"
                    stroke="#F49E2D">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <div className="p-2 w-8/12">
                    <ProgressBar progress="10%" color="yellow" />
                    <h3>30 of 360 locations visited</h3>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
