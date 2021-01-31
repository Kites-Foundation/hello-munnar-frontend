import React from "react";
import NearMeCard from "./Cards/NearMeCard.js";

export default function NearmeInfoWrapper() {
    return (
        <div class="m-8">
            <div>
                <div class="py-4 max-w-xl ">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        Information Desk
                    </h2>
                    <p class="mt-4 text-sm text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                <NearMeCard icon="info" place="Munnar" minute="10" km="5" />
                <NearMeCard
                    icon="info"
                    place="Devikulam"
                    minute="100"
                    km="50"
                />
                <NearMeCard icon="info" place="kozhikode" minute="40" km="45" />
                <NearMeCard icon="info" place="kochi" minute="50" km="54" />
                <NearMeCard icon="info" place="kozhikode" minute="40" km="45" />
            </div>
        </div>
    );
}
