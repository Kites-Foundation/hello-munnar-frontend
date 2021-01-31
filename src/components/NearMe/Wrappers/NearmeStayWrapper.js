import React from "react";
import NearMeCard from "./Cards/NearMeCard.js";
const data = require("../assets/data");

export default function NearmeStayWrapper() {
    const stay = data["stay"];
    return (
        <div class="m-8">
            <div>
                <div class="py-4 max-w-xl ">
                    <h2 class="text-3xl text-gray-800 font-bold">Stay</h2>
                    <p class="mt-4 text-sm text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                {stay.map((value, index) => {
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
