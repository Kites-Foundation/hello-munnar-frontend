import React from "react";
import Input from "./Common/Input";
import Icon from "../Common/Icon";
import PhoneNumberInput from "./Common/PhoneNumberInput";
// import placeholder from "../../assets/images/dummy.jpg";

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
        </div>
    );
};

export default UserHome;
