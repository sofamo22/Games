import { Ui } from './ui-module.js'
export class Details {
    constructor(id) {
        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });

        this.getDetails(id);
    }
    async getDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dbf0898f20msh3d909d7aaa60b3fp18bf70jsnf6c42d1e7712',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let data = await fetch(url, options);
        let response = await data.json()
        console.log(response)
        this.ui.displaydetails(response)
        loading.classList.add("d-none");

    };
}

