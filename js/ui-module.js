export class Ui {
    displayData(data) {
        let dataBox = ``
        for (let i = 0; i < data.length; i++) {
            dataBox += `
            <div class=" col-lg-3 col-md-4 col-sm-6">
                        <div data-id="${data[i].id}   " class="card h-100 bg-transparent" role="button">
                            <div class="card-body">
                                <div class='card-img' >
                                    <img class="card-img-top object-fit-cover h-100"
                                        src=${data[i].thumbnail}>
                                </div>
                                <div class='card-info'>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 text-white small">${data[i].title}</h3>
                                        <span class="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p class="card-text small text-white text-center opacity-50">
                                    ${data[i].short_description.split(' ', 8)}
                                    </p>
                                </div>
                            </div>
                            <div class="card-footer small hstack justify-content-between">
                         <span class="badge badge-color">${data[i].genre}</span>
                         <span class="badge badge-color">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>`;
        }
        document.getElementById('gameData').innerHTML = dataBox;
    }

    displaydetails(details) {
        console.log(details);

        let detailsBox = `
                        <div class="col-md-4">
                    <img src="${details.thumbnail}" alt="d-img" class="w-100">
                </div>
                <div class="col-md-8 text-white">
                    <h3>Title:${details.title}</h3>
                    <p>Category: <span class="badge text-bg-info">${details.genre}</span></p>
                    <p>Platform: <span class="badge text-bg-info">${details.platform}</span></p>
                    <p>Status: <span class="badge text-bg-info">${details.status}</span></p>
                    <p class="small">${details.description}</p>
                    <a class="btn btn-outline-warning text-white" target="_blank" href="${details.game_url}">Show Game</a>
                </div>
            
            `
        document.getElementById('rowBody').innerHTML = detailsBox
    }
}