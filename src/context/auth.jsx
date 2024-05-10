import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Al inicializar el estado, intenta obtener el usuario desde el localStorage
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Utiliza useEffect para escribir el usuario en el localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <authContext.Provider value={[user, setUser]}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    const [user, setUser] = useContext(authContext);
    return [user, setUser];
};
