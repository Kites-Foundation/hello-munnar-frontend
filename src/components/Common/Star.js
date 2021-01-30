import React from "react";
import Icon from "../Common/Icon";

export default function Star({ num, size = 5 }) {
    return Array.apply(null, {
        length: 5,
    }).map((_, i) => (
        <Icon name="star" color={`${i < num ? "indigo-700" : "gray-200"}`} size={size}
            key={i.toString()}
        />
    ));
}
