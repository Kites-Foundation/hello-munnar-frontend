import React from "react";
import NearMeCard from "./Cards/NearMeCard.js";
const data = require("../assets/data");

export default function NearmeDustBinWrapper() {
    const dustBin = data["dustbin"];
    return (
        <div className="m-8">
            <div>
                <div className="py-4 max-w-xl ">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        Wastebin
                    </h2>
                    <p className="mt-4 text-sm text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                {dustBin.map((value, index) => {
                    return (
                        <div key={index}>
                            <NearMeCard
                                icon={value.icon}
                                place={value.place}
                                minute={value.minute}
                                km={value.km}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
