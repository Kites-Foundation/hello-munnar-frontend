import React from "react";
import NotificationCard from "./NotificationCard";
const data = require("./assets/data");

export default function NotificationContainer() {
    const notifications = data["notifications"];
    return (
        <>
            {notifications.map((value, index) => {
                return (
                    <div key={index}>
                        <NotificationCard
                            isEmergency={value.isEmergency}
                            heading={value.heading}
                            content={value.content}
                        />
                    </div>
                );
            })}
        </>
    );
}
