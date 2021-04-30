const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor() {
        super({ title: "Home", sName: "McTrinity" });
    }
    render(sPage) {
        const oJson = fetch("https://prog8110assignment2trinity-default-rtdb.firebaseio.com/meals.json").json();
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            oEntity.id = key;
            sResult += `
            <div class="container">
            <h2>${oEntity.title}</h2>
            <p><img src="${oEntity.featured_image}" alt="${oEntity.title}"</p>
            <p>${oEntity.full_description}</p>
            <form action="https://serene-taiga-04277.herokuapp.com/payment" method="post">
            <input type="hidden" name="title" value="${oEntity.title}" />
            <input type="hidden" name="price" value="${oEntity.price}" />
            <input type="tel" placeholder="enter your number" name="telephone"/>
            <button type="submit">Order now</button>
            </form></div>
            `;
        });
        return sResult;
    }
}