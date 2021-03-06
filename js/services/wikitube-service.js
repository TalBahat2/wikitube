'use strict'

const YOUTUBE_API_KEY = 'AIzaSyAsSkeq8ZayoJWtIX9xirHwTU2UG_FVXc8';

function searchYoutube(txt) {
    console.log('hi');
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_API_KEY}&q=$%7Bvalue`)
        .then(res => res);
}

function searchWiki(txt) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${txt}&format=json`)
        .then(res => {
            console.log(res.data.query);
            return {title: res.data.query.search[0].title, snippet: res.data.query.search[0].snippet}
        });

}