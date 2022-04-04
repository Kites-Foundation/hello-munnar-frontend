import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    let [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user: user,
                setUser: setUser,
                logout: logout,
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
