import axios from "axios";
import { createContext } from "react";

export const ApiContext = createContext();

let baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: baseURL,
});

const ApiProvider = (props) => {
    return (
        <ApiContext.Provider value={api}>{props.children}</ApiContext.Provider>
    );
};

export default ApiProvider;
