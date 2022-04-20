import axios from "axios";
import { createContext } from "react";

export const ApiContext = createContext();


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const ApiProvider = (props) => {
    return (
        <ApiContext.Provider value={api}>{props.children}</ApiContext.Provider>
    );
};

export default ApiProvider;
