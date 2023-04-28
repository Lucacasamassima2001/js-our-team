// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.


// SELEZIONO GLI ELEMENTI

const eleImg = document.querySelector(".member-img")
const eleName = document.querySelector(".name")
const eleJob = document.querySelector(".job")

// CREO ARRAY CON I DATI


const members = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        job: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        job: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        job: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        job: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        job: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(members)

let eleContainer = document.querySelector(".container");

// CICLO PER CREAZIONE CARDS NEL DOM

for(let i = 0; i < members.length; i++){
    let member = members[i]
    // console.log(member)
    eleContainer.innerHTML += 
    `<div class="card">
    <img src="assets/imgs/${member.img}">
    <div class="name">${member.name}</div>
    <div class="job">${member.job}</div>
    </div>`
}