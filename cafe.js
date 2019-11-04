//cafe.js

/*
    name  : "Coffeehouse Five",
    lat   : 45.5632969,
    lng   : -122.6754892,
    id    : 10001,
    cool  : 5,
    price : 2,
    env   : 4
*/

class Cafe {
    constructor(name, lat, lng, id, coolRating, priceRating, envRating) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.id = id;
        this.coolRating = coolRating;
        this.priceRating = priceRating;
        this.envRating = envRating;
    }

    getCoolRating = (cool) => {
        return `<star-rating rating="${cool}"></star-rating>`
    };
}