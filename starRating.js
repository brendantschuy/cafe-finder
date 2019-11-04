//starRating.js

//inspired mostly by https://alligator.io/web-components/attributes-properties/

const template = document.createElement('template');
template.innerHTML = "<span></span>";


class StarRating extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.numStars = this.shadowRoot.querySelector('span');
    }

    connectedCallback() {
        if (!this.hasAttribute('rating')) {
            this.setAttribute('rating', 1);
        }

        let display = "";

        for(let i = 0; i < this.rating; i++) {
            display += "⭐";
        }

        for(let j = 5; j > this.rating; j--) {
            display += "☆";
        }

        this.numStars.innerText = display;
    }

    get rating() {
        return this.getAttribute('rating');
    }

    set rating(newValue) {
        this.setAttribute('rating', newValue);
    }
}

customElements.define('star-rating', StarRating);