import { createContext, useContext, useState } from "react"

// crear un contexto para poder compartir un estado en distintos componentes
const authContext = createContext()

// para eso se necesita un proveedor
// el cual es un componente que envuelve los demas componentes
export const AuthProvider = ({ children }) => {
    // se crea el estado para guardar el usurio, en este caso
    // se puede pasar como value al context provider cualquier cosa
    const [user, setUser] = useState()


    return (
        <authContext.Provider value={[user, setUser]}>
            {children}
        </authContext.Provider>
    )
}

// se crea un hook para abstraer la obtencion del contexto
export const useAuth = () => {
    // se utiliza el hook useContext al cual se le especifica
    // el contexto que queremos usar y este va a devolver su valor
    // para que el useContext funcione debe ser llamado dentro
    // del provider del contexto que se le esta especificando
    const [user, setUser] = useContext(authContext)
   
    return [user, setUser]
}

