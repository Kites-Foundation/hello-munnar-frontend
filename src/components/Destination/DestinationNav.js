import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

export default function DestinationNav({ destination, className }) {
    const defaultTab = "description";
    const [activeTab, setActiveTab] = useState(defaultTab);

    const {
        destinationDescription,
        destinationFlauraFauna,
        destinationChallanges,
        destinationId,
    } = destination;

    return (
        <div className={className}>
            <div className="flex justify-around ">
                {["description", "reviews"].map((tabName) => (
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
            {activeTab === "description" && (
                <Description
                    description={destinationDescription}
                    flaura={destinationFlauraFauna}
                    challanges={destinationChallanges}
                />
            )}
            {activeTab === "reviews" && <Reviews id={destinationId} />}
        </div>
    );
}
