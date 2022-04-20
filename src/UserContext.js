import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    let [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user");
    };

    const authInit = () => {
        let savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser && savedUser.google.profileObj.name) {
            setUser(savedUser);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: user,
                setUser: setUser,
                logout: logout,
                authInit: authInit,
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
