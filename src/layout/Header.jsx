function Header() {
    return <div className="navbar-fixed">
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    </div>
}

export {Header}