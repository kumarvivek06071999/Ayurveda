import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const baseUrl = "/src/assets"

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const toggleDropdown = () => {
        setIsMenuOpen(!isMenuOpen)

    }



    const contextData = {
        isDropdownOpen,
        setIsDropdownOpen,
        isDropdownOpen1,
        setIsDropdownOpen1,
        isMenuOpen,
        setIsMenuOpen,
        toggleDropdown,
        baseUrl,

    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext