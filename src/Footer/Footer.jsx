import useTheme from "../components/hooks/useTheme";
const Footer=()=>{
    const [theme,setTheme]=useTheme();
    return(
        <footer className={theme}>
            <h1>Footer</h1>
        </footer>
    )
}
export default Footer;