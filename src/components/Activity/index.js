import React, { useEffect } from "react";
import Banner from "../Common/PlacesBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";

export default function Activity(id) {
    // get all the details of a activity
    const activityFull = getActivity(id, true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activity = Object.keys(activityFull).reduce((acc, key) => {
        let newKey = key.replace("activity", "");
        newKey = `${newKey.charAt(0).toLowerCase()}${newKey.slice(1)}`;
        return {
            ...acc,
            [newKey]: activityFull[key],
        };
    }, {});

    const onLike = (status) => {
        // save to local storage
    };

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <Banner
                    route={activity.route}
                    image={activity.bannerUrl}
                    onLike={onLike}
                />
                <Heading place={activity} className="pt-2 px-8 md:px-10" />

                <PlacesTab place={activity} className="px-8 md:px-10" />
            </div>
        </div>
    );
}

// Search JSON data and find activities
// id:   str  -> id of activity
// full: bool -> recursively expand all the contents
export function getActivity(id, full = false) {
    // currently giving dummy data

    const sampleActivity = {
        activityId: "AT-001",
        activityName: "POTHANMEDU VIEW POINT",
        activityRouteId: "R-1",
        activityAvailability: "All week",
        activityOpenTime: "08:10 AM",
        activityCloseTime: "10:10 PM",
        activityDifficulty: "Easy",
        activityPrice: "2000",
        activityReviews: ["R-001"],
        activityChallangesId: ["CH1", "CH2", "CH3"],
        activityCoordinates: { lat: 10.164203, lon: 77.1251676 },
        activityDescription:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        activityBookingDetails: {
            bookingLink: "https://link.to/booking",
            bookingContact: {
                bookingContactName: "Mr. Lorem Ipsum",
                bookingContactNumber: "+91 987654321",
            },
        },
    };

    let sampleActivityFull = { ...sampleActivity };

    sampleActivityFull.activityChallanges = [
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

    sampleActivityFull.activityRoute = {
        routeName: "MUNNAR-MARAYOOR-KANTHALLOOR-CHINNAR",
        routeId: "R1",
        routeColorName: "violet",
        routeColor: "#543585",
        routeDescription:
            "Giving Name Violet is for the presence of Neelakurinji plant in Eravikulam National park and Jacaranda in kanthanalloor Route. Both the flowers are violet in colour.",
        routeIllustrationUrl:
            "https://cdn.hellomunnar.in/img/routes/violet.png",
    };

    return full ? sampleActivityFull : sampleActivity;
}
