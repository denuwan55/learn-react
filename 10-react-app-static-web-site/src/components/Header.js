import reactLogo from "../images/react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="React Logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

