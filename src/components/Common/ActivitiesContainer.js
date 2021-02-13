import React from "react";
import Activity from "./Activity";

export default function ActivitiesContainer({ activities, className }) {
    return (
        <div className={`grid grid-cols-3 md:grid-cols-5 ${className}`}>
            {activities.map((activity) => (
                <Activity key={activity.activityTagId} activity={activity} />
            ))}
        </div>
    );
}
