///custom hooks
import useTheme from "../hooks/useTheme.jsx";
const Header=()=>{
    const [theme,setTheme]=useTheme(true);
    return(
        <header className={theme}>
            <select defaultValue={theme} onChange={(evt)=>setTheme(evt.target.value)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
            <h1>Header</h1>
        </header>
    )
}
export default Header;