

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

const title = document.getElementById("title");

const content = document.getElementById("content");

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const neutral = document.getElementById("neutral");

const update = document.getElementById("update");

update.onclick = function () {
    // get links
    ajaxGet("http://localhost:1317/gov/proposal/1", function (reponse) {
        const liens = JSON.parse(reponse);
        
        yes.innerHTML = "Yes: " + liens.yes;
        no.innerHTML = "No: " + liens.no;
        neutral.innerHTML = "Neutral: " + liens.neutral;
        title.innerHTML = liens.title;
        content.innerHTML = liens.content;
    });
}