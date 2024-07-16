import { Ui } from './ui-module.js'
import { Details } from './details-module.js'
export class Games {
    constructor() {
        this.ui = new Ui();
        this.getGames('mmorpg')
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".nav-item .active").classList.remove("active");
                e.target.classList.add("active");
                console.log(e.target.innerHTML)
                this.getGames(e.target.innerHTML);

            });
        });





    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dbf0898f20msh3d909d7aaa60b3fp18bf70jsnf6c42d1e7712',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let response = await data.json()
        this.ui.displayData(response);
        this.event()
        loading.classList.add("d-none");

    }

    event() {
        document.querySelectorAll('.card').forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.dataset.id;
                this.details(id)
            })
        })
    }

    details(id) {
        let details = new Details(id);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");

    }
}
