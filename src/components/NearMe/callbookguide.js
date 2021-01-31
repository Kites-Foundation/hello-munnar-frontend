import React from "react";
import BookGuide from "./bookguide.js";
import { IoFilter } from "react-icons/io5";

export default function Callbookguide() {
    return (
        <div class="m-8">
            <div class="py-12 px-6">
                <div class="flex justify-between w-full">
                    <div class="text-3xl text-gray-800 font-bold">
                        <h2>Book A Guide</h2>
                    </div>
                    <div class="m-1.5 ">
                        <IoFilter />
                    </div>
                </div>

                <p class="mt-4 text-gray-600">choose a guide from below</p>
            </div>

            <div class="space-y-4">
                <BookGuide
                    name="John Doe"
                    age="19"
                    lan="Malayalam"
                    trips="1"
                    rate="4"
                />
                <BookGuide
                    name="John Doe"
                    age="29"
                    lan="English"
                    trips="21"
                    rate="4.4"
                />
                <BookGuide
                    name="John Doe"
                    age="30"
                    lan="French"
                    trips="19"
                    rate="2.5"
                />
                <BookGuide
                    name="John Doe"
                    age="40"
                    lan="chinese"
                    trips="2"
                    rate="5"
                />
            </div>
        </div>
    );
}
