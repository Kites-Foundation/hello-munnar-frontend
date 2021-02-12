import React from "react";
import Thingstodo from "./thingstodo";

export default function Nearmepage() {
    return (
        <div class="container mx-auto max-w-sm h-screen flex flex-col space-y-4 justify-center items-center">
            <Thingstodo name="Trekking Meeshapulimala" />
            <Thingstodo name="Destination Name" />
        </div>
    );
}
