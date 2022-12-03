import { useContext } from "react"
import { Context } from "../Context/ThemeContext"
const useTheme=(settrOnly)=>{
    const {theme,setTheme}=useContext(Context);
    return settrOnly?[theme,setTheme]:[theme];
}
export default useTheme;