import React from "react";
import Card from "./Card.js";

export default function Wrapper() {
    return (
        <div class="m-8">
            <div>
                <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold">Wastebin</h2>
                    <p class="mt-4 text-gray-600">
                        Lorem, ipsum dolor sit amea aperiam mollitia.
                    </p>
                </div>
            </div>
            <div class="space-y-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
