function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    var characters = userDatas[2].data;
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
    getLiving(characters);
    var button = document.getElementById('charSearch');
    button.addEventListener('click', function () {
        searchCharacters(characters)
    }, false)
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */

function getLiving(characters) {
    var livingCharacters = [];
    for (var k = 0; k < characters.length; k++) {
        if (characters[k].dead !== 'true') {
            livingCharacters.push(characters[k])
        }
    }

    generateCharacters(livingCharacters);
}


function generateCharacters(characters) {
    var container = document.getElementById('container');
    container.innerHTML = '';
    for (var k = 0; k < characters.length; k++) {
        container.innerHTML += `<div class ="container"><img src = "${characters[k].portrait}">
                                <p class = "names">${characters[k].name}</p>
                                </div>`;


    }
    /*
    var names = document.getElementsByClassName('names');
    names.forEach(function (element, character) {
            element.addEventListener('click', function () {
                showCharacter(character)
            }, false));
    }
    */
}

function showCharacter() {
    var selected = document.getElementById('characters');
    selected.innerHTML = `<img src ="${character[k].picture}"
                                   <p>${character[k].name}</p>
                                   <p>${character[k].bio}</p>`
}


function searchCharacters(characters) {
    var selected = document.getElementById('characters');
    var input = (document.getElementById('charName').value).toUpperCase();
    for (var k = 0; k < characters.length; k++) {
        if ((characters[k].name).toUpperCase() === input) {
            selected.innerHTML = `<img src ="${character[k].picture}"
            <p>${character[k].name}</p>
            <p>${character[k].bio}</p>`
        }
    }
}