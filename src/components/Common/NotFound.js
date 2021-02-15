import React from "react";
import { A } from "hookrouter";

const NotFound = ({ name = "" }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-3xl uppercase font-bold text-gray-500">
            {name} not found
            <div className="flex mt-3">
                <A
                    href="/"
                    className="font-medium capitalize text-black text-base px-3 py-2 border border-black rounded-full mr-6">
                    Go home
                </A>
                <button
                    onClick={() => window.history.back()}
                    className="font-medium capitalize text-white text-base px-3 py-2 border border-black rounded-full bg-black">
                    Go back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
