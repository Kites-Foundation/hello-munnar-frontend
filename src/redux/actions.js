// sample code

/*

import { fireRequest } from "./fireRequest";

export const login = (body) => {
    return fireRequest("login", [], body);
};
*/
import { fireRequest } from "./fireRequest";

export const googleLogin = () => {
    return fireRequest("google");
};
