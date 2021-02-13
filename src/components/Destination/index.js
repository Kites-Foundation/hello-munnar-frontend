import React from "react";
import Banner from "./Banner";
import Heading from "./Heading";
import DestinationNav from "./DestinationNav";
import ActivitiesContainer from "./ActivitiesContainer";

export default function Destination(id) {
    // get all the details of a destination
    const destination = getDestination(id, true);

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <Banner
                    route={destination.destinationRoute}
                    image={destination.destinationBannerUrl}
                />
                <Heading destination={destination} className="px-8 md:px-10" />

                <ActivitiesContainer
                    activities={destination.destinationActivities}
                    className="px-8 md:px-10 py-4"
                />

                <DestinationNav
                    destination={destination}
                    className="px-8 md:px-10"
                />
            </div>
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

    sampleDestinationFull.destinationFlauraFauna = [
        {
            ffId: "FF-001",
            ffName: "Nilgiri tahr",
            ffScientificName: "Nilgiritragus hylocrius",
            ffDescription:
                "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            ffRiskLevel: "Least concern",
            ffWikiLink: "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            ffImage: "https://cdn.hellomunnar.in/falurafauna/ff-001.jpeg",
        },
        {
            ffId: "FF-002",
            ffName: "Nilgiri tahr",
            ffScientificName: "Nilgiritragus hylocrius",
            ffDescription:
                "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            ffRiskLevel: "Least concern",
            ffWikiLink: "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            ffImage: "https://cdn.hellomunnar.in/falurafauna/ff-003.jpeg",
        },
        {
            ffId: "FF-003",
            ffName: "Nilgiri tahr",
            ffScientificName: "Nilgiritragus hylocrius",
            ffDescription:
                "The Nilgiri Tahr (Nilgiritragus hylocrius, former name is Hemitragus hylocrius) is an endangered mountain ungulate endemic to the southern part of the Western Ghats. The species is found in a roughly 400 km stretch in the Western Ghats which falls in the states of Kerala and Tamil Nadu.",
            ffRiskLevel: "Least concern",
            ffWikiLink: "https://www.keralatourism.org/munnar/nilgiri-tahr.php",
            ffImage: "https://cdn.hellomunnar.in/falurafauna/ff-002.jpeg",
        },
    ];

    sampleDestinationFull.destinationChallanges = [
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

    sampleDestinationFull.destinationActivities = [
        {
            activityTagId: "AT-001",
            activityTagName: "Trekking",
            activityTagIconUrl: "https://cdn.hellomunnar.in/icons/AT-001.svg",
        },
        {
            activityTagId: "AT-002",
            activityTagName: "Sightseeing",
            activityTagIconUrl: "https://cdn.hellomunnar.in/icons/AT-002.svg",
        },
        {
            activityTagId: "AT-003",
            activityTagName: "Wildlife",
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
