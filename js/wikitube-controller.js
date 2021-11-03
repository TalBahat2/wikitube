'use strict'

function init() {

}

function onSearch() {
    const elInput = document.querySelector('[name=search-input');
    const txt = elInput.value;
    elInput.value = '';
    if(!txt) return;
    
    searchWiki(txt).then(renderWiki);
    searchYoutube(txt).then(res => console.log('res', res));
}

function renderWiki(res) {
    document.querySelector('.wiki-section').innerHTML = `
        <h3>${res.title}</h3>
        ${res.snippet}
    `
    console.log('res.snippet',res.snippet);
}