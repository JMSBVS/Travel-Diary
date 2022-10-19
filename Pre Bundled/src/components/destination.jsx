import React from "react";
import pin from "../images/pin.png"

export default function Destination(props) {
    return (
        <div className="destination-card">
            <img className="destination-image" src={props.imageUrl} alt="image of {title}" />
            <div className="destination-content">
                <img src={pin} className="pin" alt="pin icon" />
                <span className="country">{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl} className="map-link">View on Google Maps</a>
                <h2 className="destination-heading">{props.title}</h2>
                <h3 className="date-visited">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}