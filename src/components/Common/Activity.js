import React from "react";
import { A } from "hookrouter";

export default function Activity({ activity }) {
    const { name, icon } = activity;

    return (
        <A
            href="#"
            className="px-4 py-4 flex flex-col items-center justify-center focus:outline-none">
            <img
                name="todo"
                color="black"
                alt=""
                className="w-12 h-12"
                size={12}
                src={icon.url}
            />
            <span className="text-sm mt-3">{name}</span>
        </A>
    );
}
