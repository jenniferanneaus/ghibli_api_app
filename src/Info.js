import './css/info.css';
import React from "react"

function Info(props) {
    return(
        <div className="card">
            <div className="card-heading">
                <p style={{display: !props.name && "none"}}>{props.name}</p>
                <p style={{display: !props.title && "none"}}>{props.title} ({props.release_date})</p>
            </div>

            <div className="card-info">
                {/*For people: Age, gender, eye/hair colour*/}
                <p style={{display: !props.age && "none"}}>Age: {props.age}</p>
                <p style={{display: !props.gender && "none"}}>Gender: {props.gender}</p>
                <p style={{display: !props.eye_color && "none"}}>Eye colour: {props.eye_color}</p>
                <p style={{display: !props.hair_color && "none"}}>Hair colour: {props.hair_color}</p>

                {/* For movies: Description, director*/}
                <p style={{display: !props.description && "none"}}>{props.description}</p>
                <p style={{display: !props.director && "none"}}>Directed by {props.director}.</p>
            </div>
            
        </div>
    )
}

export default Info