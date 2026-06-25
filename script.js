const MOTS = ["TABLE", "CHIEN", "PLAGE", "ROUTE", "LAMPE", "LIVRE", "FLEUR", "NUAGE", "PORTE", "SOURI"];
const TAILLE_MOT = 5;
const MAX_ESSAIS = 6;

const grille = document.getElementById("grille");
const formulaire = document.getElementById("formulaire");
const tentativeInput = document.getElementById("tentative");
const rejouerBtn = document.getElementById("rejouer");
const message = document.getElementById("message");

let motSecret = "";
let essai = 0;
let termine = false;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choisirMotSecret() {
    return MOTS[randomInt(0, MOTS.length - 1)];
}

function creerGrille() {
    grille.innerHTML = "";
    for (let ligne = 0; ligne < MAX_ESSAIS; ligne++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let colonne = 0; colonne < TAILLE_MOT; colonne++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }

        grille.appendChild(row);
    }
}

function nettoyerMot(valeur) {
    return valeur.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function afficherMessage(texte, type = "") {
    message.textContent = texte;
    message.className = "message" + (type ? " " + type : "");
}

function afficherTentative(mot) {
    const row = grille.children[essai];

    for (let i = 0; i < TAILLE_MOT; i++) {
        const cell = row.children[i];
        const lettre = mot[i];
        cell.textContent = lettre;

        if (lettre === motSecret[i]) {
            cell.classList.add("good");
        } else if (motSecret.includes(lettre)) {
            cell.classList.add("near");
        } else {
            cell.classList.add("bad");
        }
    }
}

function finirPartie(texte, type) {
    termine = true;
    tentativeInput.disabled = true;
    formulaire.querySelector("button[type='submit']").disabled = true;
    afficherMessage(texte, type);
}

function validerTentative(event) {
    event.preventDefault();
    if (termine) return;

    const mot = nettoyerMot(tentativeInput.value);
    tentativeInput.value = "";
    tentativeInput.focus();

    if (mot.length !== TAILLE_MOT) {
        afficherMessage("Entre un mot de 5 lettres.", "err");
        return;
    }

    afficherTentative(mot);

    if (mot === motSecret) {
        finirPartie("Bravo, tu as trouve le mot !", "ok");
        return;
    }

    essai++;
    if (essai >= MAX_ESSAIS) {
        finirPartie("Perdu ! Le mot etait " + motSecret + ".", "err");
        return;
    }

    afficherMessage("Essai " + (essai + 1) + " sur " + MAX_ESSAIS + ".");
}

function nouvellePartie() {
    motSecret = choisirMotSecret();
    essai = 0;
    termine = false;
    tentativeInput.disabled = false;
    formulaire.querySelector("button[type='submit']").disabled = false;
    tentativeInput.value = "";
    creerGrille();
    afficherMessage("Devine le mot secret.");
    tentativeInput.focus();
}

formulaire.addEventListener("submit", validerTentative);
rejouerBtn.addEventListener("click", nouvellePartie);

nouvellePartie();
