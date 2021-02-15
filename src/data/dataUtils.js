import destinationData from "./destinationData.json";

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
