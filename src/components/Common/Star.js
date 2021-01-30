import React from "react";

export default function Star({ num, dim = 6 }) {
    return Array.apply(null, {
        length: num,
    }).map((el, i) => (
        <svg
            key={i.toString()}
            className={`w-${dim} h-${dim} mr-1`}
            viewBox="0 0 300 275"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <polygon
                fill="#2D3748"
                stroke="#2D3748"
                strokeWidth="15"
                points="150,25  179,111 269,111 197,165 223,251  150,200 77,251  103,165 31,111 121,111"
            />
        </svg>
    ));
}
