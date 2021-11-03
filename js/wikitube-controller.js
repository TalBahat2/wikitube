'use strict'

function init() {

}

function onSearch() {
    const elInput = document.querySelector('[name=search-input');
    const txt = elInput.value;
    elInput.value = '';
    if(!txt) return;
    
    // searchYoutube(txt);
    searchWiki(txt);
}