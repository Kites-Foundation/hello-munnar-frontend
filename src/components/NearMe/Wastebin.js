import React from "react";

export default function NearMe() {
    return (
        <div class="container mx-auto max-w-sm h-screen flex flex-col space-y-4 justify-center items-center">
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4"></div>
                <div class="flex-grow p-3">
                    <div class="font-semibold text-gray-700">
                        Antério Vieira da Silva Lima
                    </div>
                    <div class="text-sm text-gray-500">
                        You: Thanks, sounds good! . 8hr
                    </div>
                </div>
                <div class="p-2"></div>
            </div>
        </div>
    );
}
