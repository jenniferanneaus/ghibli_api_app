import './css/welcome.css';
import React from "react"

function Welcome() {
    return(
        <div className="container">
            <h3>Welcome to the Studio Ghibli API App.</h3>
            <p>This is a React app to retrieve and display information about Studio Ghibli characters and films, using the <a className="link-inline" href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a>. The website uses resources from <a className="link-inline" href="https://www.toptal.com/designers/subtlepatterns/">subtlepatterns.com</a>, and API queries are based on information from </p>
        </div>
    )
}

export default Welcome