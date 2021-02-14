import React from "react";
import KsrtcCard from "./KsrtcCard";
const data = require("./assets/data");

export default function KsrtcContainer() {
    const ksrtc = data["ksrtc"];
    return (
        <>
            {ksrtc.map((value) => {
                return (
                    <KsrtcCard
                        from={value.from}
                        to={value.to}
                        time={value.time}
                        amorpm={value.amorpm}
                        type={value.type}
                    />
                );
            })}
        </>
    );
}
