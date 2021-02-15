import React, { useState } from "react";

const InnerTab = ({ arrangement, defaultTab, className }) => {
    const labels = Object.keys(arrangement);
    defaultTab = defaultTab || labels[0];
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <div className={className}>
            <div className="flex justify-around ">
                {labels.map((tabName) => (
                    <button
                        key={tabName}
                        className={`font-medium py-2 ${
                            activeTab === tabName
                                ? "border-black"
                                : "border-transparent"
                        }  border-b-2 focus:outline-none capitalize`}
                        onClick={() => setActiveTab(tabName)}>
                        {tabName}
                    </button>
                ))}
            </div>
            {arrangement[activeTab]}
        </div>
    );
};

export default InnerTab;
