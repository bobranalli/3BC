import logo from './logo1.png'
import './styles/styles.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {

    const myImageStyle = { width: '200px', height: 'auto' };


    return (
        <nav className="nav">
            <Link to="/" className="site-logo"> <img style={myImageStyle} src={logo} alt="plant logo" />  </Link>
            <ul>
                <CustomLink to="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Home
                </CustomLink>


                <CustomLink to="/team">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Team
                </CustomLink>

                <CustomLink to="/about">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About
                </CustomLink>

                {/* <CustomLink to="/contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
            </CustomLink> */}
            </ul>
        </nav>

    )


}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children}
            </Link>
        </li>


    )
}