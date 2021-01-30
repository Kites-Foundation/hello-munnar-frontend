import React from "react";
import Icon from "../Common/Icon";

export default function Star({ num, dim = 6 }) {
    return Array.apply(null, {
        length: num,
    }).map((el, i) => <Icon name="star" color={"black"} size={6} />);
}
