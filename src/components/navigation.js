import React from "react";


const Navigation = ({Routechange}) => {
    return (
        <nav className="tr f3 white underline pa4 dim pointer" onClick={() => Routechange("signin")}>
            {'Sign out'}
        </nav>
    );
}

export default Navigation;