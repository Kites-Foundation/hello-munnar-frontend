import React from "react";
import News from "./News";
const data = require("./assets/data");

export default function NewsContainer() {
    const news = data["news"];

    return (
        <div>
            {news.map((value, index) => {
                return (
                    <div key={index}>
                        <News heading={value.heading} content={value.content} />
                    </div>
                );
            })}
        </div>
    );
}
