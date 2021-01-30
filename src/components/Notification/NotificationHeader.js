import React, { useState } from "react";
import NotificationContainer from "./NotificationContainer";
import NewsContainer from "./NewsContainer";

function NotificationHeader() {
    let [activeTab, setActiveTab] = useState("Alert");
    return (
        <div className="px-4">
            <div className="mt-10">
                <p className="text-4xl font-bold ">Notification</p>
                <br />
                <div className="flex w-full">
                    
                    <button
                        onClick={() => {
                            setActiveTab("Alert");
                        }}
                        className={`text-center focus:outline-none hover:bg-teal-500 border-2 flex-shrink-0 border-teal-600 font-bold  hover:text-white rounded-full text-white px-3 py-2 transition duration-300 ease-in-out w-36 mr-50${
                            activeTab === "Alert"
                                ? " bg-teal-500 text-black"
                                : "bg-white-500 text-teal-500"
                        }`}>
                        Alert
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("News");
                        }}
                        className={`text-center focus:outline-none ml-auto hover:bg-teal-500  border-2 flex-shrink-0 border-teal-500 font-bold  hover:text-white  rounded-full text-white px-4 py-2 transition duration-300 ease-in-out w-36 mr-50${
                            activeTab === "News"
                                ? " bg-teal-500 text-black"
                                : "bg-white-500 text-teal-500"
                        }`}>
                        News
                    </button>
                </div>
            </div>
            <div>
                {activeTab === "Alert" ? <NotificationContainer /> : ""}
                {activeTab === "News" ? <NewsContainer /> : ""}
            </div>
        </div>
    );
}

export default NotificationHeader;
