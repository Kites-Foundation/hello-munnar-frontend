export function Logger(...args) {
    if (process.env.REACT_APP_ENABLE_LOGGING === "true") {
        console.log(...args);
    }
}
