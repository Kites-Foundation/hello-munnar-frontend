import destinationData from "./destinationData.json";
import activityData from "./activityData";
import routeData from "./routeData.json";
import challengesData from "./challenges.json";
import flauraFaunaData from "./floraFaunaData.json";
import activityTagsData from "./activityTags.json";

export let getRandomDestinations = (numberOfElements) => {
    if (!numberOfElements || numberOfElements > destinationData.length)
        return null;
    let randomIndex = Math.floor(Math.random() * (destinationData.length - 1));
    let startIndex;
    let endIndex;
    if (randomIndex < destinationData.length - numberOfElements) {
        startIndex = randomIndex;
        endIndex = randomIndex + numberOfElements;
    } else if (randomIndex > destinationData.length - numberOfElements) {
        randomIndex = randomIndex - numberOfElements;
        startIndex = randomIndex;
        endIndex = randomIndex + numberOfElements;
    }
    return destinationData.slice(startIndex, endIndex);
};

export let getRandomActivities = (numberOfElements) => {
    if (!numberOfElements || numberOfElements > activityData.length)
        return null;
    let randomIndex = Math.floor(Math.random() * (activityData.length - 1));
    let startIndex;
    let endIndex;
    if (randomIndex < activityData.length - numberOfElements) {
        startIndex = randomIndex;
        endIndex = randomIndex + numberOfElements;
    } else if (randomIndex > activityData.length - numberOfElements) {
        randomIndex = randomIndex - numberOfElements;
        startIndex = randomIndex;
        endIndex = randomIndex + numberOfElements;
    }
    return activityData.slice(startIndex, endIndex);
};

export const getRoute = (id, expandIds = false) => {
    let route = getOne(routeData, id, "route");

    if (expandIds) {
        // get destination and activities
        // get all data recursively
    }

    return route;
};

export const getManyRoute = (ids) => {
    return getMany(routeData, ids, "route");
};

export const getActivity = (id, expandIds = false) => {
    let activity = getOne(activityData, id, "activities");

    if (expandIds) {
        // get all data recursively
    }

    return activity;
};

export const getManyActivity = (ids) => {
    return getMany(activityData, ids, "activities");
};

export const getFlauraFauna = (id, expandIds = false) => {
    let flauraFauna = getOne(flauraFaunaData, id, "ff");

    if (expandIds) {
        // get all data recursively
    }

    return flauraFauna;
};

export const getManyFlauraFauna = (ids) => {
    return getMany(flauraFaunaData, ids, "ff");
};

export const getChallenge = (id, expandIds = false) => {
    let challenge = getOne(challengesData, id, "challenge");

    if (expandIds) {
        // get all data recursively
    }

    return challenge;
};

export const getManyChallenge = (ids) => {
    return getMany(challengesData, ids, "challenge");
};

export const getActivityTags = (id, expandIds = false) => {
    let activityTag = getOne(activityTagsData, id, "activityTags");

    if (expandIds) {
        // get all data recursively
    }

    return activityTag;
};

export const getManyActivityTags = (ids) => {
    return getMany(activityTagsData, ids, "activityTags");
};

export const getDestination = (id, expandIds = false) => {
    let destination = getOne(destinationData, id, "destination");

    if (expandIds && destination) {
        destination.destinationRoute = getRoute(destination.destinationRouteId);
        destination.activities = getManyActivity(destination.activitiesId);
        destination.challenges = getManyChallenge(destination.challengesId);
        destination.flauraFauna = getManyFlauraFauna(destination.ffId);
        destination.activityTags = getManyActivityTags(
            destination.activityTagsId
        );
    }

    return destination;
};

export const getManyDestination = (ids) => {
    return getMany(destinationData, ids, "destination");
};

const getOne = (data, id, keyPrefix = "") => {
    return data.find((d) => d[`${keyPrefix}Id`] === id);
};

const getMany = (data, ids, keyPrefix = "") => {
    return ids ? data.filter((d) => ids.includes(d[`${keyPrefix}Id`])) : [];
};
