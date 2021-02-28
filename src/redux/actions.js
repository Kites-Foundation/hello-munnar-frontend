import { fireRequest } from "./fireRequest";

export const googleLogin = (body) => {
    return fireRequest("googleLogin", [], body);
};

export const getUser = () => {
    return fireRequest("getUser");
};
