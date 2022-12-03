import { createContext } from "react";
import { useState } from "react";
const Context =createContext();
function Provider({children}){
    const[theme,setTheme]=useState('dark');
    return(
        <Context.Provider value={{theme,setTheme}}>
            {children}
        </Context.Provider>
    )
}
export{Context,Provider};
