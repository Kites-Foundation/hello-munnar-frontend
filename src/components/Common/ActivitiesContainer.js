import React from "react";
import Activity from "./Activity";

export default function ActivitiesContainer({ destinationData, className }) {
    let { activityTypes } = destinationData
    return (
        <div className={`grid grid-cols-3 md:grid-cols-5 ${className}`}>
            {activityTypes.map((activity) => (
                <Activity key={activity.id} activity={activity} />
            ))}
        </div>
    );
}
