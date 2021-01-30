import React from "react";
import StayCard from "./Cards/StayCard.js";

export default function NearmeStayWrapper() {
    return (
        <div class="m-8">
            <div>
                <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold">Stay</h2>
                    <p class="mt-4 text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                <StayCard place="Munnar" minute="10" km="5" />
                <StayCard place="Devikulam" minute="100" km="50" />
                <StayCard place="kochi" minute="50" km="54" />
                <StayCard place="kozhikode" minute="40" km="45" />
                <StayCard place="Devikulam" minute="100" km="50" />
            </div>
        </div>
    );
}
