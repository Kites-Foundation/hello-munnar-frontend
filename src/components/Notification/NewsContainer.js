import React from "react";
import News from "./News";
export default function NewsContainer() {
    return (
        <div>
            <News
                heading={
                    "Code4Munnar is going to change the face of ecotourism"
                }
                content={
                    "The hackathon will be held from 29 to 31 of January 2021.Interested students may apply."
                }
            />
            <News
                heading={"KSTRC Bandh"}
                content={"There will be Bandh today from 10 am to 5 pm today"}
            />
        </div>
    );
}
