import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <img
			src={photo}
			alt={destination}
        />
        <p>{destination}, {country} <i>({distance})</i></p>
    </div>
);

export default Travel;