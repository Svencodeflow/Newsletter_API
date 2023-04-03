// language (sprachen)
// keywort ( Suchleiste)
//category (in welcher kategroie )


let language = document.getElementById("sprache")
let keyword = document.getElementById("key")
let nachricht;
const news = document.getElementById("news")


function test() {
    fetch(`https://newsapi.org/v2/everything?language=${language.value}&q=${keyword.value}&apiKey=bf8b591b2c224b3c8df94f2a83cba678`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach((elt) => {
            // console.log(elt)
            // console.log(elt.title);
            // console.log(elt.description);
            // console.log(elt.urlToImage);
            news.innerHTML += `<div> <div class"headerimheader">
            <h2>${elt.title}</h2>
            <p>${elt.description}</p></div>
            <img src="${elt.urlToImage}" alt="random">
        </div>`
        })
    })
}
test()