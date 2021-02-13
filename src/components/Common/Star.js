import React from "react";
import Icon from "../Common/Icon";

export default function Star({
    num,
    name,
    className,
    size = 5,
    onChange,
    edit,
}) {
    return Array.apply(null, {
        length: 5,
    }).map((_, i) => (
        <button
            type="button"
            className="flex focus:outline-none"
            key={i.toString()}
            onClick={() => {
                if (edit) onChange({ target: { name, value: i + 1 } });
            }}>
            <Icon
                name="star"
                color={`${i < num ? "yellow-500" : "gray-400"}`}
                className={`${i < num ? "text-yellow-500" : "text-gray-400"}`}
                size={size}
            />
        </button>
    ));
}
