import './css/welcome.css';
import React from "react"

function Welcome() {
    return(
        <div className="container">
            <h3>Welcome to the Studio Ghibli API App.</h3>
            <p>This is a React app to retrieve and display information about Studio Ghibli characters and films, using the <a className="link-inline" href="https://ghibliapi.vercel.app/">Studio Ghibli API</a>. The header uses a pattern from <a className="link-inline" href="https://www.toptal.com/designers/subtlepatterns/">subtlepatterns.com</a>, and the app was coded by Jennifer Ralph in January 2020.</p>
        </div>
    )
}

export default Welcome