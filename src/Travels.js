import React from 'react';

import Travel from './Travel';

const travels = [
    {
        photo:"https://static.service-voyages.com/photos/vacances-angleterre/londres/generique_381276_pgbighd.jpg",
        destination:"London",
        country:"United Kingdom",
        distance:"1140 km",
    },
    {
        photo:"https://media-cdn.tripadvisor.com/media/photo-s/12/78/4e/f8/bordeaux.jpg",
        destination:"Bordeaux",
        country:"France",
        distance:"245 km",
    },
    {
        photo:"https://bonvoyagevietnam.com/wp-content/uploads/2017/07/Ho-chi-Minh-ville-nuit.jpg",
        destination:"Hô Chi Min",
        country:"Vietnam",
        distance:"10360 km",
    },
    {
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtI6JinY0D14FPysOGBd6khLoSjXWM0q77KhCDhH0UVufr7ph",
        destination:"Los Angeles",
        country:"Etats-Unis",
        distance:"9435 km",
    },
    {
        photo:"http://nudoss.com/wp-content/uploads/2014/09/Hong_Kong_espect%C3%A1culo_luces-677x395.jpg",
        destination:"Hong Kong",
        country:"Chine",
        distance:"9970 km",
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel {...travel} />
        ))}
    </div>
);

export default Travels;