import React from "react";
import Amenities from "./amenitiescard1";

export default function Nearmepage() {
    return (
        <div class="container mx-auto max-w-sm h-screen flex flex-col space-y-4 justify-center items-center">
            <Amenities
                category="Hospitals"
                title="Tata Global Hospital"
                place="Meeshapulimala"
                color="red"
                time="24 hours"
                private="Private"
                distance="1 KM"
            />
            <Amenities
                category="Food_Drink"
                title="Village restaurant"
                place="Bodi hills"
                color="indigo"
                time="8AM-10PM"
                private="Private"
                distance="1.2 KM"
            />
            <Amenities
                category="Wastebin"
                title="Wastebin"
                place="Sun moon valley"
                color="green"
                time="24 hours"
                private="Private"
                distance="1.2 KM"
            />
        </div>
    );
}
