function Header() {
    return <div className="navbar-fixed">
        <nav className="teal lighten-1">
            <div className="nav-wrapper">
                {/* eslint-disable-next-line  */}
                <a href="#" className="brand-logo">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/AnnaBredikhina/movies">Repo</a></li>
                </ul>
            </div>
        </nav>
    </div>
}

export {Header}