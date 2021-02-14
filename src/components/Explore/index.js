import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import StorySelectorContainer from "./StorySelectorContainer";
import DestinationContainer from "../Common/DestinationContainer";
import TodoContainer from "../Common/TodoContainer";

// import destinationDefault from "../../assets/images/destination-default.png";
import todoDefault1 from "../../assets/images/package-1-default.png";
import todoDefault2 from "../../assets/images/package-2-default.png";


import { getRandomDestinations } from '../../data/dataUtils'

// const destinations = [
//     {
//         name: "Consectetur adipiscing elit.",
//         description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
//         image: destinationDefault,
//     },
//     {
//         name: "Consectetur adipiscing elit 2.",
//         description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
//         image: destinationDefault,
//     },
//     {
//         name: "Consectetur adipiscing elit 3.",
//         description: "Alura ipsum divir nola ipsum koret lorsa silo enori",
//         image: destinationDefault,
//     },
// ];

const todos = [
    {
        name: "Meeshapulimala Trekking",
        image: todoDefault1,
    },
    {
        name: "DTPC Boating",
        image: todoDefault2,
    },
    {
        name: "Meeshapulimala Trekking",
        image: todoDefault1,
    },
    {
        name: "DTPC Boating",
        image: todoDefault2,
    },
];

const Explore = () => {
    let [destinations,setDestinations] = useState([])
    useEffect(()=>{
        setDestinations(getRandomDestinations(10));

    },[])
    return (
        <div className="pt-9 ">
            <HeaderNav className="pb-2 px-8 md:px-10" />

            <StorySelectorContainer className="pt-2 px-8 md:px-10" />

            <DestinationContainer
                destinations={destinations}
                className="py-8 pb-4 md:pd-8"
            />

            <TodoContainer todos={todos} className="py-6 pt-4 md:pt-6" />
        </div>
    );
};

export default Explore;
