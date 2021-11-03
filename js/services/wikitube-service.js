'use strict'

const API_KEY = 'AIzaSyAsSkeq8ZayoJWtIX9xirHwTU2UG_FVXc8';

function search(txt) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=$%7Bvalue`)
        .then(res => console.log('res',res));
}