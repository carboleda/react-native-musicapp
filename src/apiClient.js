//La url debe ser http de lo contrario el fetch por defecto bloquea la peticion
const API_KEY = 'c895ed9a52b4d6c88b85d939a7233c6a';
const COUNTRY = 'spain';
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${COUNTRY}&api_key=${API_KEY}&format=json`;

function getArtists() {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 140,
            }
        }));
}

export { getArtists };