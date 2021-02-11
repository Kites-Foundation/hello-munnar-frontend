import React, { useState } from "react";
import NotificationContainer from "./NotificationContainer";
import NewsContainer from "./NewsContainer";


function NotificationHeader() {
    let [activeTab, setActiveTab] = useState("Alert");
    return (
        <div className="px-4">
            <div className="mt-10">
            <button onClick={()=>window.history.go(-1)} className="uppercase pt-2 pl-2 hover:bg-gray-200 transition duration-200 curser-default focus:outline-none flex justify-center items-center border border-white text-black rounded-full w-15 h-15 ">
            <svg className="mx-auto  my-auto" xmlns="http://www.w3.org/2000/svg" width="39" height="39" preserveAspectRatio="xMidYMid meet"  viewBox="0 0 28 28" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            </button>
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
