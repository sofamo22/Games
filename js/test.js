
async function getGames() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
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
}
async function getDetails(id) {
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
};
getGames()
getDetails(12)