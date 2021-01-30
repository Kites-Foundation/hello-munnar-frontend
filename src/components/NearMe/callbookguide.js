import React from "react";
import BookGuide from "./bookguide.js";
import Filter from "./filter.svg";
export default function Callbookguide() {
    return (
        <div class="m-8">
            <div>
                <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <div class="flex justify-between">
                    <h2 class="text-3xl text-gray-800 font-bold">Book A Guide</h2>
                    <img class="m-1.5"
                            style={{
                                width:20,
        
                            }}
                            src={Filter}></img>
                    </div>

                    <p class="mt-4 text-gray-600">
                        choose a guide from below
                    </p>

                </div>
            </div>
            <div class="space-y-4">
                 <BookGuide name="Michelle" age="19" lan="Malayalam" trips="1" rate="4"/>
                <BookGuide name="Jose" age="29" lan="English" trips="21" rate="4.4"/>
                <BookGuide name="Sruthy" age="30" lan="French" trips="19" rate="2.5"/>
                <BookGuide name="Fazire" age="40" lan="chinese" trips="2" rate="5"/>
            </div>
        </div>
       
    );
}