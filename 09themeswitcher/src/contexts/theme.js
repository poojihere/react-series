import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode : "light",
    darktheme : () =>{},
    lighttheme : () =>{}
});


export const ThemeProvider = ThemeContext.Provider;

//hook

export default function useTheme(){
    return useContext(ThemeContext);
}