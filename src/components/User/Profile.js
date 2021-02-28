import React, { useEffect, useState } from "react";
import Icon from "../Common/Icon";
import ProgressBar from "./Common/Progressbar";
import { navigate } from "hookrouter";
import { getUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Logger } from "../../utils/logger";

const UserHome = () => {
    const dispatch = useDispatch();
    const [userNow, setuserNow] = useState({ image: null, name: null });
    useEffect(() => {
        if (localStorage.getItem("access_token"))
            dispatch(getUser()).then((res) => {
                if (res && res.data) {
                    setuserNow({
                        image: res.data.data.googleImageUrl,
                        name: res.data.data.name,
                    });
                } else {
                    Logger("Invalid token");
                    logout();
                }
            });
    }, [dispatch]);

    const logout = () => {
        localStorage.removeItem("access_token");
        setuserNow({ image: null, name: null });
        navigate("/signIn");
    };
    const placeholder =
        "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg";
    return (
        <div className="user">
            <div className="Navbar flex justify-between content-center pt-8 pb-12 pl-8 pr-8">
                <div className="flex content-center">
                    {userNow.image ? (
                        <div className="w-8 h-8">
                            <img
                                alt="profile"
                                src={userNow.image}
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    ) : (
                        <Icon
                            name="userFilled"
                            className="text-gray-900"
                            size="7"
                        />
                    )}
                    <h1 className="ml-4 text-2xl font-bold text-gray-900">
                        {userNow.name ? userNow.name : "John Doe"}
                    </h1>
                </div>
                <div className="flex">
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
            {userNow.name !== null ? (
                <div className="m-0 m-auto outline-none  text-center w-full">
                    <button
                        onClick={logout}
                        className="bg-gray-300 outline-none rounded-md m-0 p-2 m-auto ">
                        Logout
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default UserHome;
