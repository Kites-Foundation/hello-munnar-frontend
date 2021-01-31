import React from "react";
import NearMeCard from "./Cards/NearMeCard.js";

export default function NearmeStayWrapper() {
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
                <NearMeCard icon="house" place="Munnar" minute="10" km="5" />
                <NearMeCard
                    icon="house"
                    place="Devikulam"
                    minute="100"
                    km="50"
                />
                <NearMeCard icon="house" place="Vadyar" minute="40" km="45" />
                <NearMeCard
                    icon="house"
                    place="Mattupetty"
                    minute="50"
                    km="54"
                />
                <NearMeCard
                    icon="house"
                    place="Kollukkumalai"
                    minute="40"
                    km="45"
                />
            </div>
        </div>
    );
}
