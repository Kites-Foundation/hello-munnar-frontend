import React from "react";
import NotificationCard from "./NotificationCard";
export default function NotificationContainer() {
    return (
        <div>
            <NotificationCard
                isEmergency={true}
                heading={"Road Blocked"}
                content={"The road is blocked in the route Munnar-Trivandrum."}
            />
            <NotificationCard
                isEmergency={false}
                heading={"Landslide Warning"}
                content={"Landslide in Devikulum"}
            />
        </div>
    );
}
