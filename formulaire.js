const url = "http://localhost:1337"
const apiMessage = "/api/formulaires"

function postMessage() {
    let nom = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let msg = document.getElementById("message").value;

    let requete = {
        "data": {
            "Nom": nom,
            "Email": mail,
            "Message": msg
        }
    }

    fetch(url + apiMessage, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requete)
    });

    alert("Je vous tire mon chapeau... Je reviens vers vous le plus vite possible.")
}


envoyerBouton = document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();
    postMessage();
});
