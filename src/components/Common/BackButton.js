import React from "react";
import Icon from "./Icon";
export default function BackButton({ color = "black" }) {
    return (
        <div className="absolute z-10 top-3 left-3 ">
            <Icon name="back" color={color} size={8} />
        </div>
    );
}
