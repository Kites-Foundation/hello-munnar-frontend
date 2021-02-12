import React from "react";
import DestinationNav from "./DestinationNav";
import Icon from "../Common/Icon";
import data from "../Explore/assets/data/data.json";

export default function Destination(id) {
    let dest = [];
    data.forEach((element) => {
        element.destinations.forEach((item) => {
            if (item.id === id.id) {
                dest.push(item);
            }
        });
    });
    return (
        <div className="relative min-h-screen ">
            <img
                src={dest[0].assetUrl}
                alt=""
                className="h-64 sm:bg-cover mx-auto lg:rounded-lg "
            />
            <div className="flex justify-between">
                <div className="text-2xl font-semibold m-4">{dest[0].name}</div>
                <div className="my-auto mr-2">
                    <Icon name="plus" color={"black"} size={6} />
                </div>
            </div>

            <DestinationNav />
        </div>
    );
}

// Search JSON data and find destination
// id:   str  -> id of destination
// full: bool -> recursively expand all the contents
export function getDestination(id, full = false) {
    
    // currently giving dummy data

    const sampleDestination = {
        destinationId: "D-001",
        destinationName: "Aanamudi Shola National Park",
        destinationOpenTime: "10:30 AM",
        destinationCloseTime: "08:30 PM",
        destinationAvailability: "All week",
        destinationActivitiesId: ["A1", "A2", "A3"],
        destinationRouteId: "R1",
        destinationDescription:
            "Anamudi Shola National Park is a protected area located along the Western Ghats of Idukki district in Kerala state, India. It is composed of Mannavan shola, Idivara shola and Pullardi shola, covering a total area of around 7.5 km². Draft notification of this new park was released on 21 November 2003.",
        destinationCoordinates: { lat: 10.164203, lon: 77.1251676 },
        destinationBannerUrl:
            "https://cdn.hellomunnar.in/destinations/violet/ERAVIKULAM_NATIONAL_PARK.jpeg",
        destinationChallangesId: ["CH1", "CH2", "CH3"],
        destinationFlauraFaunaId: ["FF1", "FF2", "FF3"],
        destinationRating: 4,
        destinationReviews: ["R-001", "R-002"],
        activityTagsId: ["AT-001", "AT-002"],
    };

    let sampleDestinationFull = { ...sampleDestination };

    sampleDestination.destinationFlauraFauna = [
        {
            "ffId": "FF-001",
            "ffName": "Nilgiri tahr",
            "ffScientificName": "Nilgiritragus hylocrius",
            "ffDescription": "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            "ffRiskLevel": "Least concern",
            "ffWikiLink": "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            "ffImage": "https://cdn.hellomunnar.in/falurafauna/ff-001.jpeg"
        },
        {
            "ffId": "FF-001",
            "ffName": "Nilgiri tahr",
            "ffScientificName": "Nilgiritragus hylocrius",
            "ffDescription": "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            "ffRiskLevel": "Least concern",
            "ffWikiLink": "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            "ffImage": "https://cdn.hellomunnar.in/falurafauna/ff-003.jpeg"
        },
        {
            "ffId": "FF-001",
            "ffName": "Nilgiri tahr",
            "ffScientificName": "Nilgiritragus hylocrius",
            "ffDescription": "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            "ffRiskLevel": "Least concern",
            "ffWikiLink": "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            "ffImage": "https://cdn.hellomunnar.in/falurafauna/ff-002.jpeg"
        },
    ];

    sampleDestinationFull.challenges = [
        {
            challengeId: "CH1",
            challangeName: "DIFFERENTLY ABLED",
        },
        {
            challengeId: "CH3",
            challangeName: "FAMILY FRIENDLY",
        },
        {
            challengeId: "CH2",
            challangeName: "MODERATE",
        },
    ];

    // fetch reviews from backend
    sampleDestinationFull.reviews = [
        {
            title: "An Exhilerating Experience!",
            author: {
                name: "Jane Doe",
                image: null,
            },
            date: "25 June 2021",
            rating: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi non non aliquam amet nibh.",
        },
        {
            title: "An Exhilerating Experience!",
            author: {
                name: "Jane Doe",
                image: null,
            },
            date: "25 June 2021",
            rating: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi non non aliquam amet nibh.",
        },
    ]

    sampleDestinationFull.destinationActivities = [
        {
            activityTagId: "AT-001",
            activityTagName: "Trekking",
            activityTagIconUrl: "https://cdn.hellomunnar.in/icons/AT-001.svg",
        },
        {
            activityTagId: "AT-002",
            activityTagName: "Trekking",
            activityTagIconUrl: "https://cdn.hellomunnar.in/icons/AT-002.svg",
        },
        {
            activityTagId: "AT-003",
            activityTagName: "Trekking",
            activityTagIconUrl: "https://cdn.hellomunnar.in/icons/AT-003.svg",
        },
    ];

    sampleDestinationFull.destinationRoute = {
        routeName: "MUNNAR-MARAYOOR-KANTHALLOOR-CHINNAR",
        routeId: "R1",
        routeColorName: "violet",
        routeColor: "#543585",
        routeDescription:
            "Giving Name Violet is for the presence of Neelakurinji plant in Eravikulam National park and Jacaranda in kanthanalloor Route. Both the flowers are violet in colour.",
        routeIllustrationUrl:
            "https://cdn.hellomunnar.in/img/routes/violet.png",
    };

    return full ? sampleDestinationFull : sampleDestination;
}
