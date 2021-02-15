import React from "react";
import KsrtcCard from "./KsrtcCard";
import ksrtcData from "../../data/ksrtcData.json";

export default function KsrtcContainer() {
    return (
        <>
            {ksrtcData.map((ksrtc) => {
                return (
                    <KsrtcCard
                        key={ksrtc.ksrtcId}
                        from={ksrtc.from}
                        to={ksrtc.to}
                        time={new Date(ksrtc.kstrcTime).toLocaleString(
                            "en-US",
                            { hour: "numeric", minute: "numeric", hour12: true }
                        )}
                        type={ksrtc.ksrtcType}
                        availableDays={ksrtc.availableDays}
                    />
                );
            })}
        </>
    );
}
