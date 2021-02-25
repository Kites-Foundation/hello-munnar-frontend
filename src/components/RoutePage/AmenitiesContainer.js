import React from "react";
import Amenity from "./Amenity";

const AmenitiesContainer = ({ routeName, className }) => {
    return (
        <div
            className={`flex justify-evenly space-x-6 md:space-x-24 ${className}`}>
            <Amenity
                routeName={routeName}
                iconName="todo"
                name="Things To Do"
            />
            <Amenity
                routeName={routeName}
                iconName="foodDrinks"
                name="Food and Drinks"
            />
            <Amenity
                routeName={routeName}
                iconName="amenities"
                name="Amenities"
            />
        </div>
    );
};

export default AmenitiesContainer;
