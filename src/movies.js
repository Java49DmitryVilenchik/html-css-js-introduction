const jsonData = '{"page":1,"results":[{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","genre_ids":[28,14,878],"id":436270,"original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","popularity":15075.276,"poster_path":"/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","release_date":"2022-10-19","title":"Black Adam","video":false,"vote_average":7.2,"vote_count":1888},{"adult":false,"backdrop_path":"/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg","genre_ids":[14,28,35,80],"id":1013860,"original_language":"en","original_title":"R.I.P.D. 2: Rise of the Damned","overview":"When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.","popularity":6040.388,"poster_path":"/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg","release_date":"2022-11-15","title":"R.I.P.D. 2: Rise of the Damned","video":false,"vote_average":6.8,"vote_count":152},{"adult":false,"backdrop_path":"/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg","genre_ids":[35,10751,14],"id":338958,"original_language":"en","original_title":"Disenchanted","overview":"Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.","popularity":3316.598,"poster_path":"/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg","release_date":"2022-11-16","title":"Disenchanted","video":false,"vote_average":7.5,"vote_count":352}]}'
const httpPrefix = "https://image.tmdb.org/t/p/w500";
// const obj1 = {a: 10, b: "Hello"};
// const obj2 = {a: 10, b: "Hello"};
// const jsonObj1 = JSON.stringify(obj1)
// console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
// console.log(jsonObj1);
const moviesData = JSON.parse(jsonData);
// console.log(httpPrefix + moviesData.results[2].poster_path);
const ulElement = document.querySelector(".movies-list");
const sectionElements = document.querySelectorAll("section");

const textMostPopular=document.querySelector(".text-most-popular");
textMostPopular.innerHTML=getMostPopular();

const textMinPopular=document.querySelector(".text-min-popular");
textMinPopular.innerHTML=getMinPopular();


ulElement.innerHTML = getPosterImages();
function getPosterImages() {
   const arImages = moviesData.results.map(movie => 
        `<li class="movie-item"> 
        <img class="movie-image" src="${httpPrefix}${movie.poster_path}">

        <label class="movie-title">${movie.original_title}</label>
        <label class="movie-overview">${movie.overview}</label>
        
        </li>`);
    return arImages.join('');
}
function show(index) {
    sectionElements.forEach(section => section.hidden = true);
    sectionElements[index].hidden = false;
    //if (index==1) {alert("Ok");}
}
function getMostPopular() {
    const mostPopular=moviesData.results.reduce(function(maxPopular, current){
        return (maxPopular.popularity>current.popularity) ? maxPopular : current;
    });
    const infoMostPopular=`
    <img class="movie-image" src="${httpPrefix}${mostPopular.poster_path}">
    <label class="movie-title">${mostPopular.original_title}</label>
    <label class="movie-overview">${mostPopular.overview}</label>
    <label class="movie-overview">${mostPopular.popularity}</label>`;
    return infoMostPopular;
}

function getMinPopular() {
    const minPopular=moviesData.results.reduce(function(minPopular, current){
        return (minPopular.popularity<current.popularity) ? minPopular : current;
    });
    const infoMinPopular=`
    <img class="movie-image" src="${httpPrefix}${minPopular.poster_path}">
    <label class="movie-title">${minPopular.original_title}</label>
    <label class="movie-overview">${minPopular.overview}</label>
    <label class="movie-overview">${minPopular.popularity}</label>`;
    return infoMinPopular;
}