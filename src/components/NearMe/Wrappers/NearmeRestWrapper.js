import React from "react";
import NearMeCard from "./Cards/NearMeCard.js";

export default function NearmeRestWrapper() {
    return (
        <div class="m-8">
            <div>
                <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold">Restroom</h2>
                    <p class="mt-4 text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                <NearMeCard icon="bed" place="Munnar" minute="10" km="5" />
                <NearMeCard icon="bed" place="Devikulam" minute="100" km="50" />
                <NearMeCard icon="bed" place="kozhikode" minute="40" km="45" />
                <NearMeCard icon="bed" place="kochi" minute="50" km="54" />
                <NearMeCard icon="bed" place="kozhikode" minute="40" km="45" />
            </div>
        </div>
    );
}
