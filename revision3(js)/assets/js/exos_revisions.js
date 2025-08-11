// Exercice 1 : Modifier un élément html
// Quand on clique sur le bouton, le text du paragraphe devient "Salut"

let btn= document.querySelector('#changer');

let pjs = document.querySelector('#texte');

btn.addEventListener('click', function(){
    // btn.previousElementSibling.textContent="Salut"
    
    if(pjs.textContent == "Bonjour"){
        pjs.textContent= "Salut !";
    } else {
        pjs.textContent= "Bonjour";
    };
});

// Exercice 2:
// Quand on clique sur le bouton, un nouveau p est ajouter dans #zone avec le text nouveau message

let btnAjout= document.querySelector("#ajouter");
let zoneAjout=document.querySelector("#zone");

btnAjout.addEventListener('click',function(){
let p =document.createElement('p');
p.textContent = "Nouveau message";

zoneAjout.appendChild(p);

});

// Exercice 3: Supprimer un element;

let btnSup = document.querySelector('#supprimer');
let cibleJs = document.querySelector('#cible');

btnSup.addEventListener('click',function(){
    if(document.querySelector("#cible")){
        cibleJs.remove();
    // } else {
    //     let pAjout = 
    }
    
});


