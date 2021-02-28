import axios from "axios";
import api from "./api";
//import * as Notficiation from "../util/Notifications";

export const actions = {
    FETCH_REQUEST: "FETCH_REQUEST",
    FETCH_REQUEST_SUCCESS: "FETCH_REQUEST_SUCCESS",
    FETCH_REQUEST_ERROR: "FETCH_REQUEST_ERROR",
    SET_DATA: "SET_DATA",
};

const isRunning = {};

export const setStoreData = (key, value) => {
    return {
        type: actions.SET_DATA,
        key,
        value,
    };
};

export const fetchDataRequest = (key) => {
    return {
        type: actions.FETCH_REQUEST,
        key,
    };
};

export const fetchDataRequestError = (key, error) => {
    return {
        type: actions.FETCH_REQUEST_ERROR,
        key,
        error,
    };
};

export const fetchResponseSuccess = (key, data) => {
    return {
        type: actions.FETCH_REQUEST_SUCCESS,
        key,
        data,
    };
};

export const fireRequest = (
    key,
    path = [],
    params = {},
    urlParam = "",
    multipart = false
) => {
    return (dispatch) => {
        dispatch(fetchDataRequest(key));
        return APIRequest(key, path, params, urlParam, multipart)
            .then((response) => {
                dispatch(fetchResponseSuccess(key, response.data));
                return response;
            })
            .catch((error) => {
                dispatch(fetchDataRequestError(key, error));
            });
    };
};

export const APIRequest = (
    key,
    path = [],
    params = {},
    urlParam = "",
    multipart = false
) => {
    // cancel previous api call
    if (isRunning[key]) {
        isRunning[key].cancel();
    }
    isRunning[key] = axios.CancelToken.source();
    // get api url / method
    const request = { ...api[key] };
    if (path.length > 0) {
        request.path += "/" + path.join("/");
    }
    if (request.path[request.path.length - 1] !== "/") {
        request.path = request.path + "/";
    }
    if (request.method === undefined || request.method === "GET") {
        request.method = "GET";
        const qs = Object.keys(params)
            .map(
                (k) =>
                    encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
            )
            .join("&");
        if (qs !== "") {
            request.path += `?${qs}`;
        }
    }
    // set dynamic params in the URL
    if (urlParam) {
        Object.keys(urlParam).forEach((param) => {
            request.path = request.path.replace(`{${param}}`, urlParam[param]);
        });
    }

    // set authorization header in the request header
    const config = {
        baseURL: process.env.REACT_APP_API_URL,
        headers: {},
    };
    if (!request.noAuth && localStorage.getItem("access_token")) {
        config.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }

    if (multipart) {
        config.headers[
            "Content-Type"
        ] = `multipart/form-data; boundary=${params._boundary}`;
        // couldn't set cancel token as it is an object
        // params = params.set("cancelToken", isRunning[key].token);
    } else {
        params = {
            ...params,
            cancelToken: isRunning[key].token,
        };
    }
    const axiosApiCall = axios.create(config);

    return axiosApiCall[request.method.toLowerCase()](request.path, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (error.response) {
                // currentUser is ignored because on the first page load
                // 403 error is displayed for invalid credential.
                if (error.response.status !== 200 && key === "currentUser") {
                    if (localStorage.getItem("access_token")) {
                        localStorage.removeItem("access_token");
                    }
                    /*   Notficiation.Error({
            msg: "Token invalid, please login again",
          });*/
                    return error;
                }

                // 400 Bad Request Error
                if (error.response.status === 400) {
                    /*   Notficiation.BadRequest({
            errs: error.response.data,
          });*/
                    return error;
                }

                // 4xx Errors
                if (
                    error.response.status > 400 &&
                    error.response.status < 500
                ) {
                    if (error.response.status === 404) {
                        return error;
                    } else if (
                        error.response.data &&
                        error.response.data.detail
                    ) {
                        let err = {
                            msg: error.response.data.detail,
                        };
                        //  Notficiation.Error(err);
                        return err;
                    } else {
                        let err = {
                            msg: "Something went Wrong...!",
                        };
                        //   Notficiation.Error(err);
                        return err;
                    }
                }

                // 5xx Errors
                if (
                    error.response.status >= 500 &&
                    error.response.status <= 599
                ) {
                    /*  Notficiation.Error({
            msg: "Something went Wrong...!",
          });*/
                    return error;
                }
            }
        });
};
