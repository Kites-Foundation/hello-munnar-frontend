import React from "react";
import Icon from "./Icon";
export default function BackButton() {
    return (
        <div className="absolute z-10 top-3 left-3 ">
            <Icon name="back" color="black" size={8} />
        </div>
    );
}
