import React from "react"

export default function Experience(props) {
    return (
        <section>
            <img src={`${props.item.imageUrl}`} className="photo"/>
            <div className="exp-container">
                <div className="location-container">
                    <span className="gps-container">
                        <img src="../images/gps-icon.png" className="gps-icon"/>
                        <p className="location">{props.item.location}</p>
                    </span>
                    <a href={`${props.item.googleMapsUrl}`} className="map-link" target="_blank">View on Google Maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <h4 className="period">{props.item.startDate} - {props.item.startDate}</h4>
                <p className="description">{props.item.description}</p>
            </div>
        </section>
    )
}