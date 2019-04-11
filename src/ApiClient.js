

//url
//http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=1d19421c694587148e50a9223ee72e8a&format=json

const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=1d19421c694587148e50a9223ee72e8a&format=json'

function getArtist() {
    return fetch(URL)
        .then(response=>response.json())
        .then(data=> 
            data.topartists.artist)
        .then(artist=> artist.map(artist=>{
            return{
                name: artist.name,
                image: artist.image[3]['#text'],
                likes:200,
                comments:400
            }
        }))
}

export {getArtist} 