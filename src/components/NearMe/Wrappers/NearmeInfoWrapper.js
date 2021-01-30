import React from "react";
import InfoCard from "./Cards/InfoCard.js";

export default function NearmeInfoWrapper() {
    return (
        <div class="m-8">
            <div>
                <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        Information Desk
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                <InfoCard place="Munnar" minute="10" km="5" />
                <InfoCard place="Devikulam" minute="100" km="50" />
                <InfoCard place="kochi" minute="50" km="54" />
                <InfoCard place="Devikulam" minute="100" km="50" />
                <InfoCard place="kozhikode" minute="40" km="45" />
            </div>
        </div>
    );
}
