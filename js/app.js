const marvel = {
render:() => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=5e60bbdde6e35cb64e504fc9b143c3a7';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
    .then( res => res.json())
    .then((json) => {
        console.log(json, 'RES.JSON')
    })
}
};
marvel.render();