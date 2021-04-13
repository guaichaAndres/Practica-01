const marvel = {
render:() => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5e60bbdde6e35cb64e504fc9b143c3a7&hash=164cd117cf1ed782c3fe63513fd2cfa9';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
    .then( res => res.json())
    .then((json) => {
        for(const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += 
            `<div class="col-md-4">
            <a href="${urlHero}" target="blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
            </a>
            <h3 class="title">${hero.name}</h3>
        </div>`;
            
        }
        container.innerHTML=contentHTML;
    })
}
};
marvel.render();